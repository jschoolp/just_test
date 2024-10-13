let isRunning = false;

function hidePreloader() {
    document.body.classList.add('loaded');
}

window.onload = function() {
    setTimeout(function() {
        hidePreloader();
    }, 640);
}

function getLink(link) {
    const linkText = document.getElementById("iframe_link");
    const iFrame = document.getElementById("iframe_display");

    linkText.innerHTML = link;
    iFrame.src = link;
}

function copyIframeTag() {
    const iframe = document.getElementById("iframe_display");
    const iframeHTML = iframe.outerHTML;
    const linkText = document.getElementById("iframe_link");

    navigator.clipboard.writeText(iframeHTML).then(() => {
        linkText.innerHTML = "Скопійовано! Вставляй у CMS."
    }).catch(err => {
        linkText.innerHTML = "Помилка копіювання: " + err;
    });
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

function run_task3() {
    if (isRunning) return;
    isRunning = true;

    const consoleText = document.getElementById('console-text');
    const inputP = document.getElementById('input-p').value.trim();
    const inputSP = document.getElementById('input-sp').value.trim();
    const inputImg = document.getElementById('input-img').value.trim();
    const commands = [
        'user@local:~$ cd JavaScript',
        'user@local:~/JavaScript$ open script.js',
        'user@local: Виконую скрипт!'
    ];

    if (inputP.toLowerCase() === 'p' && inputSP.toLowerCase() === '/p' && inputImg.toLowerCase() === 'img') {
        commands.push(`
            </br><div style="display: flex; align-items: center; background-color: #ffffff; padding: 8px; width: 42%; border-radius: 8px; margin-left:16px"><img src = "https://yt3.googleusercontent.com/5sw8_MgIMqC0gIDNuxKTzgA-D8MYpcEayHaBlSjT2kWou_2zgFNAry9g6EKXDSHGoPC85crucQ=s900-c-k-c0x00ffffff-no-rj" style="width: 36px;"><span style="margin-left:16px; color: #000000; font-weight: bold; padding: 6px">JustSmart</span></div>`);
    } else {
        commands.push(`<span class="error-text">ERROR: щось пішло не так!</span>`);
        
    }

    document.getElementById('console-container').style.display = 'block';
    executeCommands(consoleText, commands, 1500);
}

function run_py_task1() {
    if (isRunning) return;
    isRunning = true;

    const consoleText = document.getElementById('console-text');
    const inputValue = document.getElementById('input-text').value;
    const commands = [
        'user@local:~$ cd Python',
        'user@local:~/Python$ open script.py',
        'user@local: Виконую скрипт!'
    ];

    if (inputValue) {
        commands.push(`<span class="highlight-input">${inputValue}</span>`);
    } else {
        commands.push(`<span class="error-text">ERROR: поле пусте :(</span>`);
    }

    executeCommands(consoleText, commands, 640);
}