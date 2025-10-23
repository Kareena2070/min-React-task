import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    name: "Kareena Yadav",
    class: "BCA",
    age: 20,
    id: "NG123",
    subject: "Web Development"
  });

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
}
