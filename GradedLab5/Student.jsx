import React, { useState, useEffect } from "react";

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/student.json");
      const data = await response.json();
      console.log(data);
      setStudents(data);
    }
    console.log("fetch");
    fetchData();
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      {students.map((student) => (
        <div key={Math.random()}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Major: {student.major}</p>
        </div>
      ))}
    </div>
  );
}

export default Student;
