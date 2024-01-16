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

// Đoản mạch: ||, &&, ?? 
// || sẽ ko nhận những giá trị như undefined, "", null, 0 và đi theo từ trái sang phải để trả ra giá trị thực
// && ngược lại với || sẽ nhận những giá trị không thực
// ?? hoạt động như || nhưng vẫn nhận những giá trị "", 0
console.log(undefined && null);