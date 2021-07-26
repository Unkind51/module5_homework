let value = +prompt('Введите любое значение');
console.log(typeof value);
if (!value || isNaN(value)) {
  console.log('Упс, кажется, вы ошиблись');
} else if (value % 2 === 0) {
  console.log('Чётное число');
} else {
  console.log('Нечётное число');
}