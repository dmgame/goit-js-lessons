const cars = [
    { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
    { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
    { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
    { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
    { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
    { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
    { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
  ];

// { 'suv': [{...}, {...}], 'sedan': [...], 'truck': [...] } 

// Task #1
const getModels = cars => cars.map(({ model }) => model)

// console.log(getModels(cars));


// Task #2
const makeCarsWithDiscount = (cars, discount) => {
    return cars.map((car) => {
        const { price } = car
        const newPrice = price - (price * discount)
        
        return {
            ...car,
            price: newPrice
        }
    })
};
// const newCarsArr = makeCarsWithDiscount(cars, 0.2)
// console.log(newCarsArr);

// Task #3
const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold)

// console.log(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 25000));

// Task #4
const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));

// Task #5
const getCarsWithType = (cars, type) => {
    return cars.filter(({ type: carType }) => carType === type)
};

// console.log(getCarsWithType(cars, 'suv'));
// console.log(getCarsWithType(cars, 'sedan'));

// Task #6
const getCarByModel = (cars, model) => {
    return cars.find((car) => car.model === model)
};

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// const carIndex = cars.findIndex((car) => car.model === 'F-150')
// console.log(carIndex)

// Task #7
const sortByAscendingAmount = cars => {
    return [...cars].sort((prev, next) => prev.amount - next.amount)
    // return cars.slice().sort((prev, next) => prev.amount - next.amount)
};

// console.log(sortByAscendingAmount(cars));

// Task #8
const sortByDescendingPrice = cars => {
    return [...cars].sort((prev, next) => next.price - prev.price)
};

// console.log(sortByDescendingPrice(cars));

// Task #9
const sortByModel = (cars, order) => {
    const callbackDic = {
        asc(prev, next) {
            return prev.model.localeCompare(next.model)
        },
        desc(prev, next) {
            return next.model.localeCompare(prev.model)
        }
    }

    return [...cars].sort(callbackDic[order])
};

// console.log(sortByModel(cars, 'asc'));
// console.log(sortByModel(cars, 'desc'));

// Task #10
const getTotalAmount = cars => {
    return cars.reduce((acc, { amount }, i) => acc + amount, 0)
};

// console.log(getTotalAmount(cars));

// Task #11
// { 'CR-V': { ... }, 'Accord': {...} }

const carsObj = cars.reduce((acc, car) => {
    // acc[car.model] = { ...car }
    return { ...acc, [car.model]: { ...car } }
}, {})

// console.log(carsObj)
// console.log(carsObj['Accord'])
// const obj = {}
// 1
// obj['CR-V'] = {}

// Task #12
const getModelsOnSale = cars => {
    return cars.filter(({ onSale }) => onSale)
    .map(({ model }) => model)
};

// console.log(getModelsOnSale(cars));

// Task #13
const getSortedCarsOnSale = cars => {
    return [...cars].filter(({ onSale }) => onSale)
        .sort((prev, next) => prev.price - next.price)
};

// console.log(getSortedCarsOnSale(cars));

// some, every
