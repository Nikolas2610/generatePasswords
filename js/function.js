// Get Symbols
function checkBox() {
    let arr = [];
    if (document.getElementById("ramdom").checked) {
        arr = symbols;
        return arr;
    } else {
        const thaumastiko = document.getElementById("thaumastiko").checked;
        if (thaumastiko) {
            arr.push(document.getElementById("thaumastiko").value)
        }
        const kathetos = document.getElementById("kathetos").checked;
        if (kathetos) {
            arr.push(document.getElementById("kathetos").value)
        }
        const paula = document.getElementById("paula").checked;
        if (paula) {
            arr.push(document.getElementById("paula").value)
        }
        const katoPaula = document.getElementById("katoPaula").checked;
        if (katoPaula) {
            arr.push(document.getElementById("katoPaula").value)
        }
        const erotimatiko = document.getElementById("erotimatiko").checked;
        if (erotimatiko) {
            arr.push(document.getElementById("erotimatiko").value)
        }
        const dolario = document.getElementById("dolario").checked
        if (dolario) {
            arr.push(document.getElementById("dolario").value)
        }
    }
    return arr;
}

// Seperate vowels and consonants
function setVocabulary(name) {
    let nameSyllables = [];
    for (i = 0; i < name.length; i++) {
        for (j = 0; j < vowels.length; j++) {
            if (name[i] == vowels[j]) {
                nameSyllables.push("vowels");
            }
        }
        for (j = 0; j < consonants.length; j++) {
            if (name[i] == consonants[j]) {
                nameSyllables.push("consonants");
            }
        }
    }
    getSyllables(nameSyllables, name);
}
// Add Syllables
function getSyllables(array, str) {
    let randomNum;
    for (i = 2; i < array.length; i++) {
        randomNum = getRandomInt(2);
        if (array[i - 2] == "consonants" && array[i - 1] == "vowels" && array[i] == "consonants") {
            if (randomNum == 1) {
                passwordIdeas.push(str[i - 2].toLowerCase() + str[i - 1].toLowerCase());
            } else {
                passwordIdeas.push(str[i - 2] + str[i - 1]);
            }
        } else if (array[i - 2] == "vowels" && array[i - 1] == "consonants" && array[i] == "vowels" && array[i + 1] == "vowels") {
            if (randomNum == 1) {
                passwordIdeas.push(str[i - 2].toLowerCase() + str[i - 1].toLowerCase() + str[i].toLowerCase() + str[i + 1].toLowerCase());
            } else {
                passwordIdeas.push(str[i - 2] + str[i - 1] + str[i] + str[i + 1]);
            }

        } else if (array[i - 2] == "consonants" && array[i - 1] == "vowels" && array[i] == "vowels" && array[i] == "consonants") {
            if (randomNum == 1) {
                passwordIdeas.push(str[i - 2].toLowerCase() + str[i - 1] + str[i].toLowerCase());
            } else {
                passwordIdeas.push(str[i - 2] + str[i - 1] + str[i]);
            }

        } else if (array[i - 2] == "consonants" && array[i - 1] == "consonants" && array[i] == "vowels" && array[i + 1] == "consonants") {
            if (randomNum == 1) {
                passwordIdeas.push(str[i - 2].toLowerCase() + str[i - 1] + str[i].toLowerCase());
            } else {
                passwordIdeas.push(str[i - 2] + str[i - 1] + str[i]);
            }

        }
    }
}

//random numbers with max-1 value
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//delete double words
function checkDoubleWords(arr) {
    for (i = 0; i < arr.length; i++) {
        let element = arr[i];
        for (j = 1 + i; j < arr.length; j++) {
            if (element.length > arr[j].length) {
                if (element.includes(arr[j])) {
                    arr.splice(j);
                }
            } else if (arr[j].includes(element)) {
                arr.splice(j);
            } else {
                if (arr[j].includes(element)) {
                    arr.splice(j);
                } else if (element.includes(arr[j])) {
                    arr.splice(j);
                }
            }
        }
    }
}

function createPassword(passwordIdeas, symbols, passwordLength) {
    let finalPassword = "";
    while (finalPassword.length != passwordLength) {
        randomNumber = getRandomInt(11);
        if (randomNumber < 3) {
            // Import Symbol
            finalPassword += symbols[getRandomInt(symbols.length)];
        } else {
            // Import Letters
            finalPassword += passwordIdeas[getRandomInt(passwordIdeas.length)];
        }
        if (finalPassword.length > passwordLength) {
            finalPassword = "";
        }
    }
    return finalPassword;
}

// Copy Password
function copyTextFromElement() {
    let element = document.getElementById("password"); //select the element
    let elementText = element.textContent; //get the text content from the element
    copyText(elementText); //use the copyText function below
}

// Copy Password
function copyText(text) {
    navigator.clipboard.writeText(text);
}

// Empty fields
function emptyFields(name, surname, dayBirth, monthBirth, yearBirth, passwordLength) {
    let errors = [];
    if (!name || isLetters(name)) {
        errors.push("First Name");
    }
    if (!surname || isLetters(surname)) {
        errors.push("Last Name");
    }
    if (!dayBirth || !isNumber(dayBirth)) {
        errors.push("Day of Birthday");
    }
    if (!monthBirth || !isNumber(monthBirth)) {
        errors.push("Month of Birthday");
    }
    if (!yearBirth || !isNumber(yearBirth)) {
        errors.push("Year of Birthday");
    }
    if (!passwordLength || !isNumber(passwordLength)) {
        errors.push("Password lenght");
    }
    return errors;
}

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 
function isLetters(n) { return /^[^a-zA-Z]*$/.test(n); } 


function arrayToString(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += array[i];
        if (i != array.length - 1) {
            string += ", ";
        }
    }
    return string;
}

function redLabels(errors) {
    let redfields = [];
    for (let i = 0; i < errors.length; i++) {
        switch (errors[i]) {
            case "First Name":
                redfields.push("firstName")
                break;
            case "Last Name":
                redfields.push("lastName")
                break;
            case "Day of Birthday":
                redfields.push("dayBirth")
                break;
            case "Month of Birthday":
                redfields.push("monthBirth")
                break;
            case "Year of Birthday":
                redfields.push("yearBirth")
                break;
            case "Password lenght":
                redfields.push("passwordLength")
                break;
        }
    }
    let inputLabels = document.getElementsByClassName("inputLabel");
    for (let i = 0; i < inputLabels.length; i++) {
        inputLabels[i].style.border = "2px solid #205839a6";
        inputLabels[i].style.backgroundColor = "#205839a6";
    }
    for (let i = 0; i < redfields.length; i++) {
        const red = document.getElementById(redfields[i]);
        red.style.border = "2px solid #da4444a6";
        red.style.backgroundColor = "#da4444a6";
    }

}


