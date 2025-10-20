import React from "react";

const GymMemberList = React.memo(({ gymName, members, toggleCheckIn }) => {
  if (members.length === 0) {
    return <p>No Members Registered</p>;
  }

  return (
    <div>
      <h2>Welcome to {gymName} Gym</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id} style={{ marginBottom: "10px" }}>
            {member.name} -{" "}
            {member.checkedIn ? (
              <span style={{ color: "green" }}>🟢 Checked In</span>
            ) : (
              <span style={{ color: "red" }}>🔴 Not Checked In</span>
            )}
            <button
              onClick={() => toggleCheckIn(member.id)}
              style={{ marginLeft: "10px" }}
            >
              Check In
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default GymMemberList;
