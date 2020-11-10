"use strict";
const invoice = 1550;
const stock = 100;

// Write code under this line
const message =
  invoice <= 100
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно товаров!";

console.log(message);
