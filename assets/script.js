let specialChart = [
    '!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '=', '+', '{', '[', '}', ']',
];

let numChart = [
    '0', '1','2', '3', '4', '5', '6', '7', '8', '9', 
];

let lowerCaseChart = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y','z',
]

let upperCaseChart = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y','Z',
]

console.log(upperCaseChart.length)
console.log(specialChart.length)
console.log(lowerCaseChart.length)

function passwordOptions() {
    let length = parseInt(
        prompt('How many characters would you like the password to contain?'),
        10
    );

    if(Number.isNaN(length)) {
        alert('Password length must be provided as a number');
        return null;
    }

    if (length < 8) {
        alert('Password length must be at least 8 characters!');
        return null;
    }

    if(length > 128) {
        alert('Password length must be less than 128 character');
        return null;
    }

    let hasSpecialChart = confirm('Click OK to include special characters.');

    let hasNumChart = confirm('Click OK to include numberic characters.');

    let hasLowerCaseChart = confirm('Click OK to incluse lowercase characters.');

    let hasUpperCaseChart = confirm('Click Ok to include uppercase characters.');

    if (
        hasSpecialChart === false &&
        hasNumChart === false &&
        hasLowerCaseChart === false &&
        hasUpperCaseChart === false 
    ) {
        alert('Must select at least one character type.');
        return null;
    }

    let passwordStorage = {
        length: length,
        hasSpecialChart: hasSpecialChart,
        hasNumChart: hasNumChart,
        hasLowerCaseChart: hasLowerCaseChart,
        hasUpperCaseChart: hasUpperCaseChart,
    };
    
    return passwordStorage;
}

function getRand(arr) {
    let ranIndex = Math.floor(Math.random() * arr.length);
    let randElement = arr[ranIndex];

    return randElement;
}

function generatePassword() {
    let options = passwordOptions();
    let results = [];
    let possibleCharts = [];
    let guaranteedCharts = [];

    if (!options) return null;

    if (options.hasSpecialChart) {
        possibleCharts = possibleCharts.concat(specialChart);
        guaranteedCharts.push(getRand(numChart));
    }

    if (options.hasNumChart) {
        possibleCharts = possibleCharts.concat(numChart);
        guaranteedCharts.push(getRand(numChart));
    }

    if (options.hasLowerCaseChart) {
        possibleCharts = possibleCharts.concat(lowerCaseChart);
        guaranteedCharts.push(getRand(lowerCaseChart));
    }

    if (options.hasUpperCaseChart) {
        possibleCharts = possibleCharts.concat(upperCaseChart);
        guaranteedCharts.push(getRand(upperCaseChart));
    }

    for (let x = 0; x < options.length; x++) {
        let possibleChart = getRand(possibleCharts);

        results.push(possibleChart);
    }

    for (let x = 0; x < guaranteedCharts.length; x++) {
        results[x] = guaranteedCharts[x];
    }
    
    return results.join('')

}

let generateBtn = document.querySelector("#generate");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);