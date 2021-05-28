const palabras = ["café", "croissant", "tostada", "zumo"];

const palabrasParesModificadas = (elemento) =>
  elemento.charAt(0).toUpperCase() + elemento.slice(1);

function modificaPares(arrayPalabras, callback) {
  const palabrasModificadas = [];
  for (const i in arrayPalabras) {
    if (i % 2 !== 0) {
      palabrasModificadas.push(callback(arrayPalabras[i]));
    } else palabrasModificadas.push(arrayPalabras[i]);
  }
  console.log(palabrasModificadas);
  return palabrasModificadas;
}

modificaPares(palabras, palabrasParesModificadas);
