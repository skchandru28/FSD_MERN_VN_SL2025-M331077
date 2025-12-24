
import { useState } from "react";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
