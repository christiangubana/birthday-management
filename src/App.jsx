import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddMemberForm from "./components/AddMemberForm";
import UpcomingBirthdays from "./components/UpcomingBirthdays";
import { calculateBirthdate } from "./utils/birthdayUtils";

const App = () => {
  // Load teamMembers from localStorage on initial render
  const [teamMembers, setTeamMembers] = useState(() => {
    const storedTeamMembers =
      JSON.parse(localStorage.getItem("teamMembers")) || [];

    // Parse the birthdate strings back into Date objects
    const parsedTeamMembers = storedTeamMembers.map((member) => ({
      ...member,
      birthdate: new Date(member.birthdate),
    }));

    return parsedTeamMembers;
  });

  // Update localStorage whenever teamMembers changes
  useEffect(() => {
    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  }, [teamMembers]);

  const handleAddMember = (newMember) => {
    const birthdate = calculateBirthdate(newMember.idNumber);
    setTeamMembers((prevMembers) => [
      ...prevMembers,
      { ...newMember, birthdate, id: uuidv4() },
    ]);
  };

  const handleDeleteMember = (uuid) => {
    setTeamMembers((prevMembers) =>
      prevMembers.filter((member) => member.id !== uuid)
    );
  };

  const getUpcomingBirthdays = () => {
    // Filter members for upcoming birthdays
    return teamMembers.filter((member) => {
      const memberBirthdate = new Date(member.birthdate);
      memberBirthdate.setHours(0, 0, 0, 0); // Set time to midnight
      return memberBirthdate;
    });
  };

  return (
    <div>
      <h1>Birthday Manager App</h1>
      <AddMemberForm onAddMember={handleAddMember} />
      <UpcomingBirthdays
        upcomingBirthdays={getUpcomingBirthdays()}
        onDeleteMember={handleDeleteMember}
      />
    </div>
  );
};

export default App;
