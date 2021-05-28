const palabras = ["café", "croissant", "tostada", "zumo"];

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

modificaPares(
  palabras,
  (palabra) => palabra[0].charAt(0).toUpperCase() + palabra.slice(1)
);
