import startGameProcess from '../index.js';
import getRandomValue from '../get random.js';

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
  const a = getRandomValue();
  const b = getRandomValue();
  const question = `${a} ${b}`;
  const correctAnswer = String(getGreatestCommonDivisor(a, b));
  return [question, correctAnswer];
};

const playBrainGcd = () => {
  startGameProcess(getQuestionAndAnswer, description);
};

export default playBrainGcd;
