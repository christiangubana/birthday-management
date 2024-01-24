import React, { useState } from "react";

const AddMemberForm = ({ onAddMember }) => {
  const [firstName, setFirstName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [idError, setIdError] = useState("");

  const validateIDNumber = (id) => {
    // Validate South African ID Number using a regular expression
    const idRegex = /^[0-9]{13}$/;

    return idRegex.test(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input before calling onAddMember
    if (firstName.length <= 12 && validateIDNumber(idNumber)) {
      onAddMember({ firstName, idNumber });
      setFirstName("");
      setIdNumber("");
      setIdError("");
    } else {
      setIdError("Invalid SA ID Number");
    }
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
        {firstName.length > 12 && (
          <p className="text-red-500">
            First Name cannot be longer than 12 characters
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          ID Number:
        </label>
        <input
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
            idError && "border-red-500"
          }`}
          type="text"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
        {idError && <p className="text-red-500">{idError}</p>}
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
