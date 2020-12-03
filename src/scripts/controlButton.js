import randomIntegerFromInterval from './randomIndex';
import colors from '../data/colors';
import refs from './refs';

let intervalId = null;

const handleStart = function () {
  refs.startButton.disabled = true;
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
};

const handleStop = function () {
  refs.startButton.disabled = false;
  clearInterval(intervalId);
};

export { handleStart, handleStop };