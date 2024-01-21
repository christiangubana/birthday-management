// src/utils/birthdayUtils.js
const calculateBirthdate = (idNumber) => {
  // Extracting birthdate from South African ID number (YYMMDD format)
  const year = parseInt(idNumber.substring(0, 2));
  const month = parseInt(idNumber.substring(2, 4));
  const day = parseInt(idNumber.substring(4, 6));

  // Adjusting the year based on the current date
  const currentYear = new Date().getFullYear();
  const fullYear = year + (year < currentYear % 100 ? 2000 : 1900);

  const calculatedBirthdate = new Date(fullYear, month - 1, day);
  console.log("Calculated Birthdate:", calculatedBirthdate); // Add this line

  return calculatedBirthdate;
};

export { calculateBirthdate };
