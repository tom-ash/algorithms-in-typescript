export const ordinalSuffix = (number) => {
  const remainderTen = number % 10;
  const remainderHundred = number % 100;

  if (remainderHundred >= 11 && remainderHundred <= 13) {
    return `${number}th`; // Handle special case for 11th, 12th, 13th
  }

  switch (remainderTen) {
    case 1:
      return `${number}st`;
    case 2:
      return `${number}nd`;
    case 3:
      return `${number}rd`;
    default:
      return `${number}th`;
  }
};
