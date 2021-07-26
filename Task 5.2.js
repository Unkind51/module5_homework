let x;
x=prompt('Введите x');
if (typeof +x == 'number' && !isNaN(x)) {
  console.log('x - число');
} else if (x=='true' || x=='false') {
  console.log('x - логический тип');
} else if (typeof x=='string'){
  console.log('x - строка')
}
else {
    console.log('тип x не определен');
}