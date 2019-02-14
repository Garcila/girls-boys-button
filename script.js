const girls = document.querySelector(`.buttons__girls`);
const boys = document.querySelector(`.buttons__boys`);
const total = document.querySelector(`.total`);

let girlsCount = window.localStorage.getItem(`girlsCount`) || 0;
let boysCount = window.localStorage.getItem(`boysCount`) || 0;
let totalCount = window.localStorage.getItem(`totalCount`) || 0;

girls.textContent = window.localStorage.getItem(`girlsCount`);
boys.textContent = window.localStorage.getItem(`boysCount`);
total.textContent = window.localStorage.getItem(`totalCount`);

girls.addEventListener(`click`, ()=>{
  girlsCount++;
  totalCount++;
  girls.textContent = girlsCount;
  total.textContent = totalCount;
  window.localStorage.setItem(`girlsCount`,girlsCount);
  window.localStorage.setItem(`boysCount`,boysCount);
  window.localStorage.setItem(`totalCount`,totalCount);
});

boys.addEventListener(`click`, ()=>{
  boysCount++;
  totalCount++;
  boys.textContent = boysCount;
  total.textContent = totalCount;
  window.localStorage.setItem(`girlsCount`,girlsCount);
  window.localStorage.setItem(`boysCount`,boysCount);
  window.localStorage.setItem(`totalCount`,totalCount);
});

total.addEventListener(`click`, () => {
  girlsCount =0;
  boysCount = 0;
  totalCount = 0;
  window.localStorage.setItem(`girlsCount`,0);
  window.localStorage.setItem(`boysCount`,0);
  window.localStorage.setItem(`totalCount`,0);
  girls.textContent = girlsCount;
  boys.textContent = boysCount;
  total.textContent = totalCount;
});

