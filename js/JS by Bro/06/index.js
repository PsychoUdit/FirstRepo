//Counter Program
const inButton = document.getElementById("+Button");
const reButton = document.getElementById("resetButton");
const deButton = document.getElementById("-Button");
const countLabel = document.getElementById("countLabel");
let count = 0;

inButton.addEventListener("click", () => {
  count++;
  countLabel.textContent = count;
}
);
deButton.addEventListener("click", () => {
  count--;
  countLabel.textContent = count;
} 
);
reButton.addEventListener("click", () => {
  count = 0;
  countLabel.textContent = count;
}
);
