"use strict";
/*



*/
// 1. Написать программу, которая предлагает пользователю ввести сумму денежного вклада в гривнах, 
// а также процент годовых, которые выплачивает банк. 
// Определить сумму денег, выплачиваемых банком вкладчику каждый месяц.
console.log("TASK 1");
let depositMoney = 666;
let annualInterestRate = 2;
let monthlyInterest = (depositMoney * (annualInterestRate / 2)) / 12;
let result1 = `Deposit Money: ${depositMoney}\nAnnual Interest Rate: ${annualInterestRate}\nMonthly Interest: ${monthlyInterest} \n`;
console.log(result1);
//2. Сколько товара ценой Y можно купить на Х гривен и сколько получить сдачи?
console.log("TASK 2");
let money = 123456789;
let pricePerOne = 67;
let amountOfGoodies = Math.floor(money / pricePerOne);
let change = money % pricePerOne;
let result2 = `Amount Of Goodies: ${amountOfGoodies}\nChange: ${change}\n`;
console.log(result2);
// 3. Написать программу, которая переводит фунты в килограммы. 
// Один фунт – 405.9 грамма задается в программе как константа. 
console.log("TASK 3");
const GRAMS_IN_POUND = 405.9;
const pounds = 10;
const kilograms = (pounds * GRAMS_IN_POUND) / 1000;
console.log(`Result: ${kilograms}\n`);
// 4. Ввести длину, ширину и высоту комнаты. 
// Подсчитать, сколько краски уйдет на покраску стен этой комнаты, 
// если на 1м2 стены приходится 0.5 литра краски и 20% поверхности стен занимают окна и двери. 
console.log("TASK 4");
let roomLength = 100;
let roomWidth = 200;
let roomHeight = 300;
const LITER_PER_M2 = 0.5;
const ACTUAL_AREA = 0.8;
let wallsArea = (2 * roomHeight) * (roomLength + roomWidth);
let paintArea = wallsArea * 0.8;
let neededPaint = paintArea * LITER_PER_M2;
console.log(`Needed Paint: ${neededPaint}\n`);
// 5. Ввести с клавиатуры 3-значное число и «перевернуть» его
console.log("TASK 5");
let enteredNumber = 123;
let firstValue = Math.floor(enteredNumber / 100);
let secondValue = Math.floor(enteredNumber / 10) % 10;
let thirdValue = Math.floor(enteredNumber % 10);
let reversedNumber = thirdValue * 100 + secondValue * 10 + firstValue;
console.log(`Reversed Number: ${reversedNumber}\n`);
// 6. Написать функцию, которая возвращает куб числа.
console.log("TASK 6");
function toCube(value) {
    return value ** 3;
}
console.log(`To Cube: ${toCube(4)}\n`);
// 7. Написать функцию для нахождения наибольшего из двух чисел. 
console.log("TASK 7");
function findMax(first, second) {
    let result;
    if (first > second) {
        result = first;
    }
    else if (second > first) {
        result = second;
    }
    else {
        result = 0;
    }
    return result;
}
let firstNumber = 6;
let secondNumber = 7;
let result3 = findMax(firstNumber, secondNumber);
console.log(`First Number: ${firstNumber}\nSecond Number: ${secondNumber}\nMax number: ${result3}\n`);
// 8. Написать функцию, которая возвращает истину, 
// если передаваемое значение положительное и ложь, если отрицательное.
console.log("TASK 8");
function positiveNegativeNumber(value) {
    let result = true;
    if (value < 0) {
        result = false;
    }
    return result;
}
let checkNumber = 4;
let result4 = positiveNegativeNumber(checkNumber);
console.log(`Result: ${result4}\n`);
// 9. Написать функцию, которая в зависимости от выбора пользователя вызывает функции сложения, 
// произведения, вычитания, деления двух чисел (эти функции тоже нужно написать самостоятельно). 
console.log("TASK 9");
function mySum(n1, n2) {
    return n1 + n2;
}
function myDiff(n1, n2) {
    return n1 - n2;
}
function myProd(n1, n2) {
    return n1 * n2;
}
function myDiv(n1, n2) {
    if (n2 === 0) {
        throw new Error("Division by zero is not allowed!\n");
    }
    return n1 / n2;
}
function myCalcular(mathOperation, n1, n2) {
    let result = 0;
    if (mathOperation === 1) {
        result = mySum(n1, n2);
    }
    else if (mathOperation === 2) {
        result = myDiff(n1, n2);
    }
    else if (mathOperation === 3) {
        result = myProd(n1, n2);
    }
    else if (mathOperation === 4) {
        result = myDiv(n1, n2);
    }
    return result;
}
let n1 = 3;
let n2 = 5;
let myChoice = 5;
let result5 = myCalcular(myChoice, n1, n2);
switch (myChoice) {
    case 1:
        console.log(`Result: ${n1} + ${n2} = ${result5}\n`);
        break;
    case 2:
        console.log(`Result: ${n1} - ${n2} = ${result5}\n`);
        break;
    case 3:
        console.log(`Result: ${n1} * ${n2} = ${result5}\n`);
        break;
    case 4:
        console.log(`Result: ${n1} / ${n2} = ${result5}\n`);
        break;
    default:
        console.log("The correct math operation was not selected");
}
// 10. Написать функцию, выводящую на экран прямоугольник с высотой N и шириной K.
console.log("TASK 10");
function printRectange(n, k) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < k; j++) {
            row += "*";
        }
        console.log(row);
    }
}
printRectange(2, 3);
// 11. Написать функцию, которая проверяет, является ли переданное ей число простым? 
// Число называется простым, если оно делится без остатка только на себя и на единицу.
console.log("TASK 11");
// 12. Написать функцию, вычисляющую факториал переданного ей числа.
console.log("TASK 12");
// 13. Написать функцию, которая принимает два параметра: основание степени и показатель степени, 
// и вычисляет степень числа на основе полученных данных.
console.log("TASK 13");
// 14. Написать функцию, которая получает в качестве параметров 2 целых числа и возвращает сумму чисел из диапазона между ними.
console.log("TASK 14");
// 15. Число называется совершенным, если сумма всех его делителей равна ему самому. 
// Напишите функцию поиска таких чисел во введенном интервале.
console.log("TASK 15");
// 16. Написать функцию, проверяющую является ли переданный ей параметр алфавитно-цифровым.
console.log("TASK 16");
// 17. Написать функцию, которая определяет, является ли «счастливым» шестизначное число.
console.log("TASK 17");
