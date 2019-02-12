const girls = document.querySelector(`.buttons__girls`);
const boys = document.querySelector(`.buttons__boys`);
const total = document.querySelector(`.total`);
let girlsCount = 0;
let boysCount = 0;
let totalCount = 0;

girls.addEventListener(`click`, ()=>{
  girlsCount++;
  totalCount++;
  girls.textContent = girlsCount;
  total.textContent = totalCount;
});

boys.addEventListener(`click`, ()=>{
  boysCount++;
  totalCount++;
  boys.textContent = boysCount;
  total.textContent = totalCount;
});

