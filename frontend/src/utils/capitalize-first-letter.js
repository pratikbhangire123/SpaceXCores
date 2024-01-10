const getCapitalizedFirstLetter = (string) => {
  return string != null ? string.charAt(0).toUpperCase() + string.slice(1) : '';
};

export default getCapitalizedFirstLetter;
