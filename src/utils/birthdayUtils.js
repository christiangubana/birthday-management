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

  // Check if the calculatedBirthdate is a valid Date object
  if (isNaN(calculatedBirthdate.getTime())) {
    console.error(`Invalid birthdate for ID number: ${idNumber}`);
    return null; // Return null or some default value in case of an error
  }

  // Adjust the day without adding extra day
  calculatedBirthdate.setDate(day);
  console.log(`calculatedBirthdate: ${calculatedBirthdate}`);
  return calculatedBirthdate;
};

export { calculateBirthdate };

// // src/utils/birthdayUtils.js
// const calculateBirthdate = (idNumber) => {
//   // Extracting birthdate from South African ID number (YYMMDD format)
//   const year = parseInt(idNumber.substring(0, 2));
//   const month = parseInt(idNumber.substring(2, 4));
//   const day = parseInt(idNumber.substring(4, 6));

//   // Adjusting the year based on the current date
//   const currentYear = new Date().getFullYear();
//   const fullYear = year + (year < currentYear % 100 ? 2000 : 1900);

//   const calculatedBirthdate = new Date(fullYear, month - 1, day);

//   // Adjust the day to account for the day of the week
//   calculatedBirthdate.setDate(calculatedBirthdate.getDate() + 1);

//   console.log(`calculatedBirthdate => ${calculatedBirthdate}`);

//   return calculatedBirthdate;
// };

// export { calculateBirthdate };

// // src/utils/birthdayUtils.js
