const main = document.querySelector(".main");
const colors = [
  "#FBCEB1",
  "#7FFFD4",
  "#AB274F",
  "#293133",
  "#CCCCFF",
  "#BDECB6",
  "#1E5945",
  "#F984E5",
];

function createBoxes(boxCount) {
  main.innerHTML = "";
  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseenter", () => setColor(box));
    main.appendChild(box);
  }
}

function setColor(element) {
  element.style.background = colors[Math.floor(Math.random() * colors.length)];
}

document.querySelector(".btn_size").addEventListener("click", () => {
  let boxCount = prompt("Введите количество квадратов (максимум 100):");
  if (!boxCount || isNaN(boxCount) || boxCount < 1 || boxCount > 100) {
    alert("Пожалуйста, введите число от 1 до 100.");
    return;
  }
  createBoxes(parseInt(boxCount, 10));
});

document.querySelector(".btn_clean").addEventListener("click", () => {
  document
    .querySelectorAll(".box")
    .forEach((box) => (box.style.backgroundColor = "black"));
});

createBoxes(100);
