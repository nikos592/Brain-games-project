import { gameProcess } from '/home/nikos/frontend-project-44/src/index.js';

const getArithmeticProgression = (initialValue, denominator, amountOfElements) => {
    let arr = [];
    let randomIndex = Math.floor(Math.random() * amountOfElements);

    for (let i = 0; i < amountOfElements; i++) {
        if (i === randomIndex) {
            arr.push('..');
        } else {
            arr.push(initialValue + i * denominator);
        }
    }

    return arr;
};

const returnMissingValue = (arr, initialValue, commonDifference) => {
    let missingIndex = arr.findIndex(el => el === '..');
    let missingValue = initialValue + missingIndex * commonDifference;

    return missingValue;
};

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
    const initialValue = Math.floor(Math.random() * 100);
    const denominator = Math.floor(Math.random() * 10);
    const amountOfElements = 10;
    const question = getArithmeticProgression(initialValue, denominator, amountOfElements);
    const correctAnswer = returnMissingValue(question, initialValue, denominator);
    return [question, correctAnswer];
};

export const gameBrainProgression = () => {
    gameProcess(getQuestionAndAnswer, description);
};