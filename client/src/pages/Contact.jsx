import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    const phone = "919410977778";

    const text = `New Contact Form Message 🚀

Name: ${name}
Email: ${email}
Message: ${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    e.target.reset();
  };

  return (
    <div className="pt-24 px-4  md:px-10 py-10">
      <h1 className="text-2xl md:text-4xl font-semibold text-center mb-8">
        Contact Us
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* LEFT */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold">📍 Address</h2>
            <p className="text-gray-600 text-sm mt-1">
              Virasat Hotel, Badrinath Rd,Bagwan, Uttarakhand 249161, India
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">📞 Phone</h2>
            <p className="text-gray-600 text-sm mt-1">
              +91 9410977778
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">✉️ Email</h2>
            <p className="text-gray-600 text-sm mt-1">
              virasathotelandrestaurant@gmail.com
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendToWhatsApp}
          className="bg-white shadow-md rounded-2xl p-5 md:p-8 space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 text-sm"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2 text-sm"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full border rounded-lg px-4 py-2 text-sm"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2.5 rounded-full font-semibold hover:scale-105 transition"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;