/*
# 1) Создать массив содержащий все типы данных которые мы изучили
# - спрашиваем у пользователя 2 операнда (2 промта).
# - первым будет добавляемый тип, вторым экшен для преобразования соответствующего типа.
# - добавляем готовый результат в массив.
# - в конце всех операций выводим получившийся массив в консоль.
# - массив должен содержать все 8 типов данных JavaScript.
#
# 2) Написать скрипт который будет выполнять математические операции
# - спрашиваем у пользователя 3 операнда (3 промта).
# - написать функции для всех операций (сложение, вычитание, умножение, деление, деление по модулю).
#   Каждая функция считает результат и выводит в консоль "Результат [название операции]: 2+3 = 5",
#   где 2 и 3 то что ввел пользователь в первых двух промтах, а "+" это операция для которой написана функция,
#   это не обязательно должен быть символ операции (+, -, *, /, %) может быть и текст. 
# - использовать if else или switch case для вызова необходимой функции. 
*/






// let arr = [];

// function addString(argString) {
//     arr.push(String(argString));
// };


// function addNumber(argNubmer) {
//     arr.push(Number(argNubmer));
// };


// function addNull(argNull) {
//     arr.push(argNull);
// };


// function addBigInt(argBigInt) {
//     arr.push(BigInt(argBigInt));
// };


// function addBoolean(argBoolean) {
//     arr.push(Boolean(argBoolean));
// };


// function addSymbol(argSymbol) {
//     arr.push(Symbol(argSymbol));
// };

// function addUndefined() {
//     arr.push(undefined);
// };

// function addObject() {
//     arr.push({
//         first: 'joker', 
//         second: 'batman',
//     });
// };

// while(arr.length < 8) {
//     let type = prompt("Add your type");
//     let action = prompt("Action");
//     switch(action) {
//         case "string": 
//             addString(type);
//             break;
//         case "number":
//             addNumber(type);
//             break;
//         case "Null":
//             addNull(type);
//             break;
//         case "bigInt":
//             addBigInt(type);
//             break;
//         case "boolean":
//             addBoolean(type);
//             break;
//         case "symbol":
//             addSymbol(type);
//             break;
//         case "undefined":
//             addUndefined();
//             break;
//         case "object":
//             addObject();
//             break;     
//         default: console.log("text");           
//     };
// };
// console.log("array", arr);




let first = Number(prompt("Enter first number"));
let second = Number(prompt("Enter second number"));
let action = prompt("Enter your action");

function plus(first, second) {
    let result = first + second;
    console.log("plus", result);
};

function minus(first, second) {
    let result = first - second;
    console.log("minus", result);
};

function multiplication(first, second) {
    let result = first * second;
    console.log("multiplication", result);
};

function division(first, second) {
    let result = first / second;
    console.log("division", result);
};

function modulDivision(first, second) {
    let result = first % second;
    console.log("modulDivision", result);
};

plus(first, second);
