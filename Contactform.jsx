import { useState } from "react";


const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} required />

      <select name="service" onChange={handleChange} required>
        <option value="">Select Service</option>
        <option value="credit">Credit Card</option>
        <option value="loan">Loan</option>
      </select>

      <textarea
        name="message"
        placeholder="How can we help?"
        onChange={handleChange}
      />

      <button type="submit">Submit Form →</button>
    </form>
  );
};

export default ContactForm;