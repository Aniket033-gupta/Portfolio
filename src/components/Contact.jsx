import "./Contact.css";
import { Mail, MessageCircle, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">

          <h3 className="contact-heading">Let's work together!</h3>

          <p className="contact-desc">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>

          <div className="contact-cards">
            <a href="mailto:guptaaniketgupta737@gmail.com" className="contact-card">
              <div className="card-icon"><Mail size={22} /></div>
              <div className="card-text">
                <h4>Email</h4>
                <p>guptaaniketgupta737@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/918853059862" target="_blank" rel="noreferrer" className="contact-card">
              <div className="card-icon"><MessageCircle size={22} /></div>
              <div className="card-text">
                <h4>WhatsApp</h4>
                <p>+91 8853059862</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/aniket-kumar-gupta-dev09" target="_blank" rel="noreferrer" className="contact-card">
              <div className="card-icon"><Linkedin size={22} /></div>
              <div className="card-text">
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/aniket-kumar-gupta-dev09</p>
              </div>
            </a>

            <a href="https://github.com/Aniket033-gupta" target="_blank" rel="noreferrer" className="contact-card">
              <div className="card-icon"><Github size={22} /></div>
              <div className="card-text">
                <h4>GitHub</h4>
                <p>github.com/Aniket033-gupta</p>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          action="https://formspree.io/f/mkoqlvlk"
          method="POST"
          className="contact-form"
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>

          <input type="text" name="subject" placeholder="Subject" required />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <div className="form-submit">
            <button type="submit">
              <Send size={18} /> Send Message
            </button>
          </div>
        </form>

      </div>

    </section>
  );
}