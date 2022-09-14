"use strict";

const bitcoinPrice = document.querySelector("#current--1");
const money = document.querySelector("#current--2");
const btn = document.querySelector("#btn");
const resaltExchaning = document.querySelector("#sum");

const exchange = function () {
  if (bitcoinPrice.value <= 0 || money.value <= 0) {
    return alert("Invalid number");
  }

  resaltExchaning.textContent = `${+money.value / +bitcoinPrice.value} BTC`;
};
btn.addEventListener("click", exchange);
