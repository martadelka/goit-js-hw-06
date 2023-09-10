function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

var spanColor = document.querySelector('.color');

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  spanColor.innerHTML = "#" + randomColor;
}

const btnChange = document.querySelector('.change-color');

btnChange.addEventListener("click", setBg);
setBg();