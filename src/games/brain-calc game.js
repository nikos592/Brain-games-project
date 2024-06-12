import startGameProcess from '../index.js';
import getRandomValue from '../get random.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`There is no such operator like '${operator}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomValue();
  const number2 = getRandomValue();
  const operator = getRandomValue(operators);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};

const playBrainCalc = () => {
  startGameProcess(getQuestionAndAnswer, description);
};

export default playBrainCalc;
