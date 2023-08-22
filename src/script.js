const estrela = "estrela";
const items = [
  "Ombros", "Cicatrizes", "Risada", "Olhos", "Amigos",
  "Braços", "Peso", "Estômago", "Peitos", "Mãos",
  "Pescoço", "Pernas", estrela, "Rosto", "Altura",
  "Acadêmico", "Quadris", "Pés", "Orelha", "Cabelo",
  "Tamanho", "Voz", "Nariz", "Família", "Boca"
];

const colors = ["", "green", "yellow", "red"];

const bingoContainer = document.querySelector(".bingo");

for (let i = 0; i < 25; i++) {
  const square = document.createElement("div");
  square.className = "square";
  square.textContent = items[i];
  if (items[i] === "estrela") {
    square.innerHTML = "&#9733;";
    square.classList.add("star");
  }
  bingoContainer.appendChild(square);

  let colorIndex = 0;
  square.addEventListener("click", () => {
    colorIndex = (colorIndex + 1) % colors.length;
    square.style.backgroundColor = colors[colorIndex];
  });
}

