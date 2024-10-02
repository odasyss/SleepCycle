document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sleep-form');
    const resultContainer = document.getElementById('result-container');
    const sleepNowButton = document.getElementById('sleep-now-button');
    const wakeUpOption = document.getElementById('wake-up-option');
    const goToBedOption = document.getElementById('go-to-bed-option');
    const wakeUpTimeInput = document.getElementById('wake-up-time');
    const goToBedTimeInput = document.getElementById('go-to-bed-time');
    const digitalClock = document.getElementById('digital-clock');
    const infoSection = document.getElementById('info-section');

    function updateDigitalClock() {
        const now = new Date();
        digitalClock.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
    }

    setInterval(updateDigitalClock, 1000);
    updateDigitalClock();

    const wakeUpContainer = document.getElementById('wake-up-container');
    const goToBedContainer = document.getElementById('go-to-bed-container');

    wakeUpOption.addEventListener('change', () => {
        wakeUpContainer.classList.add('active');
        goToBedContainer.classList.remove('active');
        goToBedTimeInput.disabled = true;
        wakeUpTimeInput.disabled = false;
    });

    goToBedOption.addEventListener('change', () => {
        goToBedContainer.classList.add('active');
        wakeUpContainer.classList.remove('active');
        wakeUpTimeInput.disabled = true;
        goToBedTimeInput.disabled = false;
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedOption = document.querySelector('input[name="calculation-option"]:checked').value;
        const time = selectedOption === 'wake-up' ? wakeUpTimeInput.value : goToBedTimeInput.value;
        const results = calculateSleepCycles(time, selectedOption);
        displayResults(results, selectedOption);
        scrollToResults();
        event.target.blur(); // Remove focus from the button after clicking
    });

    sleepNowButton.addEventListener('click', () => {
        const now = new Date();
        const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        const results = calculateSleepCycles(time, 'go-to-bed');
        displayResults(results, 'go-to-bed');
        scrollToResults();
    });

    function calculateSleepCycles(time, option) {
        const [hours, minutes] = time.split(':').map(Number);
        const date = new Date();
        date.setHours(hours, minutes, 0, 0);

        const cycleDuration = 90 * 60 * 1000; // 90 minutes in milliseconds
        const fallAsleepTime = 14 * 60 * 1000; // 14 minutes in milliseconds

        const cycles = [];
        for (let i = 1; i <= 6; i++) {
            if (option === 'wake-up') {
                const cycleTime = new Date(date.getTime() - (i * cycleDuration) - fallAsleepTime);
                cycles.push({time: cycleTime, cycles: i, hours: (i * 90) / 60});
            } else {
                const cycleTime = new Date(date.getTime() + (i * cycleDuration) + fallAsleepTime);
                cycles.push({time: cycleTime, cycles: i, hours: (i * 90) / 60});
            }
        }

        return cycles;
    }

    function displayResults(cycles, option) {
        const title = option === 'wake-up' ? 'Optimal Sleep Times:' : 'Optimal Wake-up Times:';
        const listItems = cycles.map((cycle, index) => 
            `<li class="optimal-time" style="background: linear-gradient(90deg, ${getGradientColor(index, cycles.length)});">
                <span class="time">${cycle.time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                <span class="cycles">${cycle.cycles} cycle${cycle.cycles > 1 ? 's' : ''}</span>
                <span class="hours" style="font-size: 0.8em;">${cycle.hours.toFixed(1)} hours</span>
            </li>`
        ).join('');
        resultContainer.innerHTML = `<h3>${title}</h3>
        <br>
        <ul class="grid items-center max-w-xl grid-cols-2 gap-1 mx-auto overflow-hidden justify-stretch gri sm:grid-cols-3 sm:flex-initial rounded-3xl">${listItems}</ul>`;
    }

    function scrollToResults() {
        resultContainer.scrollIntoView({behavior: 'smooth'});
    }


    infoSection.innerHTML = `
        <h2  style="text-decoration: underline;">How it works</h2>
        <p>The Sleep Cycle Calculator uses the science of sleep cycles to help you wake up feeling refreshed. 
        Each sleep cycle lasts about 90 minutes, and a typical night's sleep consists of 4 to 6 cycles. 
        This calculator helps you time your sleep so that you wake up at the end of a cycle, 
        when you're likely to feel most refreshed.</p>
        <br>
        <h1  style="text-decoration: underline;">To use the calculator:</h1>
        <ol>
            <li>1. Choose whether you want to calculate based on when you need to wake up or when you plan to go to bed.</li>
            <li>2. Enter the time.</li>
            <li>3. Click "Calculate" to see your optimal sleep or wake times.</li>
        </ol>
        <br>
        <h1>The "Sleep Now" button calculates optimal wake times if you were to go to sleep right away.</h1>
        <p>Most healthy people fall asleep within 15 minutes of going to bed.
        <br>
        <br>
        <p>Remember that these are just guidelines. Everyone's sleep needs are different, so it's important to listen to your body and adjust your sleep schedule accordingly.</p>
        <p>For more information on sleep cycles and how to get a better night's sleep, check out the <a href="https://www.sleepfoundation.org/how-sleep-works/sleep-cycles-stages" target="_blank">National Sleep Foundation</a>.</p>
    `;

    // Initialize the form with wake-up option selected and go-to-bed option disabled
    wakeUpOption.checked = true;
    goToBedTimeInput.disabled = true;
    wakeUpContainer.classList.add('active');
});
function getGradientColor(index, total) {
    const hue = (index / (total - 1)) * 120; // 0 for red, 60 for yellow, 120 for green
    return `hsl(${hue}, 70%, 30%), hsl(${hue + 30}, 70%, 30%)`;
}