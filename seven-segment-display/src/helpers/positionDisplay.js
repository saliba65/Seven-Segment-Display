/*
  O display pode variar de 1 a 3 digitos, consequentemente ela afeta o seu posicionamento na div em q esta localizado
  Esta funcao faz o alinhamento do display com suas variacoes, mantendo-o alinhando com as mensagens e botoes no restante da tela
*/

export const positionDisplay = (digitCount) => {
  var centerDisplay = 0;

  if (digitCount === 1) {
    centerDisplay = -12.5;
  } else if (digitCount === 2) {
    centerDisplay = -7;
  } else {
    centerDisplay = -1;
  }
  return centerDisplay;
};
