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
        A web application that list of upcoming birthdays in the next 7 days
        automatically calculated from member ID number. You also should not need
        to take any manual steps to see the team members' birthday show up next
        year as well.
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
