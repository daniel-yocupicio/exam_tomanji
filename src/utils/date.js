const month = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre',
  11: 'Nomviembre',
  12: 'Diciembre',
};

export const getNormalDate = () => {
  let date = new Date();
  return `${date.getDate()} ${
    month[date.getMonth() + 1]
  } ${date.getFullYear()}`;
};
