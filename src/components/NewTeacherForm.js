import { useState } from "react";

export default function NewTeacherForm({ close, update }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  async function submit(e) {
    e.preventDefault();

    await fetch("http://localhost:8080/teachers/", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        age,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    update();
    close();
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Voornaam"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Achternaam"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="Number"
        step="1"
        placeholder="Leeftijd"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Opslaan</button>
      <button type="button" onClick={close}>
        Sluiten
      </button>
    </form>
  );
}
