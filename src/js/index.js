const botao = document.querySelector(".btn-plataform");
const elementoPlataformas = document.querySelector(".btn-plataform .plataforms");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("active");
});