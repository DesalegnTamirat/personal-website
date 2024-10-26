import emailjs from "emailjs-com";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4khmp83", 
        "template_nmi1dyi", 
        formData,
        "gYpcYGbejmDt3ecle" 
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          alert("Oops! Something went wrong.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="cta-section" className="form-section">
      <div className="form-container">
      <h2>Send Me Email</h2>
      <hr className="small"/>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
        />

        <button type="submit">
          Submit
        </button>
      </form>
      </div>
    </section>
  );
};


export default Form;
