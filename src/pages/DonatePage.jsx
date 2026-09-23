import React, { useState } from "react";
import {
  Shirt,
  Footprints,
  Utensils,
  Gamepad2,
  Pencil,
  GraduationCap,
  WalletCards,
  Heart,
  Smartphone,
  ArrowRight,
  Home,
  Users,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import "./DonatePage.css";

const MPESA_API_URL =
  "https://archives-of-dreams-mpesa.onrender.com";

const wait = (milliseconds) =>
  new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });

function DonatePage() {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const donationItems = [
    {
      icon: Shirt,
      title: "School Uniforms",
      text: "Help provide school uniforms for children who need them.",
    },
    {
      icon: Footprints,
      title: "Shoes",
      text: "Support children with comfortable and suitable school shoes.",
    },
    {
      icon: Utensils,
      title: "Food",
      text: "Help provide nutritious food and support children's wellbeing.",
    },
    {
      icon: Gamepad2,
      title: "Play Materials",
      text: "Provide learning and play materials that encourage creativity.",
    },
    {
      icon: Pencil,
      title: "Stationery",
      text: "Help provide essential stationery and learning supplies.",
    },
    {
      icon: GraduationCap,
      title: "Tuition Fees",
      text: "Help support a child's tuition fees and access to education.",
    },
    {
      icon: WalletCards,
      title: "Full Fees",
      text: "Support the full school fees required to help a child continue their education.",
    },
  ];

  const urgentSupportItems = [
    {
      icon: Home,
      title: "School Rent",
      text: "Support the school's ongoing rental costs so learning can continue in a stable environment.",
    },
    {
      icon: Users,
      title: "Teacher Compensation",
      text: "Help support the teachers who provide daily care, instruction, and guidance to learners.",
    },
    {
      icon: Utensils,
      title: "Feeding Programme",
      text: "Help provide food and support the wellbeing of children throughout the school term.",
    },
    {
      icon: BookOpen,
      title: "Learning Materials",
      text: "Help provide textbooks and other learning resources needed by teachers and learners.",
    },
    {
      icon: Shirt,
      title: "School Uniforms",
      text: "Support the school's goal of developing and providing suitable uniforms for learners.",
    },
  ];

  const checkPaymentStatus = async (checkoutRequestID) => {
    const maxAttempts = 30;
    const interval = 2000;

    for (
      let attempt = 0;
      attempt < maxAttempts;
      attempt += 1
    ) {
      try {
        const response = await fetch(
          `${MPESA_API_URL}/api/mpesa/status/${encodeURIComponent(
            checkoutRequestID
          )}`
        );

        if (response.ok) {
          const data = await response.json();
          const payment = data?.data;

          if (payment?.status === "success") {
            const receiptMessage = payment.receiptNumber
              ? ` M-PESA receipt: ${payment.receiptNumber}.`
              : "";

            setIsSuccess(true);
            setFormMessage(
              `Donation payment completed successfully.${receiptMessage}`
            );
            return;
          }

          if (payment?.status === "failed") {
            setIsSuccess(false);

            if (payment.resultCode === 1037) {
              setFormMessage(
                "The M-PESA prompt received no response from the user. No donation was completed."
              );
            } else if (payment.resultCode === 1032) {
              setFormMessage(
                "The M-PESA payment was cancelled. No donation was completed."
              );
            } else {
              setFormMessage(
                payment.resultDescription ||
                  "The M-PESA payment was not completed."
              );
            }

            return;
          }
        }
      } catch (error) {
        console.error("Payment status check error:", error);
      }

      if (attempt < maxAttempts - 1) {
        await wait(interval);
      }
    }

    setIsSuccess(false);
    setFormMessage(
      "The M-PESA prompt was sent, but we could not confirm the final payment status yet. Please check your M-PESA messages before trying again."
    );
  };

  const handleDonationSubmit = async (event) => {
    event.preventDefault();

    setFormMessage("");
    setIsSuccess(false);

    const numericAmount = Number(amount);
    const cleanPhone = phone.replace(/\s+/g, "");

    if (!Number.isFinite(numericAmount) || numericAmount < 1) {
      setFormMessage("Please enter a valid donation amount.");
      return;
    }

    if (!/^(\+254|254|0)[17]\d{8}$/.test(cleanPhone)) {
      setFormMessage(
        "Please enter a valid Kenyan M-PESA phone number, for example 0712345678 or 0112345678."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${MPESA_API_URL}/api/mpesa/stkpush`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: Math.round(numericAmount),
            phoneNumber: cleanPhone,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to start the M-PESA payment. Please try again."
        );
      }

      const checkoutRequestID =
        data?.data?.checkoutRequestID;

      if (!checkoutRequestID) {
        throw new Error(
          "M-PESA started the payment request, but no transaction reference was returned."
        );
      }

      setFormMessage(
        "M-PESA payment prompt sent. Please check your phone and enter your M-PESA PIN to complete the donation."
      );

      await checkPaymentStatus(checkoutRequestID);
    } catch (error) {
      console.error("Donation payment error:", error);

      setIsSuccess(false);
      setFormMessage(
        error.message ||
          "Unable to start the M-PESA payment. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="donate-page">
      <section
        className="donate-hero"
        aria-labelledby="donate-page-heading"
      >
        <div className="container">
          <div className="donate-hero-content">
            <span className="section-label">
              SUPPORT THE CHILDREN
            </span>

            <h1 id="donate-page-heading">
              Give a child the{" "}
              <span>opportunity to dream.</span>
            </h1>

            <p>
              Your support helps Archives of Dreams Education
              Center provide children with education, care,
              learning materials, food, and other essential
              resources they need to learn, grow, and pursue
              their dreams.
            </p>

            <a
              href="#donation-payment"
              className="donate-primary-button"
            >
              Make a Donation
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      <section
        className="donate-payment-section"
        id="donation-payment"
        aria-labelledby="payment-heading"
      >
        <div className="container">
          <div className="donate-payment-grid">
            <div className="donate-payment-intro">
              <span className="section-label">
                HOW TO GIVE
              </span>

              <h2 id="payment-heading">
                Support the children{" "}
                <span>through M-PESA.</span>
              </h2>

              <p>
                Make a direct contribution to Archives of Dreams
                Education Center. Enter any amount you would
                like to give and the M-PESA number that should
                receive the payment prompt.
              </p>

              <div className="donate-trust-points">
                <div>
                  <CheckCircle2
                    size={19}
                    aria-hidden="true"
                  />
                  <span>
                    Simple and secure donation process
                  </span>
                </div>

                <div>
                  <CheckCircle2
                    size={19}
                    aria-hidden="true"
                  />
                  <span>
                    Give any amount you choose
                  </span>
                </div>

                <div>
                  <CheckCircle2
                    size={19}
                    aria-hidden="true"
                  />
                  <span>
                    M-PESA payment confirmation
                  </span>
                </div>
              </div>
            </div>

            <div className="mpesa-card">
              <div className="mpesa-card-header">
                <div
                  className="mpesa-icon"
                  aria-hidden="true"
                >
                  <Smartphone size={24} />
                </div>

                <div>
                  <span className="mpesa-label">
                    M-PESA
                  </span>

                  <h3>Make a Donation</h3>
                </div>
              </div>

              <form
                className="donation-form"
                onSubmit={handleDonationSubmit}
                noValidate
              >
                <div className="donation-form-group">
                  <label htmlFor="donation-amount">
                    Donation amount
                  </label>

                  <div className="donation-input-wrapper">
                    <span>KES</span>

                    <input
                      id="donation-amount"
                      name="amount"
                      type="number"
                      min="1"
                      step="1"
                      inputMode="numeric"
                      placeholder="Enter the amount you wish to give"
                      value={amount}
                      onChange={(event) => {
                        setAmount(event.target.value);
                        setFormMessage("");
                        setIsSuccess(false);
                      }}
                      required
                    />
                  </div>

                  <small>
                    Enter any amount you would like to donate.
                  </small>
                </div>

                <div className="donation-form-group">
                  <label htmlFor="donation-phone">
                    M-PESA phone number
                  </label>

                  <input
                    id="donation-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="0712 345 678 or 0112 345 678"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                      setFormMessage("");
                      setIsSuccess(false);
                    }}
                    required
                  />

                  <small>
                    Enter the Kenyan M-PESA number that should
                    receive the payment prompt.
                  </small>
                </div>

                <button
                  type="submit"
                  className="donate-mpesa-button"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting
                    ? "Processing M-PESA Payment..."
                    : "Continue with M-PESA"}

                  {!isSubmitting && (
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                    />
                  )}
                </button>

                {formMessage && (
                  <div
                    className={`donation-form-message${
                      isSuccess
                        ? " donation-form-message-success"
                        : ""
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {formMessage}
                  </div>
                )}
              </form>

              <div className="mpesa-manual-option">
                <div className="mpesa-manual-header">
                  <span className="mpesa-label">
                    MANUAL M-PESA OPTION
                  </span>

                  <h3>Use PayBill</h3>
                </div>

                <div className="payment-detail">
                  <span>PayBill Number</span>
                  <strong>247247</strong>
                </div>

                <div className="payment-detail">
                  <span>Account Number</span>
                  <strong>0320185552726</strong>
                </div>

                <div className="payment-detail payment-detail-last">
                  <span>Account Name</span>
                  <strong>ARCHIVES OF DREAMS CBO</strong>
                </div>

                <div className="mpesa-instructions">
                  <strong>How to donate manually</strong>

                  <ol>
                    <li>
                      Open M-PESA on your phone.
                    </li>

                    <li>
                      Select Lipa na M-PESA.
                    </li>

                    <li>
                      Select PayBill.
                    </li>

                    <li>
                      Enter <strong>247247</strong> as the
                      Business Number.
                    </li>

                    <li>
                      Enter{" "}
                      <strong>0320185552726</strong> as the
                      Account Number.
                    </li>

                    <li>
                      Enter the amount you wish to contribute
                      and confirm.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="donate-support-section"
        aria-labelledby="urgent-support-heading"
      >
        <div className="container">
          <div className="donate-section-heading">
            <span className="section-label">
              CURRENT PRIORITIES
            </span>

            <h2 id="urgent-support-heading">
              Help meet the school's{" "}
              <span>urgent needs.</span>
            </h2>

            <p>
              The school has identified several important areas
              where support can help keep learning going and
              meet the basic needs of children.
            </p>
          </div>

          <div className="donate-support-grid">
            {urgentSupportItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="donate-support-card"
                  key={item.title}
                >
                  <div
                    className="donate-support-icon"
                    aria-hidden="true"
                  >
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="donate-support-section"
        aria-labelledby="support-heading"
      >
        <div className="container">
          <div className="donate-section-heading">
            <span className="section-label">
              WAYS TO HELP
            </span>

            <h2 id="support-heading">
              Your support can meet{" "}
              <span>real needs.</span>
            </h2>

            <p>
              Contributions can help provide children with the
              resources they need throughout their learning
              journey.
            </p>
          </div>

          <div className="donate-support-grid">
            {donationItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="donate-support-card"
                  key={item.title}
                >
                  <div
                    className="donate-support-icon"
                    aria-hidden="true"
                  >
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="donate-cta"
        aria-labelledby="donate-cta-heading"
      >
        <div className="container">
          <div className="donate-cta-card">
            <div
              className="donate-cta-icon"
              aria-hidden="true"
            >
              <Heart size={26} />
            </div>

            <div className="donate-cta-content">
              <span className="section-label">
                MAKE A DIFFERENCE
              </span>

              <h2 id="donate-cta-heading">
                Every contribution can help{" "}
                <span>build a brighter future.</span>
              </h2>

              <p>
                Thank you for standing with Archives of Dreams
                Education Center and the children we serve.
              </p>
            </div>

            <a
              href="#donation-payment"
              className="donate-secondary-button"
            >
              Donate Now
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DonatePage;