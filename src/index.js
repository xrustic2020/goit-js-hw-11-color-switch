import './styles.css';
import refs from './scripts/refs';
import { handleStart, handleStop } from './scripts/controlButton'

refs.startButton.addEventListener('click', handleStart);
refs.stopButton.addEventListener('click', handleStop);
