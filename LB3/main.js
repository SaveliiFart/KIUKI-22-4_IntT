let dom = {
    slider: document.getElementById("slider"),
    background: document.getElementById("background"),
    bg_morning: document.getElementById("bg_morning"),
    bg_day: document.getElementById("bg_day"),
    bg_evening: document.getElementById("bg_evening"),
    bg_night: document.getElementById("bg_night"),
    slides: Array.from(slider.querySelectorAll("img")),
    min: parseInt(document.getElementById("min").value),
    max: parseInt(document.getElementById("max").value),
};

let date = new Date();
let time = date.getHours();

function updateBackground() {
    dom.bg_morning.classList.remove("active");
    dom.bg_day.classList.remove("active");
    dom.bg_evening.classList.remove("active");
    dom.bg_night.classList.remove("active");
};

if (time >= 6 && time < 12) {
    updateBackground()
    dom.bg_morning.classList.add("active");
} else if (time >= 12 && time < 16) {
    updateBackground()
    dom.bg_day.classList.add("active");
} else if (time >= 16 && time < 20) {
    updateBackground()
    dom.bg_evening.classList.add("active");
} else if (time >= 20 || time < 6) {
    updateBackground()
    dom.bg_night.classList.add("active");
}

let x = prompt("Enter the time in milliseconds for the slides to change");

const slidesCount = dom.slides.length;

let currentSlide = 0;

function nextSlide() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slidesCount;
    updateSlider()
  }, x);
}
function updateSlider() {
  dom.slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

updateSlider()
nextSlide()


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateTable() {
    let tableContainer = document.getElementById("table__container");
    tableContainer.innerHTML = "";
    const table = document.createElement("table");

    for (let i = 0; i < 10; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("td");
            cell.textContent = getRandomInt(dom.min, dom.max);

            if((i + j) % 2 === 0) {
                cell.classList.add("white");
            } else {
                cell.classList.add("black");
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}

