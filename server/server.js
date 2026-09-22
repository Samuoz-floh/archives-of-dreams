import "dotenv/config";
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MPESA_BASE_URL =
  process.env.MPESA_ENVIRONMENT === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";

const paymentStatuses = new Map();

async function getMpesaAccessToken() {
  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    throw new Error("M-PESA consumer credentials are missing.");
  }

  const credentials = Buffer.from(
    `${consumerKey}:${consumerSecret}`
  ).toString("base64");

  const response = await axios.get(
    `${MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
    {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    }
  );

  return response.data.access_token;
}

function generateMpesaPassword(timestamp) {
  const shortcode = process.env.MPESA_SHORTCODE;
  const passkey = process.env.MPESA_PASSKEY;

  if (!shortcode || !passkey) {
    throw new Error("M-PESA shortcode or passkey is missing.");
  }

  return Buffer.from(
    `${shortcode}${passkey}${timestamp}`
  ).toString("base64");
}

function formatPhoneNumber(phone) {
  let cleaned = String(phone).replace(/\D/g, "");

  if (cleaned.startsWith("0")) {
    cleaned = `254${cleaned.substring(1)}`;
  }

  if (cleaned.startsWith("254") && cleaned.length === 12) {
    return cleaned;
  }

  throw new Error(
    "Enter a valid Kenyan M-PESA number, for example 0712345678."
  );
}

function getPaymentStatusMessage(resultCode) {
  if (resultCode === 0) {
    return "Payment completed successfully.";
  }

  if (resultCode === 1037) {
    return "The M-PESA payment prompt received no response from the user.";
  }

  if (resultCode === 1032) {
    return "The M-PESA payment was cancelled by the user.";
  }

  return "The M-PESA payment was not completed.";
}

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Archives of Dreams M-PESA server is running.",
    environment: process.env.MPESA_ENVIRONMENT || "sandbox",
  });
});

app.post("/api/mpesa/stkpush", async (req, res) => {
  try {
    const { amount, phoneNumber } = req.body;

    const numericAmount = Number(amount);

    if (!Number.isFinite(numericAmount) || numericAmount < 1) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid donation amount.",
      });
    }

    if (!phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "Enter your M-PESA phone number.",
      });
    }

    const formattedPhone = formatPhoneNumber(phoneNumber);
    const finalAmount = Math.round(numericAmount);

    const timestamp = new Date()
      .toISOString()
      .replace(/\D/g, "")
      .slice(0, 14);

    const password = generateMpesaPassword(timestamp);
    const accessToken = await getMpesaAccessToken();

    const callbackUrl = process.env.MPESA_CALLBACK_URL;

    if (!callbackUrl || !callbackUrl.startsWith("https://")) {
      return res.status(500).json({
        success: false,
        message:
          "M-PESA callback URL is not configured. A secure HTTPS callback URL is required.",
      });
    }

    const shortcode = Number(process.env.MPESA_SHORTCODE);

    if (!Number.isFinite(shortcode)) {
      throw new Error("M-PESA shortcode is invalid.");
    }

    const requestBody = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: finalAmount,
      PartyA: formattedPhone,
      PartyB: shortcode,
      PhoneNumber: formattedPhone,
      CallBackURL: callbackUrl,
      AccountReference: "ARCHIVES-OF-DREAMS",
      TransactionDesc: "Donation to Archives of Dreams Education Center",
    };

    const response = await axios.post(
      `${MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    const merchantRequestID = response.data.MerchantRequestID;
    const checkoutRequestID = response.data.CheckoutRequestID;

    paymentStatuses.set(checkoutRequestID, {
      checkoutRequestID,
      merchantRequestID,
      status: "pending",
      resultCode: null,
      resultDescription: null,
      amount: finalAmount,
      phoneNumber: formattedPhone,
      receiptNumber: null,
      transactionDate: null,
      phoneNumberUsed: formattedPhone,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return res.json({
      success: true,
      message: "M-PESA payment prompt request has been sent.",
      data: {
        merchantRequestID,
        checkoutRequestID,
        responseDescription: response.data.ResponseDescription,
        status: "pending",
      },
    });
  } catch (error) {
    console.error(
      "M-PESA STK Push Error:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      success: false,
      message:
        error.response?.data?.errorMessage ||
        error.response?.data?.ResponseDescription ||
        error.message ||
        "Unable to initiate the M-PESA payment.",
    });
  }
});

app.get("/api/mpesa/status/:checkoutRequestID", (req, res) => {
  const { checkoutRequestID } = req.params;

  const payment = paymentStatuses.get(checkoutRequestID);

  if (!payment) {
    return res.status(404).json({
      success: false,
      message: "Payment transaction was not found.",
    });
  }

  return res.json({
    success: true,
    data: payment,
  });
});

app.post("/api/mpesa/callback", (req, res) => {
  try {
    console.log(
      "M-PESA Callback Received:",
      JSON.stringify(req.body, null, 2)
    );

    const callback =
      req.body?.Body?.stkCallback;

    if (!callback) {
      return res.json({
        ResultCode: 0,
        ResultDesc: "Callback received successfully.",
      });
    }

    const checkoutRequestID = callback.CheckoutRequestID;
    const merchantRequestID = callback.MerchantRequestID;
    const resultCode = Number(callback.ResultCode);
    const resultDescription =
      callback.ResultDesc || "M-PESA payment result received.";

    const existingPayment =
      paymentStatuses.get(checkoutRequestID);

    const callbackMetadata =
      callback.CallbackMetadata?.Item || [];

    const metadata = {};

    callbackMetadata.forEach((item) => {
      if (item?.Name) {
        metadata[item.Name] = item.Value ?? null;
      }
    });

    const successfulPayment = resultCode === 0;

    const updatedPayment = {
      ...(existingPayment || {}),
      checkoutRequestID,
      merchantRequestID,
      status: successfulPayment ? "success" : "failed",
      resultCode,
      resultDescription,
      receiptNumber:
        metadata.MpesaReceiptNumber || null,
      transactionDate:
        metadata.TransactionDate || null,
      phoneNumberUsed:
        metadata.PhoneNumber || existingPayment?.phoneNumber || null,
      amount:
        metadata.Amount ??
        existingPayment?.amount ??
        null,
      updatedAt: new Date().toISOString(),
    };

    paymentStatuses.set(
      checkoutRequestID,
      updatedPayment
    );

    console.log(
      "M-PESA Payment Status:",
      JSON.stringify(
        {
          checkoutRequestID,
          status: updatedPayment.status,
          resultCode,
          message: getPaymentStatusMessage(resultCode),
        },
        null,
        2
      )
    );

    return res.json({
      ResultCode: 0,
      ResultDesc: "Callback received successfully.",
    });
  } catch (error) {
    console.error(
      "M-PESA Callback Error:",
      error.message
    );

    return res.json({
      ResultCode: 0,
      ResultDesc: "Callback received.",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Archives of Dreams M-PESA server running on port ${PORT}`
  );
});