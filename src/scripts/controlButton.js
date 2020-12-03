import randomIntegerFromInterval from './randomIndex';
import colors from '../data/colors';
import refs from './refs';

let intervalId = null;
let isStarting = false;

const handleStart = function () {
  if (!isStarting) {
    isStarting = true;
    intervalId = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  }
};

const handleStop = function () {
  isStarting = false;
  clearInterval(intervalId);
};

export { handleStart, handleStop };