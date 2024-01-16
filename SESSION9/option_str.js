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

// Chuỗi tùy chọn: ?.
// Dùng để cố đọc một mảng hoặc 1 dối tượng cho dù nó co hay ko nếu ko sẽ ko in ra lỗi mà sẽ chỉ có undefined
if(restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.open);
}
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`${day}, we open at ${open}`);
}