// export const requaired = (value) => {
//   if (value) return undefined;
//   return "Field is requaired";
// };

// export const maxLengthCreator = (maxLength) => (value) => {
//   if (value.maxLength > maxLength) return `Max lenght is ${maxLength} symbols`;
//   return undefined;
// };

export const required = (value) => {
  if (value) return undefined;

  return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
};
