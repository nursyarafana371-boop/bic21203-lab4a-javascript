const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  // Emptying the original list so it doesn't repeat when clicked multiple times
  numberList.textContent = "";

  // Loop for from 1 to 5
  for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "The number is " + i;
    numberList.appendChild(listItem);
  }
}

generateBtn.addEventListener("click", generateNumbers);
