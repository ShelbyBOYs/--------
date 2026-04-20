"use strict";
// Каррінг-функція для створення універсального конвертера
function curryConverter(a) {
  return function (b) {
    // замикання: зберігає a і b
    return function (temp) {
      return a * temp + b;
    };
  };
}

// Створюємо два конвертери
const cToF = curryConverter(9 / 5)(32);     // C → F
const fToC = curryConverter(5 / 9)(-32 * 5 / 9); // F → C

// Ввід даних
let temperature = Number(prompt("Введіть температуру:"));
let direction = prompt('Введіть напрямок ("C to F" або "F to C"):');

// Обчислення
let result;

if (direction === "C to F") {
  result = cToF(temperature);
} else if (direction === "F to C") {
  result = fToC(temperature);
} else {
  alert("Помилка: неправильний напрямок!");
  console.log("Помилка: неправильний напрямок!");
}

// Вивід результату
if (result !== undefined) {
  alert("Результат: " + result);
  console.log("Результат:", result);
}
