import React, { useState } from "react";

const Description = () => {
  const [isContentVisible, setContentVisibility] = useState(true);

  const handleRemove = () => {
    setContentVisibility(false);
  };

  return (
    <div
      className={`mb-8 text-gray-700 rounded shadow-md bg-white ${
        isContentVisible ? "" : "hidden"
      }`}
    >
      <h1 className="text-left font-bold">Description</h1>
      <p className="text-xs font-normal">
        A simple application that allows capturing the first name and ID number
        of team members, and then be able to see a list of birthdays in the next
        7 days. You don't have to add an actual birthdate as this can be
        calculated from the ID number. You also should not need to take any
        manual steps to see the team members' birthday show up next year as
        well.
      </p>
      {isContentVisible && (
        <div className="p-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleRemove}
          >
            Click to Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default Description;
