// У Бена есть очень простая идея, как получить прибыль: он покупает что-то и снова продаёт. Конечно, если бы он просто купил и продал это по той же цене, то не получил бы никакой прибыли. Вместо этого он собирается купить это по самой низкой цене и продать по самой высокой.

// Задание
// Напишите функцию, которая возвращает минимальное и максимальное значения из заданного списка/массива.

function minMax(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let result = [min, max];
  return result;
}

console.log(minMax([1, 3, 5]));
