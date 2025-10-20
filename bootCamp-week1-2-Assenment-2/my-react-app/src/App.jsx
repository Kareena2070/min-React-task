import { useState } from "react";
import Library from "./components/Library";
import GymMemberList from "./components/GymMemberList";
import TableReservation from "./components/TableReservation";
import MovieBooking from "./components/MovieBooking";
import EventRegistration from "./components/EventRegistration"; 

function App() {

  // Library Book Tracker
  const [books, setBooks] = useState([
    { id: 1, title: "Harry Potter", available: true, count: 5 },
    { id: 2, title: "Lord of the Rings", available: true, count: 3 },
    { id: 3, title: "Atomic Habits", available: true, count: 0 },
  ]);

  const updateCount = (id, change) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === id) {
          const newCount = Math.max(0, book.count + change);
          return { ...book, count: newCount, available: newCount > 0 };
        }
        return book;
      })
    );
  };

  // Gym Member Tracker

  const [members, setMembers] = useState([
    { id: 1, name: "Sara", checkedIn: false },
    { id: 2, name: "Ali", checkedIn: true },
    { id: 3, name: "Riya", checkedIn: false },
  ]);

  const toggleCheckIn = (id) => {
    setMembers((prevMembers) =>
      prevMembers.map((m) =>
        m.id === id ? { ...m, checkedIn: !m.checkedIn } : m
      )
    );
  };

  // Restaurant Table Reservation
  const [tables, setTables] = useState([
    { id: 1, tableNumber: 5, reserved: false },
    { id: 2, tableNumber: 6, reserved: true },
    { id: 3, tableNumber: 7, reserved: false },
  ]);

  const toggleReserve = (id) => {
    setTables((prevTables) =>
      prevTables.map((t) =>
        t.id === id ? { ...t, reserved: !t.reserved } : t
      )
    );
  };

  // Movie Ticket Booking App
  const [seats, setSeats] = useState([
    { id: 1, seatNumber: "A1", booked: false },
    { id: 2, seatNumber: "A2", booked: false },
    { id: 3, seatNumber: "A3", booked: true },
    { id: 4, seatNumber: "A4", booked: false },
  ]);

  const toggleBooking = (id) => {
    // Demonstrates snapshot behavior when button clicked twice quickly
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === id ? { ...seat, booked: !seat.booked } : seat
      )
    );
  };

  // Event Registration Tracker

  const [participants, setParticipants] = useState([
    { id: 1, name: "John", registered: false },
    { id: 2, name: "Emma", registered: false },
    { id: 3, name: "Raj", registered: true },
  ]);

  const toggleRegister = (id) => {
    // Demonstrate queuing behavior
    setParticipants((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, registered: !p.registered } : p
      )
    );
  };

  return (
    <>
    {/* Library Book Tracker */}
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Library Book Tracker</h1>
      <Library libraryName="City Library" books={books} updateCount={updateCount} />
    </div>


    {/* Gym Member Tracker */}

      <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Gym Member Tracker</h1>
      <GymMemberList
        gymName="FitLife"
        members={members}
        toggleCheckIn={toggleCheckIn}
      />
    </div>

      {/* Restaurant Table Reservation */}
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Restaurant Table Reservation</h1>
      <TableReservation
        restaurantName="Gourmet Bistro"
        tables={tables}
        toggleReserve={toggleReserve}
      />
      </div>

      {/* Movie Ticket Booking App */}

       <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Movie Ticket Booking</h1>
      <MovieBooking
        movieName="Inception"
        seats={seats}
        toggleBooking={toggleBooking}
      />
      </div>

      {/* Event Registration Tracker */}
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Event Registration Tracker</h1>
      <EventRegistration
        eventName="Tech Summit 2025"
        participants={participants}
        toggleRegister={toggleRegister}
      />
      </div>

    </>
  );
}

export default App;
