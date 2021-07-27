let x = true;
if (typeof x == 'number' && !isNaN(x)) {
  console.log('x - число');
} else if (typeof x=='boolean') {
  console.log('x - логический тип');
} else if (typeof x=='string'){
  console.log('x - строка')
}
else {
    console.log('тип x не определен');
}

// По условию задачи значение x задается прямо в коде, а не запрашивается из prompt. Поэтому правильнее будет для логического типа сделать проверку через typeof, как и для остальных вариантов