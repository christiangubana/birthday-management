// src/components/AddMemberForm.jsx
import React, { useState } from "react";

const AddMemberForm = ({ onAddMember }) => {
  const [firstName, setFirstName] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make sure both firstName and idNumber are provided before calling onAddMember
    if (firstName && idNumber) {
      onAddMember({ firstName, idNumber });
      setFirstName("");
      setIdNumber("");
    }
    console.log("FirstName & ID =>", firstName, idNumber);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          First Name:
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          ID Number:
        </label>
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add Member
      </button>
    </form>
  );
};

export default AddMemberForm;
