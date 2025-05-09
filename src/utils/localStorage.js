export const getStored = (key) => {
  let res = localStorage.getItem(key);

  if (res) return JSON.parse(res);
};

export const setStored = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  // if (res) return JSON.parse(res);
};
