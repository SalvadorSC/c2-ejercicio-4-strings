const palabras = ["café", "croissant", "tostada", "zumo"];
/* let palabrasParesModificadas = modificaPares(
  palabras,
  (elemento) => elemento.charAt(0).toUpperCase() + elemento.slice(1)
); */
function modificaPares(
  arrayPalabras,
  modificaPares = (palabras,
  (elemento) => elemento[0].toUpperCase() + elemento.slice(1))
) {
  const palabrasModificadas = [];

  for (i in arrayPalabras) {
    i % 2 !== 0
      ? palabrasModificadas.push(
          modificaPares(
            arrayPalabras[i],
            (palabra) =>
              palabra[0].charAt(0).toUpperCase() + palabra[i].slice(1)
          )
        )
      : palabrasModificadas.push(arrayPalabras[i]);
  }
  console.log(palabrasModificadas);
  return palabrasModificadas;
}

modificaPares(palabras);
