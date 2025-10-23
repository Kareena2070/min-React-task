import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

export default function Home() {
  const { student } = useContext(StudentContext);
  return (
    <div>
      <h2>Welcome, {student.name}</h2>
      <p>Class: {student.class}</p>
    </div>
  );
}
