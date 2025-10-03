import React from "react";
import { Link, Outlet } from "react-router-dom";

const teamMembers = [
  { id: "1", name: "Hristijan" },
  { id: "2", name: "Stefan" },
  { id: "3", name: "Angela" },
  { id: "4", name: "Andrea" },
];

export const AboutUs = () => {
  return (
    <div className="AboutUs">
      <h2>About Us Page</h2>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <Link to={`/aboutUs/members/${member.id}`}>{member.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
};
