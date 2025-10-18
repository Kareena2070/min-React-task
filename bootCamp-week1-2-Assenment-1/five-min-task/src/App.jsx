import { useState } from "react";
import StudentList from "./components/StudentList";
import ProductDashboard from "./components/ProductDashboard";
import TodoList from "./components/TodoList";
import CourseList from "./components/CourseList";
import Cart from "./components/Cart";


function App() {

  // Student Attendance Tracker 
  const [students, setStudents] = useState([
    { id: 1, name: "Ali", present: false },
    { id: 2, name: "Riya", present: false },
    { id: 3, name: "Karan", present: false },
  ]);
  const togglePresent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((s) =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
  };

  //  Product Inventory Dashboard

   const [products, setProducts] = useState([
    { id: 1, name: "Pen", quantity: 0 },
    { id: 2, name: "Notebook", quantity: 5 },
    { id: 3, name: "Marker", quantity: 2 },
  ]);

  const updateQuantity = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === id
          ? { ...p, quantity: Math.max(0, p.quantity + change) }
          : p
      )
    );
  };

  // Todo Manager with Priority
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy Milk", highPriority: false },
  ]);
  const [input, setInput] = useState("");

  // Add new todo
  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      title: input,
      highPriority: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  // Toggle priority (demonstrates snapshot)
  const togglePriority = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === id ? { ...t, highPriority: !t.highPriority } : t
      )
    );
  };


    // Online Course Enrollment App

     const [courses, setCourses] = useState([
    { id: 1, name: "React", enrolled: 0 },
    { id: 2, name: "Node.js", enrolled: 3 },
    { id: 3, name: "Python", enrolled: 5 },
  ]);

  const updateEnrollment = (id, change) => {
    setCourses((prevCourses) =>
      prevCourses.map((c) =>
        c.id === id
          ? { ...c, enrolled: Math.max(0, c.enrolled + change) }
          : c
      )
    );
  };

  // E-Commerce Cart System
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "T-Shirt", qty: 1, inStock: true },
    { id: 2, name: "Jeans", qty: 2, inStock: true },
    { id: 3, name: "Shoes", qty: 0, inStock: true },
  ]);

  const updateQty = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(0, item.qty + change) }
          : item
      )
    );
  };

  return (

    <>
    {/*  Student Attendance Tracker  */}
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Attendance Tracker</h1>
      <StudentList
        className="React Class"
        students={students}
        togglePresent={togglePresent}
      />
    </div>

    {/* Product Inventory Dashboard */}

    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Product Inventory Dashboard</h1>
      <ProductDashboard
        storeName="My Store"
        products={products}
        updateQuantity={updateQuantity}
      />
    </div>

    {/* Todo Manager with Priority */}

    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Todo Manager</h1>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTodo} style={{ marginLeft: "5px" }}>
          Add
        </button>
      </div>

      <TodoList
        ownerName="Kareena"
        todos={todos}
        togglePriority={togglePriority}
      />
    </div>

    {/* Online Course Enrollment App */}

    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Course Enrollment App</h1>
      <CourseList
        courseName="Online Courses"
        courses={courses}
        updateEnrollment={updateEnrollment}
      />
    </div>

    {/* E-Commerce Cart System */}

    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>E-Commerce Cart System</h1>
      <Cart storeName="My Store" cartItems={cartItems} updateQty={updateQty} />
    </div>
    </>
  );
}

export default App;
