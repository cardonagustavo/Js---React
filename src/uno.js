
// ==================== Forma tradicional =========================

class text_1 {
  constructor(value) {
    this.value = value;
  }

  capitalize() {
    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase();
    return this;
  }

  removeSpaces() {
    this.value = this.value.replace(/\b\w/g, match => match.toUpperCase());  //  /\s/g, ''  -  /\b\w/g, match => match.toUpperCase()
    return this;
  }

  truncate() {
    this.value = this.value.substring(0, 12);
    return this;
  }

  applyOperations() {
    const elementosText1 = document.querySelectorAll('.text_1');

    elementosText1.forEach(elemento => {
      const instancia = new text_1(elemento.textContent);
      instancia.capitalize().removeSpaces().truncate();

      elemento.textContent = instancia.value;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const instancia = new text_1();
  instancia.applyOperations();
});

//================ Pipe Option 1 ===================================

const nombreUsuario = document.querySelector(".text_2").textContent;

const pipe = (...fns) => (obj) => fns.reduce((value, fn) => fn(value), obj);
const username = pipe(
  (text) => text.toLowerCase().replace(/\b\w/g, match => match.toUpperCase()),
)(nombreUsuario);

document.querySelector("#username").textContent = username;

//================ Pipe Option 2 ===================================

const nombreUsuario2 = document.querySelector(".text_3").textContent;

const pipe2 = (...fns) => (obj) => fns.reduce((value, fn) => fn(value), obj);
const username2 = pipe2(
  (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase().replace(/\s/g, "").slice(0, 4)
)(nombreUsuario2);

document.querySelector("#username2").textContent = username2;

//==========================================0


var switcher = document.querySelector('.slider')

switcher.addEventListener('click', function () {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');

  var className = document.body.className;
  if (className === "light-theme") {
    this.textContent = "";
  } else {
    this.textContent = ""
  }
})

function ponerTituloRojo() {
  document.getElementById("titulo").style = "color: Red"
}


