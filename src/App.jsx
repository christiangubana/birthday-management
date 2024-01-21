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
    setTeamMembers((prevMembers) => {
      const birthdate = calculateBirthdate(newMember.idNumber);
      const updatedMembers = [
        ...prevMembers,
        { ...newMember, birthdate, id: uuidv4() },
      ];
      console.log(updatedMembers); // Add this line
      return updatedMembers;
    });
  };

  const getUpcomingBirthdays = () => {
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const upcoming = teamMembers.filter(
      (member) => member.birthdate >= today && member.birthdate <= nextWeek
    );
    console.log(upcoming); // Add this line
    return upcoming;
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
