const getuniqueValuesByKey = (data, key) => {
  return [...new Set(data.map((item) => item[key]))];
};

export default getuniqueValuesByKey;
