// var d = 1;
// let cd

// if (d === 1) {
//     let cd = 1222
//     d += 10
//     console.log(cd)
// }

// console.log(cd)



/**
 * Example 1 - Ввод пользователя и ветвления
 * Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?".
 * Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"
 */

// const answer = prompt("Какое официальное название JavaScript?")
// const rightAnswer = 'ECMAScript'

// if (answer.toLowerCase() === rightAnswer.toLowerCase()) {
//     alert("Верно!")
// } else if (answer === null) {
//     console.log('No answer')
// } else {
//     alert("Не знаете? ECMAScript!")
// }














/**
 * Example 2 - Ветвеления
 * Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля.
 * Если был введен ноль, выводи в консоль строку "Это ноль".
 * Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".
 */

// const answer = prompt('Enter a number')
// const num = Number(answer)

// if (num > 0) {
//     console.log("Это положительное число")
// } else if (num === 0) {
//     console.log("Это ноль")
// } else if (num < 0) {
//     console.log("Это отрицательное число")
// }

// if (num > 0) console.log("Это положительное число")
// else if (num === 0) console.log("Это ноль")
// else if (num < 0) console.log("Это отрицательное число")




/** Example 3 - Вложенные ветвления
 * Напиши скрипт, который сравнивает числа в переменных a и b.
 * Если оба значения больше 100, то выведи в консоль максимальное из них.
 * В противном случае в консоли должна быть сумма значения b и числа 512
 */

//  const a = 120;
//  const b = 180;
// // if ( true && true )
// if (a > 100 && b > 100) {
//     // if (a > b) console.log(a)
//     // else console.log(b)
//     console.log(Math.max(a, b))
// } else {
//     console.log(b + 512)
// }

 /**
 * Example 4 - Форматирование ссылки
 * Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
 * Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.
 */
 
// let link = "https://test.com/users"

// console.log(link.includes('/', link.length - 1))
// console.log(link.lastIndexOf('/'))
// console.log(link.length - 1)
// console.log(link.endsWith('/'))
// (false === false) => true
// !
// if (link.endsWith('/') === false) {
//     link += '/'
// }

// if (!link.endsWith('/')) {
//     link += '/'
// }

// console.log(link)

 /** Example 5 - Форматирование ссылки (тернарный оператор)
 * Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.
 */

// let link = "https://test.com/users"

// link = !link.endsWith('/') ? link + '/' : link
// link = link[link.length - 1] !== '/' ? link + '/' : link

// console.log(link)


 /**
 * Example 6 - Дедлайн сдачи проекта (switch)
 * Выполни рефакторинг кода используя switch.
 */

const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//     console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//     console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//     console.log('Послезавтра');
// } else {
//     console.log('Дата в будущем');
// }

// switch (daysUntilDeadline) {
//     case 0:
//         console.log('Сегодня');
//         break;
//     case 1:
//         console.log('Завтра');
//         break;
//     case 2:
//         console.log('Послезавтра');
//         break;
//     default:
//         console.log('Дата в будущем');
// }

// admin, user, support

// const USER_TYPE = 'asdas'

// switch(USER_TYPE) {
//     case 'admin':
//     case 'support':
//         console.log('admin or support')
//         break;
//     default:
//         console.log('user')
// }


/**
 * Example 7 - Цикл for
 * Вывести к консоль каждый символ из строки
 */
// const str = "Hello World";

// for (let i = 0; i < str.length; i += 1) {
//     console.log(str[i])
// }


/**
 * Example 8 - Цикл for
 * Напишите скрипт который на основе строки "Hello World" 
 * создаст новую строку которая будет содержать исходную строку в виде юникод символов
 */

// const str = "Hello World";
// let res = '';

// for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === ' ') {
//         res += ','
//         continue
//     }
//     res += str[i].charCodeAt()
// }

// console.log(res)
//  "72101108108111 3287111114108100"

/**
 * Example 9 - Цикл for
 * Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.
 */

const max = 100;
const min = 20;

for (let i = min; i <= max; i += 1) {
    if (i % 5 === 0) {
        console.log(i)
    }
}


/**
 * Example 10 - Ввод пользователя и ветвления
 * Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.
 *
 * Если посетитель вводит "Админ", то prompt запрашивает пароль
 * Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
 * В противном случае вывести строку "Я вас не знаю"
 * Пароль проверять так:
 *
 * Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
 * Иначе выводить строку "Неверный пароль"
 */