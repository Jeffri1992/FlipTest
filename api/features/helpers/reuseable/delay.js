const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), time);
  });
};
export default delay;
