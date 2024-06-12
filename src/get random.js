const getRandomValue = (input) => {
  if (Array.isArray(input)) {
    const randomIndex = Math.floor(Math.random() * input.length);
    return input[randomIndex];
  }

  if (input === undefined) {
    return Math.floor(Math.random() * 100);
  }

  return null;
};

export default getRandomValue;
