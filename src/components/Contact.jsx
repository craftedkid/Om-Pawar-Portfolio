import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {motion} from "framer-motion"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSending(true);

    emailjs
      .send(
        "service_nrcmbq6",
        "template_mdvlb7o",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "xXLFjBTDguDpjFg_S"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);

        toast.error("Failed to send message");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
  <section id="contact"className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
    <motion.form
            initial={{opacity:0}}
            whileInView={{opacity: 1}}
            transition = {{duration:0.8, delay: 1}}
            onSubmit={handleSubmit}
            className="w-full max-w-xl">
      {/* Heading */}
      <div className="mb-14 text-center">
        <h2
          className="text-5xl md:text-6xl text-white font-light mb-3"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Let's Connect
        </h2>

        <div className="w-20 h-px bg-[#C9A84C] mx-auto"></div>
      </div>

      {/* Name */}
      <div className="mb-8">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="
            w-full
            bg-transparent
            border-0
            border-b
            border-gray-800
            py-4
            text-white
            text-lg
            placeholder:text-gray-500
            focus:outline-none
            focus:border-[#C9A84C]
            transition-all
            duration-300
          "
        />

        {errors.name && (
          <motion.p 
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          aria-live = "polite"
          className="text-red-400 text-sm mt-2">
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email */}
      <div className="mb-8">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="
            w-full
            bg-transparent
            border-0
            border-b
            border-gray-800
            py-4
            text-white
            text-lg
            placeholder:text-gray-500
            focus:outline-none
            focus:border-[#C9A84C]
            transition-all
            duration-300
          "
        />

        {errors.email && (
          <motion.p 
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          aria-live = "polite"
          className="text-red-400 text-sm mt-2">
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Message */}
      <div className="mb-10">
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="
            w-full
            bg-transparent
            border-0
            border-b
            border-gray-800
            py-4
            text-white
            text-lg
            resize-none
            placeholder:text-gray-500
            focus:outline-none
            focus:border-[#C9A84C]
            transition-all
            duration-300
          "
        />

        {errors.message && (
          <motion.p 
          initial={{opacity:0}}
          whileInView={{opacity: 1}}
          aria-live = "polite"
          className="text-red-400 text-sm mt-2">
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={sending}
          className="
            px-10
            py-4
            border
            border-[#C9A84C]
            text-[#C9A84C]
            uppercase
            tracking-[0.2em]
            text-sm
            transition-all
            duration-300
            hover:bg-[#C9A84C]
            hover:text-black
            disabled:opacity-50
          "
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </motion.form>
  </section>
);
};

export default Contact;