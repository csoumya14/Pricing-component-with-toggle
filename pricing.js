const toggleBtn = document.querySelector('.md_switch__toggle');
const prices = document.querySelectorAll('.price-value');

let monthlyPrices = [19.99, 24.99, 39.99];
let annualPrices = [119.9, 249.99, 399.99];

const ToggleValue = () => {
  toggleBtn.classList.toggle('toggle-annual-price');
  if (toggleBtn.classList.contains('toggle-annual-price')) {
    prices.forEach((price, index) => {
      price.textContent = annualPrices[index];
    });
  } else {
    prices.forEach((price, index) => {
      price.textContent = monthlyPrices[index];
    });
  }
};

toggleBtn.addEventListener('click', ToggleValue);
