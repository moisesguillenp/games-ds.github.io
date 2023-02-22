function cambioColor(){
    let temas = document.getElementById("body");
    temas.classList.toggle("bodyoscuro")
}

let dropdownBtn = document.querySelector(".dropdown-btn");
let dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

window.addEventListener("click", function(event) {
  if (!event.target.matches(".dropdown-btn")) {
    let dropdowns = document.querySelectorAll(".dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});
const btnAbrir = document.getElementById('btn-panel');
const btnCerrar = document.getElementById('btn-cerrar');
const panel = document.getElementById('panel');

btnAbrir.addEventListener('click', () => {
  panel.style.display = 'block';
});

btnCerrar.addEventListener('click', () => {
  panel.style.display = 'none';
});
