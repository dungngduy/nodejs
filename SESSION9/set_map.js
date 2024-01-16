const restaurant = {
    name: 'Classino Italian',
    location: 'Location',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Orgaric'],
    starterMenu: ['classino', 'italic', 'Normal'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
    openingHours: {
        thur: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        },
    },
    // Ingredient: thành phần
    order: function(starterMenu, mainMenu){
        return [this.starterMenu[starterMenu], this.mainMenu[mainMenu]];
    },

    orderDelivery: function({starterIndex, mainIndex, time, address}){
        return `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} to ${time}`;
    },

    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// Set ko in ra giá trị trùng
// - Chỉ tạo được giá trị
// Map giống set
// - Nhưng có thể tạo được cả key và giá 
// * Các hàm của của set: has(ktra giá trị tồn tại), add, delete, forEach, size
// * Các hàm của của map: has(ktra giá trị tồn tại), get, set, forEach, size
// Phân biệt length với size
// Length: in ra số phần tử trong mảng
// Size: cũng in nhưng ko trùng giá trị
const ordersSet = new Set([
    'Pizza',
    'Pasta',
    'Rissoto',
    'Pizza', 
    'Rissoto',
    'Pasta'
]);
console.log(ordersSet);
console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true: có phần tử Pizza
console.log(ordersSet.has('Bread')); // false

const rest = new Map();
rest.set('name', 'Classino Italian');
console.log(rest);
rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Orgaric'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open!')
.set(false, 'We are close!')

const time = 12;
const result = time > rest.get('open') && time < rest.get('close');
console.log(rest.get(result));

// Chuyển đổi từ object sang map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

const question = new Map([
    ['question', 'What is the best programming language in the world'],
    [1, 'C'],
    [2, 'java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!'],
]);
console.log(question.get('question'));
for (const [key, value] of question) {
    if(typeof key === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}
const answer = Number(prompt('Your answer:'));
const ans = question.get('correct') === answer;
console.log(question.get(ans));