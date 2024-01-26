import React, { useState } from "react";

const AddMemberForm = ({ onAddMember }) => {
  const [firstName, setFirstName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [idError, setIdError] = useState("");
  const [nameError, setNameError] = useState("");

  const validateIDNumber = (id) => {
    // Validate South African ID Number using a regular expression
    const idRegex =
      /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
    return idRegex.test(id);
  };

  const validateFirstName = (name) => {
    // Validate if the name contains at least one alphabetical character
    const nameRegex = /[a-zA-Z]/;
    return nameRegex.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input before calling onAddMember
    if (
      firstName.length <= 12 &&
      validateIDNumber(idNumber) &&
      validateFirstName(firstName)
    ) {
      onAddMember({ firstName, idNumber });
      setFirstName("");
      setIdNumber("");
      setIdError("");
      setNameError("");
    } else {
      if (firstName.length > 12) {
        setNameError("First Name cannot be longer than 12 characters");
      } else if (!validateFirstName(firstName)) {
        setNameError("First Name must contain alphabetical letters");
      } else {
        setNameError("");
      }

      if (!validateIDNumber(idNumber)) {
        setIdError("Invalid ID Number");
      } else {
        setIdError("");
      }
    }
  };
  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
      >
        <div className="mb-6">
          <label className="block text-xm font-semibold text-gray-600 mb-1">
            First Name:
          </label>
          <input
            className={`w-full px-4 py-2 border bg-gray-700 rounded-md focus:outline-none focus:border-none placeholder:text-gray-500 placeholder:text-xs placeholder:italic ${
              nameError && "border-red-500"
            }`}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="please type your first name"
          />
          {nameError && <p className="text-red-500 mt-2">{nameError}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            ID Number:
          </label>

          <input
            className={`w-full px-4 py-2 border bg-gray-700 rounded-md focus:outline-none focus:border-none placeholder:text-gray-500 placeholder:text-xs placeholder:italic ${
              idError && "border-red-500"
            }`}
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            placeholder="please type your id number"
          />
          {idError && <p className="text-red-500 mt-2">{idError}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddMemberForm;
