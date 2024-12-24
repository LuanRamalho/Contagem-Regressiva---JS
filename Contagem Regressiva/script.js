const timeDisplay = document.getElementById('time');
const circle = document.querySelector('.circle div');

let totalTime = 10 * 60 * 1000; // 10 minutos em milissegundos
let timeLeft = totalTime;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    const milliseconds = timeLeft % 1000;

    // Atualizar o texto do cronômetro
    timeDisplay.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.<span class="milliseconds">${String(milliseconds).padStart(3, '0')}</span>`;

    // Atualizar a barra circular
    const percent = (totalTime - timeLeft) / totalTime;
    circle.style.setProperty('--percent', percent);

    if (timeLeft > 0) {
        timeLeft -= 10; // Reduz 10ms por vez
        setTimeout(updateTimer, 10); // Rechama a função após 10ms
    }
}

// Iniciar o cronômetro
updateTimer();
