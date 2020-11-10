"use strict";

const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice; // Write code on this line
let balanceCredit; // Write code on this line
let message;

// Write code under this line

if (orderPieces != null) {
  totalPrice = orderPieces * pricePerDroid; // Write code on this line
  balanceCredit = credits - totalPrice; // Write code on this line

  // Write code under this line

  if (balanceCredit >= 0) {
    message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
  } else {
    message = ACCESS_DENIED;
  }
} else {
  message = CANCELED_BY_USER;
}
console.log(message);
