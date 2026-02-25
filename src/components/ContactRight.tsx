import React from "react";
import InputGroups from "./InputGroups";

function ContactRight() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string)?.trim() ?? "";
    const email = (formData.get("email") as string)?.trim() ?? "";
    const subject = (formData.get("subject") as string)?.trim() ?? "";
    const message = (formData.get("message") as string)?.trim() ?? "";

    const body = [
      message,
      "",
      `Regards,`,
      name,
      `Reply to: ${email}`,
    ].join("\n");

    const mailtoUrl = `mailto:josue.jure@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <>
      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <InputGroups />

          <div className="input-group">
            <label htmlFor="subject">
              Your subject <i className="fa-solid fa-asterisk"></i>
            </label>
            <input type="text" name="subject" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">
              Your message <i className="fa-solid fa-asterisk"></i>
            </label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactRight;
