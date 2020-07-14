"use strict";

const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];
const countriesPrices = [100, 200, 300, 400, 500, 600];

let userName;
let userPass;
let userCredits;
let userCountry;
let maxPrice;

userName = prompt("Попробуй вспомнить свое имя");
userPass = prompt("Теперь фамилия.");

const chooseCoutry = (login, pass) => {
  const userNameChecked = prompt("Подтверди свое имя!");
  const userPassChecked = prompt("Уточни еще раз ");
  if (userName === userNameChecked && userPass === userPassChecked) {
    maxPrice = prompt("Введите сумму");
    let countriesList = [];

    for (let i = 0; i < countriesPrices.length; i += 1) {
      if (maxPrice >= countriesPrices[i]) {
        countriesList.push(countries[i]);
      }
    }
    alert(`На ${maxPrice} сумму доступны следующие страны: ${countriesList}`);
    const chooseYourCountries = prompt("Выберите страну из списка");
    userCredits = countriesPrices[countriesList.indexOf(chooseYourCountries)];
    alert(
      `Вы выбрали ${chooseYourCountries}, у вас осталось ${600 - userCredits}.`
    );
  } else {
    alert("Вы ввели не верный логин или пароль!");
  }
};

if (!Number.isNaN(userName) !== null && userPass !== null) {
  chooseCoutry(userName, userPass);
} else {
  alert("Вы отменили ввод!");
}
