// let balance1;
let balance2 = 1;

// console.log(balance1 || 'no') // falsy - 
// console.log(balance1 ?? balance2) // null, undefined


/**
 * TODO Example 1 - Базовые операции с массивом
 * Создайте массив genres с элементами «Jazz» и «Blues».
 * Добавьте «Рок-н-ролл» в конец.
 * Выведите в консоль первый элемент массива.
 * Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
 * Удалите первый элемент и выведите его в консоль.
 * Вставьте «Country» и «Reggy» в начало массива.
 */
//  const genres = ["Jazz", "Blues"];
//  genres.push("Рок-н-ролл");
//  console.log(genres[0])
//  console.log(genres[genres.length - 1])
//  console.log(genres.shift())
//  console.log(genres.unshift('«Country»', '«Reggy»'))
//  console.log(genres);

 /**
  * TODO Example 2 - Массивы и строки
  * Напиши скрипт для вычисления площади прямоугольника со сторонами,
  * значения которых хранятся в переменной values в виде строки.
  * Значения гарантированно разделены пробелом.
  */
 const values = '8 11';
 const valuesArr = values.split(' ')
//  console.log(Number(valuesArr[0]) * Number(valuesArr[1]))
 
 /**
  * TODO Example 3 - Перебор массива
  * Напиши скрипт для перебора массива fruits циклом for.
  * Для каждого элемента массива выведи в консоль
  * строку в формате номер_элемента: значение_элемента.
  * Нумерация элементов должна начинаться с 1.
  */
 const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
 
//  for (let i = 0; i < fruits.length; i += 1) {
//      console.log(i + 1, fruits[i]) // fruits[0], fruits[1], fruits[2] 
//  }

 
 /**
  * TODO Example 4 - Массивы и циклы
  * Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
  * В переменных names и phones хранятся строки имен и телефонных номеров,
  * разделенные запятыми. Порядковый номер имен и телефонов в строках указывают
  * на соответствие. Количество имен и телефонов гарантированно одинаковое.
  *
  * const names = 'Jacob,William,Solomon,Artemis';
  * const phones = '89001234567,89001112233,890055566377,890055566300';
  */
 
//  const names = 'Jacob,William,Solomon,Artemis';
//  const phones = '89001234567,89001112233,890055566377,890055566300';

//  const namesArr = names.split(',')
//  const phonesArr = phones.split(',')
//  const count = namesArr.length
 
//  for (let i = 0; i < count; i += 1) {
//     console.log(namesArr[i], phonesArr[i])
//  }

 /**
  * TODO Example 5 - Массивы и строки
  * Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
  * Результирующая строка не должна начинаться или заканчиваться пробельным символом.
  * Скрипт должен работать для любой строки.
  */
 
 const str = 'Welcome   to the future hello';
//  const strArr = str.split(' ')
//  console.log(strArr)
//  const res = strArr.slice(1, -1)
//  console.log(res.join(' ').trim())
 

 
 /**
  * TODO Example 6 - Массивы и строки
  * Напиши скрипт который «разворачивает» строку (обратный порядок букв)
  * и выводит ее в консоль.
  */
 
 const string = '!Welcome to the future!';
//  console.log(string.split('').reverse().join(''))
 const reversedStr = '';

//  for (let i = string.length - 1; i >= 0; i -= 1 ) {
//      console.log(string[i])
//  }
 


/* Example 10 - Ввод пользователя и ветвления
* Напиши скрипт, который будет спрашивать логин с помощью 
prompt и логировать результат в консоль браузера.
*
* Если посетитель вводит "Админ", то prompt запрашивает пароль
* Если ничего не введено или нажата клавиша Esc - 
вывести строку "Отменено"
* В противном случае вывести строку "Я вас не знаю"
* Пароль проверять так:
*
* Если введён пароль "Я админ", то 
вывести строку "Здравствуйте!"
* Иначе выводить строку "Неверный пароль"
*/

// const userName = prompt('Your name?') ?? ''

// if (userName.trim() === 'Админ') {
//     const password = prompt('Your password?')   
//     if (password === 'Я админ') {
//         console.log("Здравствуйте!")
//     } else {
//         console.log("Неверный пароль")
//     }
// } else if (Boolean(userName) === false){
//     console.log('Отменено')
// } else {
//     console.log("Я вас не знаю")
// }

// if (typeof userName === "string") {

// }

// switch (userName.trim()) {
//     case 'Админ':
//         const password = prompt('Your password?')   
//         if (password === 'Я админ') {
//             console.log("Здравствуйте!")
//         } else {
//             console.log("Неверный пароль")
//         }
//         break;
//     case '':
//     case null:
//         console.log('Отменено')
//         break;
//     default:
//         console.log("Я вас не знаю")
// }


const text = `Думи мої, думи мої,
Лихо мені з вами!
Нащо стали на папері
Сумними рядами?..
Чом вас вітер не розвіяв
В степу, як пилину?
Чом вас лихо не приспало,
Як свою дитину?...`;

let i = 0;
let counter = 0;

// while(i < textArr.length) { if (text[i] === '\n') { counter += 1 } i += 1 }




// =================================== 
 /**
  * TODO Example 7 - Сортировка массива с циклом
  * Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.
  */
 const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
 // const ua = ['б', 'а', 'е', 'ж', 'в', 'д'];
 // const numbers = [2, 5, 1, 7, 9, 3]
 
 // #1 [2, 1, 5, 7, 3, 9]
 // #2 [1, 2, 5, 3, 7, *9]
 // #3 [1, 2, 3, 5, *7, *9]
 // #3 [1, 2, 3, *5, *7, *9]
 
 // endI - граница основного цикла, это всегда длина массива - 1
 // endJ - граница вложенного массива минус текущая итерация основного цикла
 
 // was swap - если они прошел по всему массиву и не поменял местами не один элемент
 // значит все стоят в нужном порябке и дальше идти по массиву не нужно
 

 
 /**
  * TODO Example 8 - Поиск элемента
  * Напиши скрипт поиска самого маленького числа в массиве.
  * Код должен работать для любого массива чисел. Используй цикл для решения задачи.
  */
 
 const numbers = [2, 17, 94, 1, 23, 37];
 
 
 // console.log('min', min); // 1


