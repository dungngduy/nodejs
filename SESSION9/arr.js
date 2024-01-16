const restaurant = {
    name: 'Classino Italian',
    location: 'Location',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Orgaric'],
    starterMenu: ['classino', 'italic', 'normal'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
    order: function(starterMenu, mainMenu){
        return [this.starterMenu[starterMenu], this.mainMenu[mainMenu]];
    }
};

// Hủy mảng 
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
let [first, , second] = restaurant.categories; // , ,để output bỏ qua phần tử thứ 1 và cho ra phần tử thứ 2 trong mảng
console.log(first, second);

// Thay thế vị trí trong mảng
// Cách 1
// const temp = first;
// first = second;
// second = temp;
// Cách 2
// [first, second] = [second, first];
// console.log(first, second);

// console.log(restaurant.order(2, 0)); // Hàm order lấy giá trị 2 của mảng starterMenu vaf giá trị 0 của mainMenu
const [starter, mainCource] = restaurant.order(2, 0);
console.log(starter, mainCource);

// Mảng trong mảng
// const nested = [2, 3, [4, 5]];
// // Hủy mảng
// const [ , , [i, j]] = nested;
// console.log(i ,j);

const [p, q, r = 1] = [8, 9]
console.log(p, q, r);