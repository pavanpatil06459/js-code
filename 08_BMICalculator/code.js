const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Reset styles
  results.style.color = "black";
  results.style.background = "transparent";
  results.style.padding = "0";

  if (isNaN(height) || height <= 0) {
    results.textContent = "Please give a valid height";
    results.style.color = "red";
    results.style.padding = "8px";
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.textContent = "Please give a valid weight";
    results.style.color = "red";
    results.style.padding = "8px";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  let category;
  let color;

  if (bmi < 18.6) {
    category = "Underweight";
    color = "orange";
  } else if (bmi <= 24.9) {
    category = "Normal Range";
    color = "green";
  } else {
    category = "Overweight";
    color = "red";
  }

  results.textContent = `BMI: ${bmi} (${category})`;
  results.style.color = color;
  results.style.fontWeight = "bold";
  results.style.marginTop = "10px";
});