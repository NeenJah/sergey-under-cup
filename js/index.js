`use strict`;

const wrapperEl = document.querySelector(`.js-wrapper`);

wrapperEl.addEventListener(`click`, () => wrapperEl.classList.toggle(`active`));