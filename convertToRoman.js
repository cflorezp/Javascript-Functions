/*Esta funcion convierte un numero menor a 3999 a romano*/

function convertToRoman(num) {
  let romans = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
    XX: 20,
    XXX: 30,
    XL: 40,
    L: 50,
    LX: 60,
    LXX: 70,
    LXXX: 80,
    XC: 90,
    C: 100,
    CC: 200,
    CCC: 300,
    CD: 400,
    D: 500,
    DC: 600,
    DCC: 700,
    DCCC: 800,
    CM: 900,
    M: 1000,
    MM: 2000,
    MMM: 3000,
  };

  let myArr = String(num)
    .split('')
    .map((num) => {
      return num;
    });

  let m, c, d, u;
  let romano = '';
  let cifras = myArr.length;

  if (cifras === 1) {
    u = myArr[0];
  }

  if (cifras === 2) {
    d = myArr[0] + '0';
    u = myArr[1];
  }

  if (cifras === 3) {
    c = myArr[0] + '00';
    d = myArr[1] + '0';
    u = myArr[2];
  }

  if (cifras === 4) {
    m = myArr[0] + '000';
    c = myArr[1] + '00';
    d = myArr[2] + '0';
    u = myArr[3];

  }

  for (let el in romans) {
      if (romans[el] == u) {
        romano += el;
      }
      if (romans[el] == d) {
        romano = el + romano;
      }
      if (romans[el] == c) {
        romano = el + romano;
      }
      if (romans[el] == m) {
        romano = el + romano;
      }
  }
    return romano;

}
