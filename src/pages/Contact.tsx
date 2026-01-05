import { useState } from "react";
import { Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

function getErrorMessage(err: unknown): string {
  if (typeof err === "string") return err;

  if (err && typeof err === "object") {
    if ("text" in err && typeof (err as { text?: unknown }).text === "string") {
      return (err as { text: string }).text;
    }
    if (
      "message" in err &&
      typeof (err as { message?: unknown }).message === "string"
    ) {
      return (err as { message: string }).message;
    }
  }

  return "Something went wrong sending the email.";
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMsg("Email service is not configured correctly.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          /* 🔹 MAIN RECIPIENT (YOU) */
          to_email: "tanzeelnaz7@gmail.com",

          /* 🔹 USER DETAILS */
          from_name: form.name,
          reply_to: form.email,
          phone: form.phone,
          message: form.message,
        },
        publicKey
      );

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg(getErrorMessage(err));
    }
  }

  return (
    <Container fluid className="contact">
      <div className="contact__card">
        <header className="contact__header">
          <h1 className="contact__title">Contact Me</h1>
          <p className="contact__subtitle">
            Feel free to reach out for opportunities, collaborations, or questions.
          </p>
        </header>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="contact__btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="contact__subtitle" style={{ textAlign: "center", marginTop: 10 }}>
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="contact__subtitle" style={{ textAlign: "center", marginTop: 10 }}>
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </Container>
  );
}
