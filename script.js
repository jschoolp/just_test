let isRunning = false;

function hidePreloader() {
    document.body.classList.add('loaded');
}

function executeCommands(consoleText, commands, delay = 640) {
    let currentIndex = 0;

    function typeCommand() {
        if (currentIndex < commands.length) {
            consoleText.innerHTML += '<br>' + commands[currentIndex];
            currentIndex++;
            consoleText.parentElement.scrollTop = consoleText.parentElement.scrollHeight;
            setTimeout(typeCommand, delay);
        } else {
            isRunning = false; 
            hidePreloader();
        }
    }

    typeCommand();
}

function run_task1() {
    if (isRunning) return;
    isRunning = true;

    const consoleText = document.getElementById('console-text');
    const inputValue = document.getElementById('input-text').value;
    const commands = [
        'user@local:~$ cd JavaScript',
        'user@local:~/JavaScript$ open script.js',
        'user@local: Виконую скрипт!'
    ];

    if (inputValue) {
        commands.push(`<span class="highlight-input">${inputValue}</span>`);
    } else {
        commands.push(`<span class="error-text">ERROR: поле пусте :(</span>`);
    }

    executeCommands(consoleText, commands, 640);
}

function run_task2() {
    if (isRunning) return;
    isRunning = true;

    const consoleText = document.getElementById('console-text');
    const inputIf = document.getElementById('input-if').value.trim();
    const inputElse = document.getElementById('input-else').value.trim();
    const commands = [
        'user@local:~$ cd JavaScript',
        'user@local:~/JavaScript$ open script.js',
        'user@local: Виконую скрипт!'
    ];

    if (inputIf.toLowerCase() === 'if' && inputElse.toLowerCase() === 'else') {
        commands.push(`<span class="highlight-input">Так, я навчився це робити!</span>`);
    } else {
        commands.push(`<span class="error-text">ERROR: щось пішло не так!</span>`);
    }

    document.getElementById('console-container').style.display = 'block';
    executeCommands(consoleText, commands, 1500);
}

window.onload = function() {
    setTimeout(function() {
        hidePreloader();
    }, 640);
};
