/**
 * Question - 1
 * Що буде в console та чому?
 */

console.log(x);
var x = 10;


/**
 * Question - 2
 * Чому результатом виклику arr[0]() або arr[2]() чи будь якого іншого індексу массива завжди повертає одну і туж саму цифру?
 * Як це виправити?
 */

const arr = []

for(var i = 0; i <= 5; i += 1) {
    arr.push(function() { console.log(i) })
}

console.log(arr[0]()) // => 6
console.log(arr[2]()) // => 6



/**
 * Question - 3
 * Проверить как изменится объект obj и объяснить почему
 */

const obj = {};

(function(x) {
  x.b = 1;
  x = null;
})(obj);

console.log(obj)
