// src/components/UpcomingBirthdays.jsx
import React from "react";

const calculateAge = (birthdate) => {
  const today = new Date();
  const birthdateObj = new Date(birthdate);
  let age = today.getFullYear() - birthdateObj.getFullYear();
  const monthDiff = today.getMonth() - birthdateObj.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdateObj.getDate())
  ) {
    age--;
  }

  return age;
};

const UpcomingBirthdays = ({ upcomingBirthdays }) => {
  console.log("upcomingBirthdays =>", upcomingBirthdays);
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        {upcomingBirthdays.length} Birthdays today
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingBirthdays.map((member) => (
          <div
            key={member.id}
            className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={`https://source.unsplash.com/150x150/?portrait,${member.firstName}`}
              alt={`${member.firstName}'s profile`}
              className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-center text-gray-500 font-bold text-xl mb-2">
              Name: {member.firstName}
            </p>
            <p className="text-center text-gray-500 text-sm mb-2">
              Turning {calculateAge(member.birthdate) + 1} years old
            </p>
            <p className="text-center text-gray-500 text-sm">
              Birthdate:{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }).format(
                new Date(
                  new Date().getFullYear(),
                  member.birthdate.getMonth(),
                  member.birthdate.getDate()
                )
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBirthdays;
