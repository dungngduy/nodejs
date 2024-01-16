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

restaurant.orderPizza('Mushrooms', 'Onion', 'olives');

// Toán tử spread(mở rộng)
// Sử dụng để lấy phần tử mảng một cách nhanh chóng
// Có thẻ sử dụng cho mảng, chuỗi, map, set, nhưng không dùng được trong đối tượng
// Ký hiệu: ...
const arr = [1, 2, 3];
const badNewArr = [arr[0], arr[1], arr[2], 4, 5];
const newArr = [...arr, 4, 5];
console.log(newArr);

// Một cách khác: ...other
const [pizza, , rissoto, ...other] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, rissoto, other);

const add = function(...numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum);
}
// add(2, 3);
// add(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
// Đều ra mảng
const x = [23, 5, 8];
add(...x);