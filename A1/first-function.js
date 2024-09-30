
function validateArrayElements(arr, elementValidator) {
    const { validators } = elementValidator;          // Separa o objeto element elementValidator para obtermos assim a lista de Validators

    for (const element of arr) {                      // Percorre cada elemento do Array(arr)
        for (const validator of validators) {         // Percorre cada Validator da lista de Validators
            if (!validator(element)) {                // Verifica se o elemento do arr não cumpre algum validator
                return false;                         // Se não cumprir retorna False
            }
        }
    }
    return true;                                      // Return True se todos os elementos do arr cumprirem todos os validators
}



//NUMBERS
let validatorsObj = {
    validators: [
        (n) => typeof n === 'number' && n > 0,  // checks if number is positive
        (n) => n % 2 === 0                      // checks if number is even
    ] 
};
console.log(validateArrayElements([1, 2, 3], validatorsObj)); // false


//STRING
let stringValidator = {
    validators: [
        (str) => typeof str === 'string',      // checks if the element is a string
        (str) => str.length > 3,               // checks if the string has more than 3 characters
    ]
}

const strArr1 = ['hello', 'world', 'test']; // all strings, length > 3
console.log(validateArrayElements(strArr1, stringValidator));



//MIXED_VALUES
const mixedArr3 = [20, 'hello', 50];      // contains non-number elements
let mixedValidator = {
    validators: [
        (val) => typeof val === 'number',      // checks if the element is a number
        (val) => val >= 10 && val <= 100,      // checks if the number is between 10 and 100
    ]
}

console.log(validateArrayElements(mixedArr3,mixedValidator))



