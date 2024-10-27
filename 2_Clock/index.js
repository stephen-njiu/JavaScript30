const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const clock = document.querySelector('.clock');

function labelClock() {
    const numItems = 12;
    const radius = clock.clientWidth / 2; // Radius of the circle
    const itemRadius = 15; // Half the width/height of the number items

    for (let i = 1; i <= numItems; i++) {
        const angle = (i / numItems) * 2 * Math.PI; // Angle in radians

        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.textContent = i;

        // Calculate position
        const x = radius + (radius - itemRadius - 20) * Math.cos(angle - Math.PI / 2);
        const y = radius + (radius - itemRadius - 20) * Math.sin(angle - Math.PI / 2);

        numberDiv.style.left = `${x}px`;
        numberDiv.style.top = `${y}px`;

        clock.appendChild(numberDiv);
    }
}

function setDate() {
    const now = new Date(); // Fetch the current time each time the function is called

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    // const hoursDegrees = ((hours % 12 / 12) * 360) + 90;
    const hoursDegrees = ((hours % 12) / 12 * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

labelClock();
setInterval(setDate, 1000);







