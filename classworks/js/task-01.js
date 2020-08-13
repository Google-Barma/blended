'use strict';

// -----------------------------------------------------------------
//Создание обьекта
// const obj = {};
// console.log(obj);

// const obj2 = new Object();
// console.log(obj2);

// const obj3 = Object.create({});
// console.log(obj3);

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// Копирование обьекта
// const obj = { name: "Andrew", age: 29 };
// const obj2 = obj;
// obj2.name = "James Bond";

// console.log(obj.name); // ?
// console.log(obj2.name); // ?

// const obj = { name: "Andrew", age: 29 };
// const obj2 = {};

// for (let key in obj) {
//   obj2[key] = obj[key];
// }

// obj2.name = "James Bond";

// console.log(obj.name); // ?
// console.log(obj2.name); // ?

// const obj = { name: "Andrew", age: 29 };
// const obj2 = { ...obj, name: "James Bond" };

// console.log(obj.name); // ?
// console.log(obj2.name); // ?

// const obj = {
//   name: 'Andrew',
//   age: 29,
//   favoriteBrands: ['Nissan', 'Apple', 'Sony'],
// };
// const obj2 = JSON.parse(JSON.stringify(obj));
// obj2.name = 'James Bond';
// console.log(obj);

// console.log(obj.name); // ?
// console.log(obj2.name); // ?

// const obj = { name: 'Andrew', age: 29 };
// console.log(obj);
// const obj2 = Object.assign({}, obj);
// obj2.name = 'James Bond';
// console.log(obj2);

// console.log(obj.name); // ?
// console.log(obj2.name); // ?

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// Проверка свойств Обьекта
const person = {
  name: 'Andrew',
  age: 29,
};

console.log('name' in person);

person.name = null;

console.log('name' in person);
console.log(person);

console.log(person.hasOwnProperty('name') && !!person.name);

// ------
console.log('toString' in person);
console.log(person.__proto__.toString);
console.log(person);

// const obj = Object.create(null);
// obj.name = "Andrew";
// obj.age = 29;

// console.log("toString" in obj);
// console.log(obj);

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// Что такое чистая функция?
// let a = 1;

// const foo = (b) => a + b;
// const foo = (a, b) => a + b;

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// Что такое функция высшего порядка?

// const foo = (callback) => {
//   callback();
// };

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// Замыкание

// const foo = (a) => (b) => (c) => a + b + c;
// console.log(foo(1)(1)(1));

//--------------------
// const foo = (a) => (b) => a + b;
// const c = foo(1);

// const d = (a) => {
//   return c(10) + a;
// };

// console.log(d(10)); //?

//--------------------
// const b = 1000;

// const foo = (a) => () => a + b;
// const c = foo(11);

// const d = (b) => {
//   return c(10) + b;
// };

// console.log(d(100)); //?

//--------------------
// const makeCounter = () => {
//   let count = 0;

//   return () => count++;
// };

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); // ?
// console.log(counter2()); // ?

//-------------------------------

// var myname = "global";
// function func() {
//   console.log(myname);

//   var myname = "local";
//   console.log(myname);
// }
// func();

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// Разница между call aplly bind?
// -----------------------------------------------------------------

// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// inventory
// bind
// call

// -----------------------------------------------------------------
// -----------------------------------------------------------------

// const restaurants = [
//   {
//     order: [],
//     brand: "KFC",
//     menu: {
//       chicken: 50,
//       burger: 50,
//     },
//     deliveryTime: 60,
//   },
//   {
//     order: [],
//     brand: "mcDonalds",
//     menu: {
//       cola: 25,
//       burger: 30,
//     },
//     deliveryTime: 30,
//   },
//   {
//     order: [],
//     brand: "Burger King",
//     menu: {
//       burgerXXL: 170,
//       burger: 70,
//     },
//     deliveryTime: 20,
//   },
// ];

// const services = {
//   showMenu() {},
//   getMenu() {},
//   addOrder() {},
//   confirmOrder() {},
// };

// const torpedaDelivery = {
//   order: [],
//   chosenRestaurant: "",
//   getAvailableRestaurants() {},
//   chooseRestaurant() {},
//   chooseDishes() {},
// };

// torpedaDelivery.chooseRestaurant();
//----------------------------------------------------------------------------------------------------

// const restaurants = [
//   {
//     order: [],
//     brand: "KFC",
//     menu: {
//       chicken: 50,
//       burger: 50,
//     },
//     deliveryTime: 60,
//   },
//   {
//     order: [],
//     brand: "mcDonalds",
//     menu: {
//       cola: 25,
//       burger: 30,
//     },
//     deliveryTime: 30,
//   },
//   {
//     order: [],
//     brand: "Burger King",
//     menu: {
//       burgerXXL: 170,
//       burger: 70,
//     },
//     deliveryTime: 20,
//   },
// ];

// const services = {
//   showMenu() {
//     for (let key in this.menu) {
//       console.log(`${key} cтоимость ${this.menu[key]}`);
//     }
//   },
//   getMenu() {
//     return restaurants.find((el) => el.brand === this.chosenRestaurant).menu;
//   },
//   addOrder(order) {
//     this.order.push(order);
//   },
//   confirmOrder() {
//     const deliveryTime = restaurants.find((el) => el.brand === this.chosenRestaurant).deliveryTime;

//     alert(`Вы заказали ${this.order.join("")}. Ожидайте доставку в течении ${deliveryTime} минут`);
//   },
// };

// const torpedaDelivery = {
//   order: [],
//   chosenRestaurant: "",
//   getAvailableRestaurants() {
//     return restaurants.map((el) => el.brand);
//   },

//   chooseRestaurant() {
//     const availableRestaurants = this.getAvailableRestaurants();
//     const restaurant = prompt(`Приветствуем! Выбирите ресторан! Доступные рестораны - ${availableRestaurants.join(" , ")}`);

//     if (availableRestaurants.includes(restaurant)) {
//       this.chosenRestaurant = restaurant;

//       const restaurantEntity = restaurants.find((el) => el.brand === restaurant);
//       services.showMenu.call(restaurantEntity);

//       this.chooseDishes();
//     } else {
//       alert("Нет такого ресторана =(");
//     }
//   },
//   chooseDishes() {
//     const dish = prompt(`Выбирите блюдо!`);
//     const menu = services.getMenu.call(this);

//     if (menu.hasOwnProperty(dish)) {
//       services.addOrder.call(this, dish);
//       services.confirmOrder.call(this);
//     } else {
//       alert("Нет такого блюда");
//     }
//   },
// };

// torpedaDelivery.chooseRestaurant();
