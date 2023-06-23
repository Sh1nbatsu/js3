// Задание 1
// Решение 1

// function range(number, min, max) {
//   if (number >= min && number <= max) {
//     console.log("number is in the range");
//   } else {
//     console.log("number isn't in the range");
//   }
// }

// range(17, 18, 20);

// Решение 2

// function range2(number, min, max) {
//   if (number > max || number < min) {
//     console.log("number isn't in the range");
//   } else {
//     console.log("number is in the range");
//   }
// }

// Задание 2

// let array = [1, 2, 3, 4, 5];

// for (let i = 1; i < array.length; i += 2) {
//   console.log(array[i]);
// }

// Задание 3

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`Индексу ${i} соотвествует число ${numbers[i]}`);
// }

// Задание 4

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];

// let filteredArray = [];
// let filtIndex = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     filteredArray[filtIndex] = arr[i];
//     filtIndex++;
//   }
// }

// console.log(filteredArray);

// Задание 8

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];

// function rangedArray(array, min) {
//   let filteredArray = [];
//   let filtIndex = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= min) {
//       filteredArray[filtIndex] = array[i];
//       filtIndex++;
//     }
//   }
//   console.log(filteredArray);
// }

// rangedArray(arr, 5);

// Задание 6

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// function arrayData(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   console.log(`Сумма всех элементов массива = ${sum}`);

//   let evenSum = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       evenSum += array[i];
//     }
//   }

//   console.log(`Сумма всех четных элементов массива = ${evenSum}`);

//   let max = 0;
//   let maxIndex = "";

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= max) {
//       max = array[i];
//     }
//   }

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === max) {
//       maxIndex += `${i} `;
//     }
//   }

//   console.log(`Наибольшее число = ${max}`);
//   console.log(`Индекс набольшего(их) = ${maxIndex}`);
// }

// arrayData(numbers);
