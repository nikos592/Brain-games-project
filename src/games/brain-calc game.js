import { gameProcess } from '../index.js';
import { evaluate } from 'mathjs';

const getRandomExpression = () => {
	const operand = ['+', '-', '*'];
	const operator1 = Math.floor(Math.random() * 100);
	const operator2 = Math.floor(Math.random() * 100);
	const randomOperand = operand[Math.floor(Math.random() * operand.length)];
    const result = `${operator1} ${randomOperand} ${operator2}`;
    return result;
};

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
	const question = getRandomExpression();
	const correctAnswer = evaluate(question);
	return [question, correctAnswer];
};

export const gameBrainCalc = () => {gameProcess(getQuestionAndAnswer,description)};