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
    order: function(starterMenu, mainMenu){
        return [this.starterMenu[starterMenu], this.mainMenu[mainMenu]];
    },

    orderDelivery: function({starterIndex, mainIndex, time, address}){
        return `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} to ${time}`;
    },
};

const orDelivery = restaurant.orderDelivery({
    time: '22:30',
    address: 'HaNoi', 
    mainIndex: 2,
    starterIndex: 2
});
console.log(orDelivery);

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant; // đổi tên đối tượng khởi tạo
console.log(restaurantName, hours, tags);

const {menu = [], categories: cate = []} = restaurant;
console.log(menu, cate); // Ko có đối tượng menu và chỉ ra mảng rỗng

let a = 111;
let b = 99;
const obj = {a: 10, b: 20, c: 30};
// Bắt đầu ghi đè
({a, b} = obj);
console.log(a, b);
// Phá hủy đối tượng = mảng
const {fri: {open, close}} = openingHours;
console.log(open, close);