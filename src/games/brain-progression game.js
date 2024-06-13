import startGameProcess from '../index.js';
import getRandomValue from '../getRandom.js';

const amountOfElementsProgression = 10;

const createProgression = (initialValue, denominator) => {
  const arr = [];

  for (let i = 0; i < amountOfElementsProgression; i += 1) {
    arr.push(initialValue + denominator * i);
  }
  return arr;
};

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const initialValue = getRandomValue();
  const denominator = getRandomValue();
  const progression = createProgression(initialValue, denominator);

  const hiddenIndex = Math.floor(Math.random() * amountOfElementsProgression);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

const playBrainProgression = () => {
  startGameProcess(getQuestionAndAnswer, description);
};

export default playBrainProgression;
