/* 
  Divisao padrao do led de 7 segmentos em pedacos
  Cada letra representa uma parte do display, indicando seus respectivos posicionamentos
*/

export const segments = {
  a: [
    [1, 1],
    [2, 0],
    [8, 0],
    [9, 1],
    [8, 2],
    [2, 2],
  ],
  b: [
    [9, 1],
    [10, 2],
    [10, 8],
    [9, 9],
    [8, 8],
    [8, 2],
  ],
  c: [
    [9, 9],
    [10, 10],
    [10, 16],
    [9, 17],
    [8, 16],
    [8, 10],
  ],
  d: [
    [9, 17],
    [8, 18],
    [2, 18],
    [1, 17],
    [2, 16],
    [8, 16],
  ],
  e: [
    [1, 17],
    [0, 16],
    [0, 10],
    [1, 9],
    [2, 10],
    [2, 16],
  ],
  f: [
    [1, 9],
    [0, 8],
    [0, 2],
    [1, 1],
    [2, 2],
    [2, 8],
  ],
  g: [
    [1, 9],
    [2, 8],
    [8, 8],
    [9, 9],
    [8, 10],
    [2, 10],
  ],
};
