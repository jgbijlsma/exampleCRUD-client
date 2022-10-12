export default function Teacher({ data, update }) {
  async function remove() {
    await fetch(`http://localhost:8080/teachers/${data.id}`, {
      method: "DELETE",
    });

    update();
  }

  return (
    <div className="teacherCard">
      <h3>
        {data.voornaam} {data.achternaam}
      </h3>
      <p>Leeftijd: {data.leeftijd}</p>
      <button onClick={remove}>Verwijder</button>
    </div>
  );
}
