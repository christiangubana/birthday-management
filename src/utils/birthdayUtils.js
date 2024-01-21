// src/utils/birthdayUtils.js
// 9202204720082
const calculateBirthdate = (idNumber) => {
  // Implement the logic to extract birthdate from ID number
  // This will depend on the specific format of ID numbers in your region
  // For simplicity, let's assume the first 6 digits represent the birthdate in the format YYMMDD
  const year = idNumber.substring(0, 2);
  const month = idNumber.substring(2, 4);
  const day = idNumber.substring(4, 6);
  const fullYear =
    new Date().getFullYear() -
    (parseInt(year) > new Date().getFullYear() - 2000 ? 100 : 0);
  return new Date(`${fullYear}-${month}-${day}`);
};

export { calculateBirthdate };
