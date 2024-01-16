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

// for-of: 
// Cú pháp: for(let item of items)
// Note: arr.entries là một hàm để về cặp khóa-giá trị trong 1 mảng bất kỳ
// const arr = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for(let item of arr.entries()){
//     // console.log(item); // sẽ thấy khi log thì trong item dường như có 2 giá trị
//     // Cách làm đẹp hơn
//     console.log(`${item[0] + 1}: ${item[1]}`);
// }

// Object.key()
const properties = Object.keys(restaurant.openingHours);
let open = `We are open on ${properties.length} days: `;
for (const day of properties) {
    // Lấy keys trong object openingHours
    open += ` ${day}, `;
}
console.log(open);

// Values
const values = Object.values(restaurant.openingHours);

// Entries
const entries = Object.entries(restaurant.openingHours);
for (const [key, {open, close}] of entries) {
    console.log(`On ${key} we are open at ${open} and closed at ${close}`);
}