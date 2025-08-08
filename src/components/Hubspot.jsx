import React, { useState } from "react";

export default function HubspotForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      fields: [
        { name: "email", value: e.target.email.value },
        { name: "firstname", value: e.target.firstname.value },
        { name: "message", value: e.target.message.value },
      ],
    };

    const portalId = "YOUR_PORTAL_ID";
    const formId = "YOUR_FORM_ID";

    const endpoint = `https://forms.hubspot.com/uploads/form/v2/${portalId}/${formId}`;

    const body = new URLSearchParams();
    formData.fields.forEach((field) => {
      body.append(field.name, field.value);
    });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return <div className="text-green-600">Thanks for contacting us!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="firstname"
        placeholder="Your Name"
        required
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="border p-2 w-full"
      ></textarea>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
