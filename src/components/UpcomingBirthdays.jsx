// src/components/UpcomingBirthdays.jsx
import React from "react";

const calculateAge = (birthdate) => {
  const today = new Date();
  const birthdateObj = new Date(birthdate);
  let age = today.getFullYear() - birthdateObj.getFullYear();
  const monthDiff = today.getMonth() - birthdateObj.getMonth();
  birthdateObj.setYear(new Date().getFullYear());
  const now =
    birthdateObj - now <= 1000 * 60 * 60 * 24 * 7 && birthdateObj - now >= 0;
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdateObj.getDate())
  ) {
    age--;
  }
  return age;
};
const UpcomingBirthdays = ({ upcomingBirthdays }) => {
  return (
    <div className="mt-8">
      {/* Render your all upcoming birthdays here */}
      {upcomingBirthdays.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl italic font-bold mb-4">
            {upcomingBirthdays.length} Added Team Members
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
      )}
      {/* Render your upcoming birthdays within 7 days here */}
      {upcomingBirthdays.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl italic font-bold mb-4">
            {upcomingBirthdays.length} Upcoming Birthdays in the Next 7 Days
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
      )}
      {upcomingBirthdays.length === 0 && upcomingBirthdays.length === 0 && (
        <p>No upcoming birthdays.</p>
      )}
    </div>
  );
};

export default UpcomingBirthdays;
