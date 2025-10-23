import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

export default function Details() {
  const { student } = useContext(StudentContext);
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>ID: {student.id}</p>
    </div>
  );
}
