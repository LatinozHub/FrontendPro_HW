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

let arr = [];
// let string = prompt("Enter string", "Default");
// let number = prompt("Enter number", "5");
// let typeNull = prompt("Enter typeNull", "null");
// let boolean = prompt("Enter boolean");
// let bigInt = prompt("Enter bigInt");
// let symbol = prompt("Enter symbol");


let typeString = prompt("Enter yout string");
function addString(argString) {
    arr.push(String(argString));
};

let typeNumber = prompt("Enter your number");
function addNumber(argNubmer) {
    arr.push(Number(argNubmer));
};

let enterNull = prompt("Enter Null");
function addNull(argNull) {
    arr.push(argNull);
};

let typeBigInt = prompt("Enter your BigInt");
function addBigInt(argBigInt) {
    arr.push(BigInt(argBigInt));
};

let typeBoolean = prompt("Enter your Boolean");
function addBoolean(argBoolean) {
    arr.push(Boolean(argBoolean));
};

let typeSymbol = prompt("Enter your Symbol");
function addSymbol(argSymbol) {
    arr.push(Symbol(argSymbol));
};

function addUndefined() {
    arr.push(undefined);
};

function addObject() {
    arr.push({
        first: 'joker', 
        second: 'batman',
    });
};

while(arr.length < 8) {
    let action = prompt("Action");
    switch(action) {
        case "string": 
            addString(typeString);
            brake;
        case "nubmer":
            addNumber(typeNumber);
            brake;
        case "Null":
            addNull(enterNull);
            brake;
        case "bigInt":
            addBigInt(typeBigInt);
            brake;
        case "boolean":
            addBoolean(typeBoolean);
            brake;
        case "symbol":
            addSymbol(typeSymbol);
            brake;
        case "undefined":
            addUndefined();
            brake;
        case "object":
            addObject();
            brake;     
        default: console.log("text");           
    };
};