import { useState, useEffect } from "react";
import NewTeacherForm from "./components/NewTeacherForm";
import TeacherList from "./components/TeacherList";

function App() {
  const [showNewTeacherForm, setShowNewTeacherForm] = useState(false);
  const [teachers, setTeachers] = useState([]);

  async function getTeachers() {
    const res = await fetch("http://localhost:8080/teachers/");
    const data = await res.json();
    setTeachers(data);
  }

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <main className="container">
      <h1>De docenten app</h1>

      {showNewTeacherForm ? (
        <NewTeacherForm
          update={getTeachers}
          close={() => setShowNewTeacherForm(false)}
        />
      ) : (
        <button onClick={() => setShowNewTeacherForm(true)}>
          Nieuwe docent
        </button>
      )}

      <TeacherList teachers={teachers} update={getTeachers} />
    </main>
  );
}

export default App;
