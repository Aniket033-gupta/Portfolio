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

          <a href="mailto:guptaaniketgupta737@gmail.com" style={{ textDecoration: "none", color: "inherit" }} className="contact-card" >
            <span>📧</span>
            <p>guptaaniketgupta737@gmail.com</p>
          </a>

          <a 
            href="https://wa.me/918853059862" 
            target="_blank" 
            rel="noreferrer" 
            style={{ textDecoration: "none", color: "inherit", display: "block", marginTop: "15px" }} 
            className="contact-card"
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" color="#25D366" style={{ marginTop: "3px" }}>
                <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.553 4.174 1.6 5.996L.145 24l6.146-1.611a11.966 11.966 0 005.74 1.472h.005c6.643 0 12.029-5.389 12.029-12.032C24.065 5.385 18.675 0 12.031 0zm0 21.821h-.005a9.932 9.932 0 01-5.06-1.378l-.363-.215-3.759.986.999-3.663-.238-.376A9.927 9.927 0 012.031 12.03c0-5.517 4.489-10.007 10.005-10.007 5.518 0 10.005 4.49 10.005 10.007 0 5.518-4.487 10.005-10.005 10.005l-.005.786zm5.492-7.508c-.301-.151-1.78-.881-2.057-.982-.276-.1-.476-.151-.678.151-.202.302-.777.982-.953 1.183-.176.202-.352.227-.654.126-.301-.101-1.272-.469-2.423-1.496-.895-.8-.15-1.127 1.15-2.617.202-.301.101-.553-.05-.854-.151-.302-.678-1.637-.928-2.24-.242-.589-.487-.509-.678-.518-.176-.008-.377-.008-.577-.008-.201 0-.528.075-.805.377-.276.302-1.056 1.031-1.056 2.515s1.082 2.917 1.233 3.118c.151.202 2.126 3.245 5.148 4.545.719.31 1.28.495 1.719.633.722.229 1.38.196 1.898.119.58-.087 1.78-.727 2.032-1.43.252-.704.252-1.308.176-1.434-.076-.126-.277-.202-.578-.352z" />
              </svg>
            </span>
            <p>+91 8853059862</p>
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          action="https://formspree.io/f/mkoqlvlk"
          method="POST"
          className="contact-form"
        >

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