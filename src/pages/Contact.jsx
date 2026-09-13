import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false);

function handleSubmit(event) {
  event.preventDefault();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  setSubmitted(true);
}

  return (
    <main>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>

        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Message
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>

        <button type="submit">
          Send Message
        </button>

      </form>

      {submitted && (
        <p>
          Thanks, {name}! Your message has been received.
        </p>
      )}
    </main>
  );
}

export default Contact;