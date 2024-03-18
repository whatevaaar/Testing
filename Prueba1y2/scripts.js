const getRandomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++)
    color += Math.floor(Math.random() * 16).toString(16);
  return color;
};

const changeBackgroundColor = () => {
  const paragraph = document.getElementById("paragraph");
  const color = getRandomColor();
  paragraph.style.backgroundColor = color;
};

//Problema 2
const encontrarNumeroMasGrande = (numeros) => {
  if (numeros.length === 0) return null;
  let numeroMasGrande = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    numeroMasGrande =
      numeros[i] > numeroMasGrande ? numeros[i] : numeroMasGrande;
  }

  return numeroMasGrande;
};
