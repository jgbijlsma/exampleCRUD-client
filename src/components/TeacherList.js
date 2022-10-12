import Teacher from "./Teacher";

export default function TeacherList({ teachers, update }) {
  function renderTeachers() {
    return teachers.map((teacher, i) => {
      return <Teacher data={teacher} update={update} key={i} />;
    });
  }

  return (
    <section>
      <h2>De docenten</h2>
      <div className="teacherList">{renderTeachers()}</div>
    </section>
  );
}
