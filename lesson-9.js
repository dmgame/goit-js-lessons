// * This

// function foo() {
//     console.log(this)
// }

// foo()

// const obj = {
//     name: 'Denis',
//     info: {
//         some: 'info',
//         foo
//     }
// }


// const obj2 = {
//     method: obj.info.foo
// }

// obj.info.foo()
// obj2.method()

// info.foo()


// const foo = () => console.log(this)

// foo()


// const obj3 = {
//     info: {
//         foo() {
//             const arrow = () => console.log(this)
//             arrow()
//         }
//     }
// }

// obj3.info.foo()




/**
 * TODO Example #1
 * Создать объект, который описывает ширину и высоту
 * прямоугольника, а также может посчитать площадь фигуры:
 * const rectangle = {width:..., height:..., getSquare:...};
 */

const rectangle = {
    width: 10,
    height: 10,
    getSquare() {
        return this.width * this.height
    }
}

// const square = rectangle.getSquare()
// console.log(square)

/**
 * TODO Example #2
 * Создать объект, у которого будет цена товара и его скидка, а также
 * два метода: для получения цены и для расчета цены с учетом скидки:
 */

const price = {
    price: 100,    
    discount: '35%',
    getPrice() {
        return this.price
    },
    parseDiscount() {
        return parseInt(this.discount) / 100
    },
    getPriceWithDiscount() {
        const discount = this.parseDiscount()
        return this.price - (this.price * discount)
    }
};

// const priceWithDiscount = price.getPriceWithDiscount()
// console.log(priceWithDiscount)

/**
 * TODO Example #3
 * Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. 
 * Метод должен возвращать новую высоту:
 * object.height = 10;
 * object.inc();
 * object.height; // 11;
 */

const obj = {
    height: 10,
    setHeight(value = 0) {
        this.height = value
        return this.height
    }
}

// obj.setHeight(111)
// console.log(obj)

const test = {
    number: 10,
    calc(func) {
        func()
    }
}

const obj5 = {
    obj: 5,
    testFunc() {
        console.log('testFunc', this)
    }
}

// function testFunc() {
//     console.log(this)
// }

// test.calc(obj5.testFunc)



/**
 * TODO Example #4
 * Создать объект “вычислитель”, у которого есть числовое свойство
 * “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
 * Методы можно вызывать через точку, образуя цепочку методов:
 */

const calc = {
    value: 1,
    plus(num) {
        this.value += num
        return this
    },
    minus(num) {
        this.value -= num
        return this
    },
    multiply(num) {
        this.value *= num
        return this
    },
    getValue() {
        return this.value
    }
}

// calc.value -= 1
// calc.plus(10)
// calc.plus(10).minus(5).multiply(2)
// calc.plus(10) => undefined.minus(5)
// calc.plus(10) => 11.minus(5)
// console.log(calc.plus(10))

// undefined
// calc.plus(10).minus(5).multiply(2)

// const res = calc.plus(1) // 2
//     .minus(2) // 0
//     .plus(100) // 100
//     .multiply(100)
//     .getValue()

// console.log(res)



/**
 * TODO Example #5
 * Даны объект и функция:

let sizes = {width: 5, height: 10},
function getSquare() {return this.width * this.height};

 * Не изменяя функцию или объект, 
получить результат функции getSquare для объекта sizes
 */

let sizes = {width: 5, height: 10}
function getSquare() {return this.width * this.height}
function changeWidth(num) {return this.width += num}

// console.log(getSquare.apply(sizes))

// const newWidth = changeWidth.apply(sizes, [10]) 
// console.log(newWidth)

/**
 * TODO Example #6
 * Измените функцию getElementHeight таким образом,
 * чтобы можно было вызвать getElementHeight() и получить 25.
 */

let element = {
    name: 'element',
    height: 25,
    getHeight() {
        console.log(this)
        return this.height
    }    
};

let element2 = {
    name: 'element2',
    height: 25
};
     
let getElementHeight = element.getHeight.bind(element);
// getElementHeight()

let getElementHeight2 = element.getHeight.bind(element2);
// console.log(getElementHeight.call(sizes)); // undefined

// getElementHeight2()

let getElementHeight3 = getElementHeight.bind(element2);
// console.log('getElementHeight3')
// getElementHeight3()

// getElementHeight.call(sizes)

// let element2 = {
//     height: 25,
//     deep: {
//         getHeight() {
//             console.log(this)
//             return this.height
//         }    
//     }
// };

// element2.deep.getHeight()

// const bindedFunc = element2.deep.getHeight.bind(element2)

// bindedFunc()


// function restSpred(a, b) {
//     console.log(args)
// }

// const nums = [1, 2]

// restSpred(...nums)


// ! Reduce

// [].reduce((acc, item, index, arr) => {}, 0)

function reduce(arr, cb, startValue) {
    const [firstArrayElement] = arr
    let acc = startValue ?? firstArrayElement

    for (let i = 0; i < arr.length; i += 1) {
        const cbRes = cb(acc, arr[i], i, arr)
        acc = cbRes
    }

    return acc
}


const numbers = [2, 3, 4]

const reduceRes = reduce(numbers, (acc, item, i, arr) => {
    console.log('acc', acc, 'item', item, 'i', i)
    return acc + item
}, 0)

// console.log(reduceRes)

class Car {
    constructor({ brand, name }) {

    }
}

const car = new Car({ brand: 'asdas', name: 'asdsa' })