import React from "react";

const CourseList = React.memo(({ courseName, courses, updateEnrollment }) => {
  if (courses.length === 0) {
    return <p>No Courses Available</p>;
  }

  return (
    <div>
      <h2>Welcome to {courseName}</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} style={{ marginBottom: "10px" }}>
            {course.name} -{" "}
            {course.enrolled > 0
              ? `${course.enrolled} Students Enrolled`
              : "No Students Yet"}
            <button
              onClick={() => updateEnrollment(course.id, 1)}
              style={{ marginLeft: "10px" }}
            >
              ➕
            </button>
            <button
              onClick={() => updateEnrollment(course.id, -1)}
              style={{ marginLeft: "5px" }}
            >
              ➖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CourseList;
