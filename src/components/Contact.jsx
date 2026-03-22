import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <p className="contact-label">// Contact</p>

          <h2>Let's Work Together</h2>

          <p className="contact-desc">
            Open for internships, collaborations and freelance work.
            Feel free to send me a message.
          </p>

          <div className="contact-card">
            <span>📧</span>
            <p>guptaaniketgupta737@gmail.com</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          method="POST"
          className="contact-form"
        >
          {/* REQUIRED hidden input */}
          <input type="hidden" name="form-name" value="contact" />

          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="you@email.com" required />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your message..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>

    </section>
  );
}