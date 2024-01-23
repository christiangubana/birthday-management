import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddMemberForm from "./components/AddMemberForm";
import UpcomingBirthdays from "./components/UpcomingBirthdays";
import { calculateBirthdate } from "./utils/birthdayUtils";

const App = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const handleAddMember = (newMember) => {
    const birthdate = calculateBirthdate(newMember.idNumber);
    setTeamMembers((prevMembers) => {
      const updatedMembers = [
        ...prevMembers,
        { ...newMember, birthdate, id: uuidv4() },
      ];
      return updatedMembers;
    });
  };

  const getUpcomingBirthdays = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Filter members for upcoming birthdays within the next 7 days
    teamMembers.filter((member) => {
      const memberBirthdate = new Date(member.birthdate);
      memberBirthdate.setHours(0, 0, 0, 0); // Set time to midnight
      return memberBirthdate > today && memberBirthdate <= nextWeek;
    });
    // Filter members for all upcoming birthdays
    teamMembers.filter((member) => {
      const memberBirthdate = new Date(member.birthdate);
      memberBirthdate.setHours(0, 0, 0, 0); // Set time to midnight
      return memberBirthdate > today;
    });

    // const upcomingWithin7Days = [...teamMembers];
    // const upcomingAll = [...teamMembers];
    // console.log(upcomingWithin7Days);
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
