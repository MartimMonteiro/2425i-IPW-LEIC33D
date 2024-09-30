
function copyValidArrayElements(arr, elementValidators) {
    // Retorna um novo array com elementos que passam em qualquer conjunto de validadores
    return arr.filter(element => 
        elementValidators.find (
            validatorGroup => (validateArrayElements([element], validatorGroup)) 
        )
    );
}


const elementValidators = [
    {
       validators: [s => typeof s === 'string' && s.length > 2, s => s[0] === 'a']
    },
    {
       validators: [s => Number.isInteger(s)]
    }
 ];



const arr1 = ["a"];
const arr2 = [123];
const arr3 = ["abc", 123];

console.log(copyValidArrayElements(arr1, elementValidators)); // []
console.log(copyValidArrayElements(arr2, elementValidators)); // [123]
console.log(copyValidArrayElements(arr3, elementValidators)); // ["abc", 123]


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

