import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

export default function Subject() {
  const { student } = useContext(StudentContext);
  return (
    <div>
      <h2>Subject Information</h2>
      <p>Subject: {student.subject}</p>
    </div>
  );
}
