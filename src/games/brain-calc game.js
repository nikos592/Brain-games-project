import startGameProcess from '../index.js';
import getRandomValue from '../getRandom.js';

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
  const operatorIndex = getRandomValue(0, operators.length - 1);
  const selectSign = operators[operatorIndex];
  const question = `${number1} ${selectSign} ${number2}`;
  const correctAnswer = calculate(number1, number2, selectSign).toString();
  return [question, correctAnswer];
};

const playBrainCalc = () => {
  startGameProcess(getQuestionAndAnswer, description);
};

export default playBrainCalc;
