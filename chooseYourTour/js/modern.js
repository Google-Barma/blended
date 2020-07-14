"use strict";

const countries = [
  "Украина",
  "Польша",
  "Хорватия",
  "Монтенегро",
  "Франция",
  "Канада",
];

const countriesPrices = [100, 200, 300, 400, 500, 600];

let userName;
let userPass;
let userCredits;
let userCountry;
let maxPrice;

userName = prompt("Введите новый логин");
userPass = prompt("Введите новый пароль");

const checkLogin = (inputName) => {
  return userName.includes(inputName);
};

const checkPass = (inputPass) => {
  return userPass.includes(inputPass);
};

const logIn = () => {
  const inputName = prompt("Введите ваше имя");
  const inputPass = prompt("Введите ваш пароль");
  if (checkLogin(inputName) && checkPass(inputPass)) {
    return checkMoney(maxPrice);
  } else {
    return alert("Не верный логин или пароль");
  }
};

const chooseYourCoutry = (userCountry) => {
  for (let i = 0; i < countries.length; i += 1) {
    if (countries[i] === userCountry) {
      alert(
        `Стоимость поездки в ${countries[i]} cocтавит ${
          countriesPrices[i]
        } кредитов. У вас на счету осталось ${maxPrice - countriesPrices[i]}`
      );
    }
  }
};

const checkMoney = (avaibleMoney) => {
  let selectedCountry = [];
  maxPrice = prompt(
    "Введите сумму на которую вы расчитываете. Минимальная 100"
  );

  if (maxPrice > 100) {
    for (let i = 0; i < countriesPrices.length; i += 1) {
      if (maxPrice >= countriesPrices[i]) {
        selectedCountry.push(countries[i]);
      }
    }
    alert(
      `На вашу сумму можно полететь в следующие страны: ${selectedCountry}`
    );
    userCountry = prompt("Выберите страну");
    chooseYourCoutry(userCountry);
  } else {
    {
      alert("У вас не достаточно средств для перелета");
    }
  }
};

console.log(logIn());
