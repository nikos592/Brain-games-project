import startGameProcess from '../index.js';
import getRandomValue from '../get random.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const question = getRandomValue();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playBrainPrime = () => {
  startGameProcess(getQuestionAndAnswer, description);
};

export default playBrainPrime;
