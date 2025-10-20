import React from "react";

const MovieBooking = React.memo(({ movieName, seats, toggleBooking }) => {
  // If all seats are booked
  const allBooked = seats.length > 0 && seats.every((seat) => seat.booked);

  if (seats.length === 0) return <p>No seats available</p>;
  if (allBooked) return <p>All Seats Booked</p>;

  return (
    <div>
      <h2>Book your seats for {movieName}</h2>
      <ul>
        {seats.map((seat) => (
          <li key={seat.id} style={{ marginBottom: "10px" }}>
            Seat {seat.seatNumber} -{" "}
            {seat.booked ? (
              <span style={{ color: "red" }}>🔴 Booked</span>
            ) : (
              <span style={{ color: "green" }}>🟢 Available</span>
            )}
            <button
              onClick={() => toggleBooking(seat.id)}
              style={{ marginLeft: "10px" }}
            >
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default MovieBooking;
