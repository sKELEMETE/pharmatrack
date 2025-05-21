import Ad from "../Components/Ad";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";
import "./ContactUsPage.css";
import { useEffect } from "react";

function ContactUsPage() {
  useEffect(() => {
    const form = document.getElementById("contactForm");
    const output = document.getElementById("formOutput");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("formName").value.trim();
      const email = document.getElementById("formEmail").value.trim();
      const message = document.getElementById("formMessage").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      const logText =
        `Submitted Info:\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Message: ${message}`;

      output.textContent = logText;

      form.reset();
    });
  }, []);

  return (
    <>
      <Ad />
      <div
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <SideNav />
        <div
          style={{
            flexGrow: 1,
            padding: "1rem 0 0 9.5rem",
            overflowY: "auto",
          }}
        >
          <h1
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "100%",
              height: "20vh",
              color: "#0d6efd",
            }}
          >
            Contact Us
          </h1>

          <main className="contact-main">
            <div className="contact-info">
              <h2>Contact Info</h2>
              <p>Name: Justin Tisbe</p>
              <p>Email: justintisbe2@gmail.com</p>
              <p>
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/DADADADUXTIN"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </p>
            </div>
            <div className="contact-info">
              <h2>Contact Info</h2>
              <p>Name: Gio Alajid</p>
              <p>Email: </p>
              <p>
                Facebook:{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </p>
            </div>
            <div className="contact-info">
              <h2>Contact Info</h2>
              <p>Name: Jabao</p>
              <p>Email: </p>
              <p>
                Facebook:{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </p>
            </div>
          </main>

          <div className="form-and-log-container">
            <form id="contactForm" className="contact-form text-white">
              <h2 className="form-heading">Send Us a Message</h2>
              <div className="mb-3">
                <label htmlFor="formName" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="formName" />
              </div>
              <div className="mb-3">
                <label htmlFor="formEmail" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="formEmail" />
              </div>
              <div className="mb-3">
                <label htmlFor="formMessage" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="formMessage"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>

            <div id="formOutput" aria-live="polite" />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
