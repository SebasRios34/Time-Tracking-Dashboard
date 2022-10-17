const dailyBtn = document.querySelector("#daily-button");
const weeklyBtn = document.querySelector("#weekly-button");
const monthlyBtn = document.querySelector("#monthly-button");
const mainContainer = document.querySelector(".main-container");

const displayData = (data) => {
  var str = "";
  data.forEach((value) => {
    const { title, image, timeframes } = value;
    var element = `<div class="time-container ${title
      .replace(/ /g, "")
      .toLowerCase()}-container">`;
    element += `<div class="image-container">`;
    element += `<img class="image-element" src="${image}" alt="${title}" />`;
    element += `</div>`;
    element += `<div class="general-info-container">`;
    element += `<div class="top-section">`;
    element += `<h3>${title}</h3>`;
    element += `<a>...</a>`;
    element += `</div>`;
    element += `<div class="lower-section">`;
    element += `<h1>${timeframes.daily.current} hrs</h1>`;
    element += `<p>Yesterday - ${timeframes.daily.previous} hrs</p>`;
    element += `</div>`;
    element += `</div>`;
    element += `</div>`;
    str += element;
  });

  mainContainer.innerHTML += str;
};

const displayWeeklyData = (data) => {
  var str = "";
  data.forEach((value) => {
    const { title, image, timeframes } = value;
    var element = `<div class="time-container ${title
      .replace(/ /g, "")
      .toLowerCase()}-container">`;
    element += `<div class="image-container">`;
    element += `<img class="image-element" src="${image}" alt="${title}" />`;
    element += `</div>`;
    element += `<div class="general-info-container">`;
    element += `<div class="top-section">`;
    element += `<h3>${title}</h3>`;
    element += `<a>...</a>`;
    element += `</div>`;
    element += `<div class="lower-section">`;
    element += `<h1>${timeframes.weekly.current} hrs</h1>`;
    element += `<p>Last Week - ${timeframes.weekly.previous} hrs</p>`;
    element += `</div>`;
    element += `</div>`;
    element += `</div>`;
    str += element;
  });

  mainContainer.innerHTML += str;
};

const displayMonthlyData = (data) => {
  var str = "";
  data.forEach((value) => {
    const { title, image, timeframes } = value;
    var element = `<div class="time-container ${title
      .replace(/ /g, "")
      .toLowerCase()}-container">`;
    element += `<div class="image-container">`;
    element += `<img class="image-element" src="${image}" alt="${title}" />`;
    element += `</div>`;
    element += `<div class="general-info-container">`;
    element += `<div class="top-section">`;
    element += `<h3>${title}</h3>`;
    element += `<a>...</a>`;
    element += `</div>`;
    element += `<div class="lower-section">`;
    element += `<h1>${timeframes.monthly.current} hrs</h1>`;
    element += `<p>Last Month - ${timeframes.monthly.previous} hrs</p>`;
    element += `</div>`;
    element += `</div>`;
    element += `</div>`;
    str += element;
  });

  mainContainer.innerHTML += str;
};

const clearContent = () => {
  mainContainer.innerHTML = "";
};

displayData(data);

//daily button
dailyBtn.addEventListener("click", () => {
  clearContent();
  displayData(data);
});

//weekly button
weeklyBtn.addEventListener("click", () => {
  clearContent();
  displayWeeklyData(data);
});

//monthly button
monthlyBtn.addEventListener("click", () => {
  clearContent();
  displayMonthlyData(data);
});
