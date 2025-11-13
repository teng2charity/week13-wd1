const body = document.body;
const modeButton = document.getElementById("light");
const imageButton = document.getElementById("day");
const img = document.getElementById("pics");

modeButton.addEventListener("click", () => {
body.classList.toggle("light");
});

  let toggled = false;
  imageButton.addEventListener("click", () => {
    if (toggled) {
      img.src = "./assets/book1.jpg";
      toggled = false;
    } else {
      img.src = "./assets/book2.jpg"; 
      toggled = true;
    }
  });