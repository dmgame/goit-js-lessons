console.log('Hello world!')

/**
 * 
Занятие 1:
- Основы синтаксиса: выражения, инструкции и точка с запятой
- Переменные: объявление let/const, имена переменных
- Типы примитивов.
- Вывод данных: console.log, alert
- Получение данных от пользователя: prompt и confirm
- Числа. Основные операторы.
- Встроенные объекты Math и Number
- Строки. Конкатенация и шаблонные строки. Методы строк.
- Логические операторы: &&, ||, !
 */


// Tasks
/**
 * Example 1 - Базовые математические операторы
 * Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.
 *
 */

const apple = 100;
const grapes = 50;

const total = apple + grapes;

// console.log(total);

const diff = apple - grapes;

// console.log(diff)








/**
 * Example 2 - Комбинированные операторы
 * Замени выражение переопределения комбинированным оператором.
 */

let students = 132;
students = students + 10;
students += 10 // *= -= /= += ++

// console.log(students);


/**
 * Example 3 - Приоритет операторов
 * Разбери приоритет операторов в инструкции присвоения значения переменной result.
 */

const result = 100 + 223 - 2 * 5;
// console.log(result);


/**
 * Example 4 - Класс Math
 * Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value.
 * Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.
 */

const value = 25.5;
// console.log(Math.floor(value))
// console.log(Math.ceil(value))
// console.log(Math.round(value))

/**
 * Example 5 - Шаблонные строки
 * Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.
 */

 const companyName = 'Cyberdyne Systems';
 const repairBots = 150;
 const defenceBots = 50;
 const sum = repairBots + defenceBots;
// Cyberdyne Systems has 200 bots in stock
const str = companyName + " " + "has" + " " + sum + " " + "bots in stock"

const str2 = `${companyName} has ${sum} bots in stock`
// console.log(str2)
// "" ''


/**
 * Example 6 - Методы строк и чейнинг
 * Напиши скрипт который рассчитывает индекс массы тела человека.
 * Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
 *
 * Вес и высота хранятся в переменных weight и height,
 * но не как числа, а в виде строк (специально для задачи).
 * Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
 *
 * Индекс массиы тела необходимо округлить до одной цифры после запятой;
 */

const weight = '88,7';
const height = '1.75';

// indexOf
// const weightCom = weight.indexOf(',');
// const weightFirstPart = weight.slice(0, weightCom);
// const weightLastPart = weight.slice(weightCom + 1);
// console.log(`${weightFirstPart}.${weightLastPart}`);

// replace, replaceAll
const fixedWeight = weight.replace(',', '.')
const fixedHeight = height.replace(',', '.')

const weightNum = Number(fixedWeight)
const heightNum = Number(fixedHeight)

// console.log(weightNum)
// console.log(heightNum)

const bmi = (weightNum / Math.pow(heightNum, 2)).toFixed(2)

// console.log(bmi)

/**
 * Example 7 - Операторы сравнения и приведение типов
 * Каким будет результат выражений?
 */

// console.log(5 > 4);
// console.log(10 >= '7');
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');
// console.log(undefined == null); 
// console.log(undefined === null);


/**
 * Example 8 - Логические операторы
 * Каким будет результат выражений?
 */

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(0 || '' || false);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0); // null > 0
// (2 && 3) => 3
// console.log(null || (2 && 3) || 4);

/**
 * Example 9 - Значение по умолчанию и оператор нулевого слияния
 * Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue,
 * если оно не равно undefined или null. В противном случае должно присваиваться значение defaultValue.
 * Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false.
 * Используй оператор ?? (nullish coalescing operator).
 */

//  const incomingValue = 5;
//  const defaultValue = 10;
//  const value = incomingValue || defaultValue;
//  console.log(value);

/**
 * Example 10 - Опертор % и методы строк
 * Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.
 *
 * 70 покажет 01:10
 * 450 покажет 07:30
 * 1441 покажет 24:01
 */