function cesar(str){
  let a = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
  let b = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let arrStr = str.split('');
  let result = [];
  let expr = /[A-Z]/;

  for(let i = 0; i < arrStr.length; i++){
    if(expr.test(arrStr[i])){
      for(let j = 0; j < 14; j++){
        if(a[j] === arrStr[i]){
          result.push(b[j]);
        }
        if(b[j] === arrStr[i]){
          result.push(a[j]);
        } 
      }
    }else{
      result.push(arrStr[i]);
    }
  }
  return result.join('');
}

//ESTA FUNCION REALIZA EL CIFRADO DE CESAR ACEPTA CARACTERES NO ALFABETICOS(!)(&%$?)
