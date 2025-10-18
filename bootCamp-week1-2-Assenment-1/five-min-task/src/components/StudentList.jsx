import React from "react";

const StudentList = React.memo(({ className, students, togglePresent }) => {
  if (students.length === 0) {
    return <p>No Students Found</p>;
  }

  return (
    <div>
      <h2>{className} Attendance</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} style={{ marginBottom: "10px" }}>
            {student.name} -{" "}
            {student.present ? (
              <span style={{ color: "green" }}>🟢 Present</span>
            ) : (
              <span style={{ color: "red" }}>🔴 Absent</span>
            )}
            <button
              onClick={() => togglePresent(student.id)}
              style={{ marginLeft: "10px" }}
            >
              Mark Present
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default StudentList;
