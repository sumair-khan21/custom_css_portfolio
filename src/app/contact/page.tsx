import Link from 'next/link';
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <>
      <section>
        <div className="grid-contact">
          <div className="flex-contact">
            <div className="contact-ctn">
              <h2>Let&apos;s Connect</h2>
              <p>
                I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              <div className="social-media">
                <Link href="#">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </Link>
                <Link href="#">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form action="">
              <div>
                <label htmlFor="name" className="contact-email">
                  Your email
                </label>
                <input type="email" placeholder="abc@gmail.com" />
              </div>
              <div>
                <label htmlFor="Subject" className="contact-email">
                  Subject
                </label>
                <input type="text" placeholder="Just saying hi!" />
              </div>
              <div>
                <label htmlFor="message" className="contact-email">
                  Message
                </label>
                <input type="text" placeholder="Let&apos;s talk about..." />
              </div>
              <button className="contact-btn">
                <a href="#">Send Message</a>
              </button>
            </form>
          </div>
        </div>
      </section>  
    </>
  );
};

export default Contact;
