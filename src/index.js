import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//генерации случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//=============================================================================
const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
}

let intervalId = 'null';

refs.startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
    if (intervalId) {
        refs.startBtn.setAttribute('disabled', true);
    }
     refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 500)
})

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId)
    refs.startBtn.removeAttribute('disabled')
})
