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
            screenText.textContent = inputText; // Відображаємо текст, введений користувачем
        }        
    }
    else {
        laptopScreen.classList.add("inactive");
        laptopScreen.classList.remove("active");
        screenText.textContent = "Помилка у команді!";
    }

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

function run_py_task3() {
    let currentRow = 0;
    let currentCol = 0;

    // Функція для оновлення позиції персонажа
    function updatePosition() {
        const cell = document.querySelector(`#cell-${currentRow}-${currentCol}`);
        const cellRect = cell.getBoundingClientRect();
        const mapRect = document.getElementById('map').getBoundingClientRect();

        // Визначаємо позицію відносно таблиці
        const offsetX = cellRect.left - mapRect.left;
        const offsetY = cellRect.top - mapRect.top;
        
        const character = document.getElementById("character");
        character.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }

    // Перевіряємо на виграш (зелена комірка)
    function checkWin() {
        if (document.querySelector(`#cell-${currentRow}-${currentCol}`).classList.contains('green')) {
            alert("Виграш!");
        }
    }

    // Основна логіка переміщення персонажа
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

    // Формування шляху до зображення
    const imagePath = `images/emotion/${emotionValue}-${animalValue}.png`;

    const emotionImage = document.getElementById('emotion-image');
    emotionImage.src = imagePath; // Виправлення: використовуємо emotionImage
    emotionImage.style.display = 'block';

    // Формування імені персонажа
    const characterName = `${emotionValue.charAt(0).toUpperCase() + emotionValue.slice(1)} ${animalValue.charAt(0).toUpperCase() + animalValue.slice(1)}`;
    const characterNameElement = document.getElementById('character_name');
    characterNameElement.textContent = characterName;

    const downloadButton = document.getElementById('download_character');
    downloadButton.style.display = 'block';

    // Обробник кліку для кнопки завантаження
    downloadButton.onclick = function() {
        const link = document.createElement('a');
        link.href = imagePath;
        link.download = characterName + '.png'; // Задаємо ім'я файлу для завантаження
        link.click();
    };

    const laptopScreen = document.getElementById('laptop-screen');
    laptopScreen.classList.add('active');
}


function submitAudit() {
    const gameName = document.getElementById('gameName').value;
    const ageGroup = document.getElementById('ageGroup').value;
    const resultContainer = document.querySelector('.result_audit');

    // Чистимо попередні результати
    resultContainer.innerHTML = '';

    // Додаємо чорний фон до натискання кнопки
    resultContainer.classList.add('blackBackground');

    // Перевірка на введення назви гри
    if (gameName === "") {
        const warningMessage = document.createElement('p');
        warningMessage.innerText = `Придумай назву!`;
        resultContainer.appendChild(warningMessage);
    } else {
        // Додаємо паралакс-графіку
        resultContainer.classList.add('parallax'); // Додаємо клас для паралаксу
        resultContainer.style.backgroundColor = 'transparent'; // Зробити фон прозорим

        // Додаємо назву гри
        const gameTitle = document.createElement('p');
        gameTitle.className = 'gameName'; // Додаємо клас gameName
        gameTitle.innerText = `${gameName}`;
        resultContainer.appendChild(gameTitle);

        // Додаємо зображення в залежності від вікової категорії
        const img = document.createElement('img');
        img.className = 'auditImage'; // Додаємо клас auditImage
        
        switch (ageGroup) {
            case 'children':
                img.src = '../static/images/children.png';
                break;
            case 'teenagers':
                img.src = '../static/images/teenagers.png';
                break;
            case 'youngAdults':
                img.src = '../static/images/young-adults.png';
                break;
            case 'adults':
                img.src = '../static/images/adults.png';
                break;
            default:
                img.src = '../static/images/default-image.png';
                break;
        }

        resultContainer.appendChild(img);
    }
}
