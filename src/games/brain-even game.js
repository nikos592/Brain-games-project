import startGameProcess from '../index.js';
import getRandomValue from '../get random.js';

const isTheNumberEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const question = getRandomValue();
  const correctAnswer = isTheNumberEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playBrainEven = () => {
  startGameProcess(getQuestionAndAnswer, description);
};

export default playBrainEven;
