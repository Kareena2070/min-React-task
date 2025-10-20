import React from "react";

const EventRegistration = React.memo(({ eventName, participants, toggleRegister }) => {
  if (participants.length === 0) return <p>No Participants Yet</p>;

  return (
    <div>
      <h2>{eventName} Registrations</h2>
      <ul>
        {participants.map((p) => (
          <li key={p.id} style={{ marginBottom: "10px" }}>
            {p.name} -{" "}
            {p.registered ? (
              <span style={{ color: "green" }}>🟢 Registered</span>
            ) : (
              <span style={{ color: "red" }}>🔴 Not Registered</span>
            )}
            <button
              onClick={() => toggleRegister(p.id)}
              style={{ marginLeft: "10px" }}
            >
              Register
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default EventRegistration;
