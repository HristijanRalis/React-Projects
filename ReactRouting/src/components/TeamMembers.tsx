import React from "react";
import { useParams } from "react-router-dom";

const teamMembersDetails = {
  "1": { name: "Hristijan", bio: "Hristijans Biography" },
  "2": { name: "Stefan", bio: "Stefan Biography" },
  "3": { name: "Angela", bio: "Angela Biography" },
  "4": { name: "Andrea", bio: "Andreja Biography" },
};

export const TeamMembers = () => {
  const { memberId } = useParams(); // <- destructure to get the string
  const member = memberId ? teamMembersDetails[memberId] : null;

  if (!member) {
    return <p>Member not found!</p>;
  }

  return (
    <div className="TeamMembers">
      <h3>{member.name}'s Details</h3>
      <p>{member.bio}</p>
    </div>
  );
};
