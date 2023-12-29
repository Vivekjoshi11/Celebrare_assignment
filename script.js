const textArea = document.getElementById("text-area");
const fontFamilySelect = document.getElementById("font-family");
const fontColorInput = document.getElementById("font-color");

fontFamilySelect.addEventListener("change", (event) => {
  textArea.style.fontFamily = event.target.value;
});

fontColorInput.addEventListener("change", (event) => {
  textArea.style.color = event.target.value;
});
