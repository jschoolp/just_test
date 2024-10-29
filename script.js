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
    const inputText = document.getElementById('input-text').value;
    const inputCommand = document.getElementById('input-command').value;
    const laptopScreen = document.getElementById('laptop-screen');
    const screenText = document.getElementById('screen-text');

    if (inputCommand.trim() === "print") {
        if (inputText.trim() === "") {
            laptopScreen.classList.add("inactive");
            laptopScreen.classList.remove("active");
            screenText.textContent = "Помилка у тексті!";
        } else {
            laptopScreen.classList.add("active");
            laptopScreen.classList.remove("inactive");
            screenText.textContent = inputText; 
        }        
    }
    else {
        laptopScreen.classList.add("inactive");
        laptopScreen.classList.remove("active");
        screenText.textContent = "Помилка у команді!";
    }

}

function run_py_task2() {
    let conveyorInterval;
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';

    if (isRunning) return;

    const symbols = [
        document.getElementById('input-symbol1').value.trim(),
        document.getElementById('input-symbol2').value.trim(),
        document.getElementById('input-symbol3').value.trim()
    ];

    const allCommas = symbols.every(symbol => symbol === ",");

    if (!allCommas) {
        errorMessage.style.display = 'block'; 
        return;
    }

    errorMessage.style.display = 'none';
    isRunning = true;
    
    const laptopScreen = document.getElementById('laptop-screen');
    const pacman = document.getElementById('pacman');

    laptopScreen.classList.remove('inactive');
    laptopScreen.classList.add('active');
    pacman.style.display = 'block';

    document.querySelectorAll('.conveyor-item').forEach(item => item.remove());

    const selectedItems = [
        document.getElementById('input-text1').value,
        document.getElementById('input-text2').value,
        document.getElementById('input-text3').value,
        document.getElementById('input-text4').value
    ].filter(Boolean);

    conveyorInterval = setInterval(() => {
        const randomItem = selectedItems[Math.floor(Math.random() * selectedItems.length)];

        const img = document.createElement('div');
        img.classList.add('conveyor-item');
        img.style.backgroundImage = `url(../static/images/${randomItem}.png)`;
        
        laptopScreen.appendChild(img);

        moveConveyorItem(img);

    }, 1000);
}

function moveConveyorItem(item) {
    const pacman = document.getElementById('pacman');
    const speed = 2;

    function move() {
        const itemRect = item.getBoundingClientRect();
        const pacmanRect = pacman.getBoundingClientRect();

        if (
            itemRect.left <= pacmanRect.right &&
            itemRect.right >= pacmanRect.left &&
            itemRect.top < pacmanRect.bottom &&
            itemRect.bottom > pacmanRect.top
        ) {
            item.remove();
            return;
        }

        item.style.right = (parseFloat(item.style.right) || 0) + speed + 'px';

        requestAnimationFrame(move);
    }

    move();
}

function stopAnimation() {
    clearInterval(conveyorInterval);
    isRunning = false;
    document.querySelectorAll('.conveyor-item').forEach(item => item.remove());
    document.getElementById('pacman').style.display = 'none';
}


function run_py_task3() {
    let currentRow = 0;
    let currentCol = 0;

    function updatePosition() {
        const cell = document.querySelector(`#cell-${currentRow}-${currentCol}`);
        const cellRect = cell.getBoundingClientRect();
        const mapRect = document.getElementById('map').getBoundingClientRect();

        const offsetX = cellRect.left - mapRect.left;
        const offsetY = cellRect.top - mapRect.top;
        
        const character = document.getElementById("character");
        character.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }

    function checkWin() {
        if (document.querySelector(`#cell-${currentRow}-${currentCol}`).classList.contains('green')) {
            alert("Виграш!");
        }
    }

    function moveCharacter(direction, steps) {
        switch (direction) {
            case "up":
                currentRow = Math.max(currentRow - steps, 0);
                break;
            case "down":
                currentRow = Math.min(currentRow + steps, 5);
                break;
            case "left":
                currentCol = Math.max(currentCol - steps, 0);
                break;
            case "right":
                currentCol = Math.min(currentCol + steps, 5);
                break;
        }
        updatePosition();
    }

    function executeMove() {
        const direction1 = document.getElementById("input-dir1").value.toLowerCase();
        const steps1 = parseInt(document.getElementById("input-symbol1").value, 10);
        
        const direction2 = document.getElementById("input-dir2").value.toLowerCase();
        const steps2 = parseInt(document.getElementById("input-symbol2").value, 10);

        moveCharacter(direction1, steps1);
        moveCharacter(direction2, steps2);

        checkWin();
    }

    executeMove();
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

    if (inputComand.trim() === 'money+1' || inputComand.trim() === 'money + 1' || inputComand.trim() === 'money+ 1' || inputComand.trim() === 'money +1') {
        if (inputText) {
            commands.push(`<span class="highlight-input">${inputText}</span>`);
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

function generate_maskot() {
    const backgroundValue = document.getElementById('background').value;
    const colorValue = document.getElementById('color').value;
    const characterValue = document.getElementById('characterg').value;

    const characterName = `${colorValue.charAt(0).toUpperCase() + colorValue.slice(1)} ${backgroundValue.charAt(0).toUpperCase() + backgroundValue.slice(1)} ${characterValue.charAt(0).toUpperCase() + characterValue.slice(1)}`;

    const imagePath = `images/${backgroundValue}-${colorValue}-${characterValue}.png`;

    const characterImage = document.getElementById('character-image');
    characterImage.src = imagePath;
    characterImage.style.display = 'block';

    const characterNameElement = document.getElementById('character_name');
    characterNameElement.textContent = characterName;

    const downloadButton = document.getElementById('download_character');
    downloadButton.style.display = 'block';

    downloadButton.onclick = function() {
        const link = document.createElement('a');
        link.href = imagePath;
        link.download = characterName + '.png';
        link.click();
    };

    const laptopScreen = document.getElementById('laptop-screen');
    laptopScreen.classList.add('active');
}

function generate_emotion() {
    const emotionValue = document.getElementById('emotion').value;
    const animalValue = document.getElementById('animal').value;

    const imagePath = `images/emotion/${emotionValue}-${animalValue}.png`;

    const emotionImage = document.getElementById('emotion-image');
    emotionImage.src = imagePath;
    emotionImage.style.display = 'block';

    const characterName = `${emotionValue.charAt(0).toUpperCase() + emotionValue.slice(1)} ${animalValue.charAt(0).toUpperCase() + animalValue.slice(1)}`;
    const characterNameElement = document.getElementById('character_name');
    characterNameElement.textContent = characterName;

    const downloadButton = document.getElementById('download_character');
    downloadButton.style.display = 'block';

    downloadButton.onclick = function() {
        const link = document.createElement('a');
        link.href = imagePath;
        link.download = characterName + '.png';
        link.click();
    };

    const laptopScreen = document.getElementById('laptop-screen');
    laptopScreen.classList.add('active');
}


function submitAudit() {
    const gameName = document.getElementById('gameName').value;
    const gameGenre = document.getElementById('gameGenre').value;
    const resultContainer = document.querySelector('.result_audit');

    resultContainer.innerHTML = '';

    resultContainer.classList.remove('blackBackground');
    resultContainer.style.backgroundImage = 'none';

    if (gameName === "") {
        const warningMessage = document.createElement('p');
        warningMessage.innerText = `Придумай назву!`;
        resultContainer.appendChild(warningMessage);
    } else {
        resultContainer.classList.add('parallax');
        resultContainer.style.backgroundColor = 'transparent';

        const gameTitle = document.createElement('p');
        gameTitle.className = `gameName ${gameGenre}`;
        gameTitle.innerText = `${gameName}`;
        resultContainer.appendChild(gameTitle);

        const img = document.createElement('img');
        img.className = 'auditImage';

        const backgroundImage = `../static/images/${gameGenre}.gif`;
        resultContainer.style.backgroundImage = `url('${backgroundImage}')`;

        resultContainer.appendChild(img);
    }
}
