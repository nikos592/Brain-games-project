import gameProcess from '../index.js';

const isTheNumberEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isTheNumberEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameBrainEven = () => {
  gameProcess(getQuestionAndAnswer, description);
};

export default gameBrainEven;
