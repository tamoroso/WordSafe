export const filterObject = (data, categories) => {
  let filtered = Object.entries(data).filter(
    ([key, value]) => categories == value.cat
  );
  return Object.fromEntries(filtered);
};

export const getUniqueCat = (passwords) => {
  let categories = [];
  Object.keys(passwords).map((key, i) => {
    categories.push(passwords[key].cat);
  });
  return [...new Set(categories)];
};
