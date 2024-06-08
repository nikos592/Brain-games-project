import { gameProcess } from '../index.js';

const getGreatestCommonDivisor = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const question = `${a} ${b}`;
  const correctAnswer = getGreatestCommonDivisor(a, b);
  return [question, correctAnswer];
};

const gameBrainGcd = () => {
  gameProcess(getQuestionAndAnswer, description);
};

export default gameBrainGcd;
