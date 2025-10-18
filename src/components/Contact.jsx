import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import resume from '../data/resume';
import Section from "./Section";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_esmm7yk',     // 🔹 Replace with your EmailJS Service ID
        'template_ixrtuao',    // 🔹 Replace with your Template ID
        form.current,
        'a7i_9oHwGC8tJDek2'      // 🔹 Replace with your Public Key
      )
      .then(
        () => {
          setStatus('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('❌ Failed to send. Please try again later.');
        }
      );
  };

  return (
    <Section id='contact' title='Contact Me'>
      <div className="card glass p-4">
        <p>
          If you'd like to reach out for opportunities or collaborations, please email{" "}
          <a className="text-accent" href={"mailto:" + resume.email}>{resume.email}</a> or connect on{" "}
          <a href={resume.linkedin} className="text-accent" target="_blank" rel="noreferrer">LinkedIn</a>.
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" name="user_name" placeholder="Your name" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" name="user_email" placeholder="you@example.com" type="email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" name="message" rows="4" required></textarea>
          </div>

          <button className="btn btn-primary" type="submit">
            Send Message
          </button>

          {status && <p className="mt-3">{status}</p>}
        </form>
      </div>
    </Section>
  );
}
