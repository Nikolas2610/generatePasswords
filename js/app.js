// Declare Variables
const vowels = ["A", "E", "I", "O", "U", "Y"];
const consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "W", "Z"];
const symbols = ["!", "/", "\\", "-", "_", "$", "#", "@", "&"];

document.getElementById("generatePasswords").addEventListener('click', () => {
    // Get Symbols
    const symbolUser = checkBox();
    // Declare Variables
    passwordIdeas = [];

    // Get values from the form 
    let name = document.getElementById("firstName").value.toUpperCase();
    let surname = document.getElementById("lastName").value.toUpperCase();
    let dayBirth = document.getElementById("dayBirth").value;
    let monthBirth = document.getElementById("monthBirth").value;
    let yearBirth = document.getElementById("yearBirth").value;
    let passwordLength = document.getElementById("passwordLength").value;

    // Check if we have empty fields
    let errors = emptyFields(name, surname, dayBirth, monthBirth, yearBirth, passwordLength);

    // Fields has values
    if (errors.length == 0) {
        // Create Password
        // Seperate vowels and consonants of the name and add to passwordIdeas
        setVocabulary(name);

        // Seperate vowels and consonants of the surname and add to passwordIdeas
        setVocabulary(surname);

        //delete double words
        checkDoubleWords(passwordIdeas);

        //push data
        passwordIdeas.push(dayBirth);
        passwordIdeas.push(monthBirth);

        // Seperate yearBirth
        if (yearBirth.length == 4) {
            passwordIdeas.push(yearBirth[0] + yearBirth[1]);
            passwordIdeas.push(yearBirth[2] + yearBirth[3]);
        } else {
            passwordIdeas.push(yearBirth);
        }

        // Create Password
        const finalPassword = createPassword(passwordIdeas, symbolUser, passwordLength);
        // Export Password
        document.getElementById("results").style.visibility = "visible";
        document.getElementById("answer").textContent = "Password: ";
        document.getElementById("password").textContent = finalPassword;
        document.getElementById("password").style.color = "lawngreen";
    } else {
        // Print error msg
        let errorMsg = arrayToString(errors);
        // Print empty fields
        document.getElementById("answer").innerHTML = "Complete correct the form to get your password!";
        results.style.visibility = "visible";
        document.getElementById("answer").style.color = "red";
        // Change color of the labels
        redLabels(errors);
    }
});