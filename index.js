const range = document.getElementById("range");
const dollar = document.querySelector(".dollar");
const checkboxInput = document.querySelector(".checkbox-input");
const pageViews = document.querySelector(".pageviews");
const customCheckbox = document.querySelector(".custom-checkbox");
let perMonth = [8, 12, 16, 24, 36];
let view = ["10K", "50K", "100K", "500K", "1M"];
let Yearly = false;

range.addEventListener("input", () => {
  updateValue();
  pageViews.innerHTML = view[range.value];

  let value = range.value * 25;
  range.style.background = `linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${value}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`;
});

checkboxInput.addEventListener("change", () => {
  if (Yearly == false) {
    Yearly = true;
  } else {
    Yearly = false;
  }
  updateValue();
});

function updateValue() {
  if (Yearly) {
    dollar.innerHTML = "$" + perMonth[range.value] * 12 * 0.75 + ".00";
  } else {
    dollar.innerHTML = "$" + perMonth[range.value] + ".00";
  }
}
