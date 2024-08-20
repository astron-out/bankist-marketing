"use strict";

const header = document.querySelector(".header");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalCloseBtn = document.querySelector(".btn--close-modal");
const modalOpenBtn = document.querySelector(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

modalOpenBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Creating element on JS

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookies for better functionality and analitics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function (e) {
    e.preventDefault();
    message.remove();
  });
