import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !city) return;

    addStudent({ name, email, city });

    setName("");
    setEmail("");
    setCity("");
  };

  return (
    <>
      <h2>Student form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input
            type="text"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          Email:
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          City:
          <input
            type="text"
            placeholder="enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default StudentForm;
