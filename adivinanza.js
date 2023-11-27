const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado == numeroSecreto) { // Corrección, "===" a "==" solo hay que verificar valor, no el tipo.
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
  } else {
    console.log("El número secreto es mayor. ¡Sigue intentando!");
  }
};

module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};
