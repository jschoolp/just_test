const rectangles = document.querySelectorAll('.rectangle');
const startBtn = document.getElementById('startBtn');
const message = document.getElementById('message');

let correctOrder = [];
let userOrder = [];
let isGameActive = false;

// Generate a random color
function getRandomColor() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Shuffle the array of rectangle indexes
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Highlight rectangles one by one
function highlightSequence() {
    let delay = 500; // initial delay

    correctOrder.forEach((index, i) => {
        setTimeout(() => {
            rectangles[index].style.backgroundColor = getRandomColor();
        }, delay * (i + 1));

        setTimeout(() => {
            rectangles[index].style.backgroundColor = 'grey';
        }, delay * (i + 1) + 500);
    });

    // After sequence is done, allow user to click
    setTimeout(() => {
        enableUserClicks();
    }, delay * correctOrder.length + 1000);
}

// Start the game and generate a random sequence
function startGame() {
    correctOrder = shuffleArray([0, 1, 2, 3]); // Shuffle the indexes
    userOrder = [];
    isGameActive = true;
    message.textContent = '';

    // Reset rectangle colors and remove event listeners
    rectangles.forEach(rect => {
        rect.style.backgroundColor = 'grey';
        rect.removeEventListener('click', handleUserClick);
    });

    // Highlight the rectangles in order
    highlightSequence();
}

// Enable user to click on rectangles in correct order
function enableUserClicks() {
    rectangles.forEach((rect, index) => {
        rect.addEventListener('click', () => handleUserClick(index));
    });
}

// Handle user's clicks and check the order
function handleUserClick(index) {
    if (!isGameActive) return;

    userOrder.push(index);
    rectangles[index].style.backgroundColor = 'lightblue';

    setTimeout(() => {
        rectangles[index].style.backgroundColor = 'grey';
    }, 500);

    if (userOrder.length === correctOrder.length) {
        checkOrder();
    }
}

// Check if the user's input matches the correct order
function checkOrder() {
    isGameActive = false;

    if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
        message.textContent = 'Комп\'ютер увімкнувся!';
    } else {
        message.textContent = 'Неправильно :( Спробуйте знову.';
    }

    startBtn.textContent = 'Почати заново';
}

// Add event listener to start button
startBtn.addEventListener('click', startGame);
