/*



*/

// 1. Написать программу, которая предлагает пользователю ввести сумму денежного вклада в гривнах, 
// а также процент годовых, которые выплачивает банк. 
// Определить сумму денег, выплачиваемых банком вкладчику каждый месяц.
console.log("TASK 1");
let depositMoney: number = 666;
let annualInterestRate: number = 2;
let monthlyInterest: number = (depositMoney * (annualInterestRate / 2)) / 12;
let result1: string = `Deposit Money: ${depositMoney}\nAnnual Interest Rate: ${annualInterestRate}\nMonthly Interest: ${monthlyInterest} \n`;
console.log(result1);

//2. Сколько товара ценой Y можно купить на Х гривен и сколько получить сдачи?
console.log("TASK 2");
let money: number = 123456789;
let pricePerOne: number = 67;

let amountOfGoodies: number = Math.floor(money / pricePerOne);
let change: number = money % pricePerOne;
let result2: string = `Amount Of Goodies: ${amountOfGoodies}\nChange: ${change}\n`;
console.log(result2);

// 3. Написать программу, которая переводит фунты в килограммы. 
// Один фунт – 405.9 грамма задается в программе как константа. 
console.log("TASK 3");
const GRAMS_IN_POUND: number = 405.9;
const pounds: number = 10;
const kilograms: number = (pounds * GRAMS_IN_POUND) / 1000;
console.log(`Result: ${kilograms}\n`);

// 4. Ввести длину, ширину и высоту комнаты. 
// Подсчитать, сколько краски уйдет на покраску стен этой комнаты, 
// если на 1м2 стены приходится 0.5 литра краски и 20% поверхности стен занимают окна и двери. 
console.log("TASK 4");
let roomLength: number = 100;
let roomWidth: number = 200;
let roomHeight: number = 300;

const LITER_PER_M2: number = 0.5;
const ACTUAL_AREA: number = 0.8;

let wallsArea: number = (2 * roomHeight) * (roomLength + roomWidth);
let paintArea: number = wallsArea * 0.8;
let neededPaint: number = paintArea * LITER_PER_M2;

console.log(`Needed Paint: ${neededPaint}\n`);

// 5. Ввести с клавиатуры 3-значное число и «перевернуть» его
console.log("TASK 5"); 
let enteredNumber: number = 123;
let firstValue: number = Math.floor(enteredNumber / 100);
let secondValue: number = Math.floor(enteredNumber / 10) % 10; 
let thirdValue: number = Math.floor(enteredNumber % 10);

let reversedNumber = thirdValue * 100 + secondValue * 10 + firstValue;
console.log(`Reversed Number: ${reversedNumber}\n`);

// 6. Написать функцию, которая возвращает куб числа.
console.log("TASK 6"); 
function toCube(value: number): number {
    return value** 3;
}

console.log(`To Cube: ${toCube(4)}\n`);

// 7. Написать функцию для нахождения наибольшего из двух чисел. 
console.log("TASK 7"); 
function findMax(first: number, second: number): number {
    let result: number;
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

let firstNumber: number = 6;
let secondNumber: number = 7;
let result3: number = findMax(firstNumber, secondNumber);
console.log(`First Number: ${firstNumber}\nSecond Number: ${secondNumber}\nMax number: ${result3}\n`);

// 8. Написать функцию, которая возвращает истину, 
// если передаваемое значение положительное и ложь, если отрицательное.
console.log("TASK 8"); 
function positiveNegativeNumber(value: number) : boolean {
    let result: boolean = true;
    if (value < 0) {
        result = false;
    }
    return result;
}
let checkNumber: number = 4;
let result4: boolean = positiveNegativeNumber(checkNumber);
console.log(`Result: ${result4}\n`);

// 9. Написать функцию, которая в зависимости от выбора пользователя вызывает функции сложения, 
// произведения, вычитания, деления двух чисел (эти функции тоже нужно написать самостоятельно). 
console.log("TASK 9"); 
function mySum(n1: number, n2: number): number {
    return n1 + n2;
}
function myDiff(n1: number, n2: number): number {
    return n1 - n2;
}
function myProd(n1: number, n2: number): number {
    return n1 * n2;
}
function myDiv(n1: number, n2: number): number {
    if (n2 === 0) {
        throw new Error("Division by zero is not allowed!\n");
    }
    return n1 / n2;
}
function myCalcular(mathOperation: number, n1: number, n2: number): number {
    let result: number = 0;
    if (mathOperation === 1) {
        result = mySum(n1, n2);
    }
    else if(mathOperation === 2) {
        result = myDiff(n1, n2);
    }
    else if(mathOperation === 3) {
        result = myProd(n1, n2);
    }
    else if(mathOperation === 4) {
        result = myDiv(n1, n2);
    }
    return result;
}

let n1: number = 3;
let n2: number = 5;
let myChoice: number = 5;
let result5: number = myCalcular(myChoice, n1, n2);
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
function printRectange(n: number, k: number) : void {
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