const girls = document.querySelector(`.buttons__girls`);
const boys = document.querySelector(`.buttons__boys`);
const total = document.querySelector(`.total`);
const past = document.querySelector(`.past`);

let girlsCount = localStorage.getItem(`girlsCount`) || 0;
let boysCount = localStorage.getItem(`boysCount`) || 0;
let totalCount = localStorage.getItem(`totalCount`) || 0;

girls.textContent = localStorage.getItem(`girlsCount`);
boys.textContent = localStorage.getItem(`boysCount`);
total.textContent = localStorage.getItem(`totalCount`);

past.addEventListener(`click`, () => {
  console.log('clicked');
  past.textContent = ``;
  localStorage.setItem(`allData`, []);
});

girls.addEventListener(`click`, () => {
  girlsCount++;
  totalCount++;
  girls.textContent = girlsCount;
  total.textContent = totalCount;
  localStorage.setItem(`girlsCount`, girlsCount);
  localStorage.setItem(`boysCount`, boysCount);
  localStorage.setItem(`totalCount`, totalCount);
});

boys.addEventListener(`click`, () => {
  boysCount++;
  totalCount++;
  boys.textContent = boysCount;
  total.textContent = totalCount;
  localStorage.setItem(`girlsCount`, girlsCount);
  localStorage.setItem(`boysCount`, boysCount);
  localStorage.setItem(`totalCount`, totalCount);
});

const createPastObject = (girlsCount, boysCount, totalCount) => {
  let pastObject = {
    girlsCount,
    boysCount,
    totalCount,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  };
  return pastObject;
};

const addPastObject = () => {
  let pastObject = createPastObject(girlsCount, boysCount, totalCount);
  let currentStorage = localStorage.getItem(`allData`);
  currentStorage = currentStorage ? JSON.parse(currentStorage) : [];
  currentStorage.push(pastObject);
  currentStorage.forEach(
    i =>
      (past.innerHTML += `<div class='list-item'>🙍‍♀️=${i.girlsCount} - 🙍‍♂️=${i.boysCount} - ∑=${i.totalCount} - 🕐=${i.time}-${i.date}</div>`)
  );
  localStorage.setItem(`allData`, JSON.stringify(currentStorage));
};

total.addEventListener(`click`, () => {
  past.textContent = '';
  addPastObject();
  girlsCount = 0;
  boysCount = 0;
  totalCount = 0;
  localStorage.setItem(`girlsCount`, 0);
  localStorage.setItem(`boysCount`, 0);
  localStorage.setItem(`totalCount`, 0);
  girls.textContent = girlsCount;
  boys.textContent = boysCount;
  total.textContent = totalCount;
});
