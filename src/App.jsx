// src/App.jsx
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddMemberForm from "./components/AddMemberForm";
import UpcomingBirthdays from "./components/UpcomingBirthdays";
import { calculateBirthdate } from "./utils/birthdayUtils";

const App = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const handleAddMember = (newMember) => {
    const birthdate = calculateBirthdate(newMember.idNumber);
    console.log("calculatedBirthdate =>", birthdate);

    setTeamMembers((prevMembers) => {
      const updatedMembers = [
        ...prevMembers,
        { ...newMember, birthdate, id: uuidv4() },
      ];
      console.log("updatedMembers =>", updatedMembers);
      return updatedMembers;
    });
  };
  console.log("teamMembers after adding =>", teamMembers);
  const getUpcomingBirthdays = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight

    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    teamMembers.filter((member) => {
      const memberBirthdate = new Date(member.birthdate);
      memberBirthdate.setHours(0, 0, 0, 0); // Set time to midnight

      console.log("today during filter =>", today);
      console.log("memberBirthdate during filter =>", memberBirthdate);
      return memberBirthdate >= today && memberBirthdate <= nextWeek;
    });

    console.log("upcoming =>", teamMembers);
    return teamMembers;
  };
  return (
    <div>
      <h1>Birthday Manager App</h1>
      <AddMemberForm onAddMember={handleAddMember} />
      <UpcomingBirthdays upcomingBirthdays={getUpcomingBirthdays()} />
    </div>
  );
};

export default App;
