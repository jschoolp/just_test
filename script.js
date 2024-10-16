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

function run_task4() {
    if (isRunning) return;
    isRunning = true;

    const consoleText = document.getElementById('console-text');

    const inputText = document.getElementById('input-text').value.trim();

    const inputSymbol1 = document.getElementById('input-symbol1').value.trim();
    const inputSymbol2 = document.getElementById('input-symbol2').value.trim();
    const inputSymbol3 = document.getElementById('input-symbol3').value.trim();
    
    const commands = [
        'user@local:~$ cd HTML',
        'user@local:~/HTML$ open index.html',
        'user@local: Виконую скрипт!'
    ];

    if(inputSymbol1.toLowerCase() === 'p' && inputSymbol2.toLowerCase() === '/p') {
        if(inputSymbol3.toLowerCase() === 'img') {
            commands.push(`
                </br><div style="display: flex; align-items: center; background-color: #ffffff; padding: 8px; width: 42%; border-radius: 8px; margin-left:16px"><img src = "https://yt3.googleusercontent.com/5sw8_MgIMqC0gIDNuxKTzgA-D8MYpcEayHaBlSjT2kWou_2zgFNAry9g6EKXDSHGoPC85crucQ=s900-c-k-c0x00ffffff-no-rj" style="width: 36px;"><span style="margin-left:16px; color: #000000; font-weight: bold; padding: 6px">${inputText}</span></div>`);            
        }
        else {
            commands.push(`<span class="error-text">ERROR: щось не так із зображенням!</span>`);
        }
    }
    else {
        commands.push(`<span class="error-text">ERROR: щось не так із текстом!</span>`);
    }


    executeCommands(consoleText, commands, 640);
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

function run_py_task2() {
    if (isRunning) return;
    isRunning = true;

    const consoleText = document.getElementById('console-text');

    const inputItem1 = document.getElementById('input-text1').value.trim();
    const inputItem2 = document.getElementById('input-text2').value.trim();
    const inputItem3 = document.getElementById('input-text3').value.trim();
    const inputItem4 = document.getElementById('input-text4').value.trim();

    const inputSymbol1 = document.getElementById('input-symbol1').value.trim();
    const inputSymbol2 = document.getElementById('input-symbol2').value.trim();
    const inputSymbol3 = document.getElementById('input-symbol3').value.trim();
    

    const commands = [
        'user@local:~$ cd Python',
        'user@local:~/Python$ open script.py',
        'user@local: Виконую скрипт!'
    ];

    if (inputSymbol1.toLowerCase() === ',' && inputSymbol2.toLowerCase() === ',' && inputSymbol3.toLowerCase() === ',') {
        commands.push(`<span class="highlight-input">Аналізую пропозиції...</span>`);
        commands.push(`<span class="highlight-input">${inputItem1}, ${inputItem2}, ${inputItem3} та ${inputItem4} точно всім сподобаються!</span>`);
    } else {
        commands.push(`<span class="error-text">ERROR: десь пропущена кома :(</span>`);
    }

    executeCommands(consoleText, commands, 640);
}

function run_lua_task1() {
    if (isRunning) return;
    isRunning = true;

    const consoleText = document.getElementById('console-text');
    const inputText = document.getElementById('input-text').value;
    const inputComand = document.getElementById('input-command').value;

    const commands = [
        'user@local:~$ cd RobloxStudio',
        'user@local:~/RobloxStudio$ open script.lua',
        'user@local: Виконую скрипт!'
    ];

    if (inputComand.trim() === '+1' || inputComand.trim() === '+ 1') {
        if (inputText) {
            commands.push(`<span class="highlight-input">${inputText}</span>`);
            // Додати GIF до консолі після введення правильної команди
            const gifHTML = `<div><img src="https://i.pinimg.com/originals/4d/68/cd/4d68cd156b67ed38303691834e7a9628.gif" alt="Correct answer GIF" style="max-width: 100%; height: auto;"></div>`;
            commands.push(gifHTML);
        } else {
            commands.push(`<span class="error-text">ERROR: ми нічого не сказали гравцю :(</span>`);
        }
    } else {
        commands.push(`<span class="error-text">ERROR: ми нічого не грацю :(</span>`);
    }

    executeCommands(consoleText, commands, 640);
}
