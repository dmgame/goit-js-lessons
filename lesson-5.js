/**
 * Example 1 - Основы обьектов
 * Напиши скрипт, который, для объекта user, последовательно:
 * добавляет поле mood со значением 'happy'
 * заменяет значение hobby на 'skydiving'
 * заменяет значение premium на false
 * выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
 */

// const key = prompt('Please type a object key')

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    'Denis Mescheryakov': 'Hello'
};

user.mood = 'happy';
user['hobby'] = 'skydiving';
user.premium = false;

// const keys = Object.keys(user)
// console.log(keys)

// for (let key of keys) {
//     console.log(user[key])
// }

// for (let key in user) {
//     console.log(user[key])
// }

// console.log(user[key])

/**
 * Example 2 - метод Object.values()
 * У нас есть объект, в котором хранятся зарплаты нашей команды. 
 * Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. 
 * Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
 */

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const values = Object.values(salaries)
// console.log(values)
let sum = 0

for (let val of values) {
    sum += val
}

// console.log(sum)

/**
 * Example 3 - Массив объектов
 * Напишите ф-цию calcTotalPrice(stones, stoneName), 
 * которая принимает массив обьектов и строку с названием камня. 
 * Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
 */
const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName = '') {
    if (Array.isArray(stones) === false) return 'Error'
    if (stoneName.length === 0) return 'Error'

    let total = 0

    for (let stone of stones) {
        if (stone.name === stoneName) {
            total = stone.price * stone.quantity
            break
        }
    }

    // console.log(total)
    return total
}

const stoneTotalPrice = calcTotalPrice(stones, 'Изумруд')
// console.log(stoneTotalPrice)

/**
 * Example 4
 * Реализуйте функцию `compare(firstNumber, secondNumber, operation, result)`, которая
 * - производит операцию `operation` над числами `firstNumber` и `secondNumber`
 * полученное число сравнивает с переменной `result`
 * возвращает результат этого сравнения.
 * 
 * compare("1", "2", "+", "3"); // true
 * 
 * Ограничения на входные данные
 * `firstNumber`, `secondNumber`, `result` - могут быть как типа Number так и String. 
 * Переменные типа String при преобразовании к числовому формату всегда будут валидным числом.
 * `operation` - строка c одной из 4 математических операций: +,-,*,/
 */

// const STATUSES = {
//     1: 'Success',
//     0: 'Error'
// }

function compare(firstNumber = 0, secondNumber = 0, operation = '+', result = 0) {
    const num1 = Number(firstNumber)
    const num2 = Number(secondNumber)
    const res = Number(result)

    const operationsDic = {
        '+': function(a, b) { return a + b },
        '-': function(a, b) { return a - b },
        '*': function(a, b) { return a * b },
        '/': function(a, b) { return a / b }
    }

    
    if ((operation in operationsDic) === false) return 'Error'
    if (isNaN(num1) || isNaN(num2) || isNaN(res)) return 'Error'

    const operationResult = operationsDic[operation](num1, num2)

    return operationResult === res
    // 4 === 4
}

const res = compare("2", "2", "*", "4")
console.log(res)

/**
 * Example 5 - Комплексные задачи
 * Напиши скрипт управления личным кабинетом интернет банка. 
 * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {},
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {},
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {},
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {},
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {},
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {},
  };


/**
 * Example 6
 * Реализуйте функцию twoSum. 
 * На вход передаем массив с числами первым аргументом и искомое число вторым.
 * Функция должна вернуть массив из 2-х индексов чисел при сложении которых сумма будет равна искомому числу (второму аргументу). 
 * 
 * console.log(twoSum([2, 4, 1, 5, 7], 8)); // [2, 4]
 * console.log(twoSum([2, 4, 1, 5, 7], 3)); // [0, 2]
 */