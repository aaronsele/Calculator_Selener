function calcular() {
    const numIngresado1 = document.getElementById('numIngresado1').value;
    const operation = document.getElementById('operation').value;
    const numIngresado2 = document.getElementById('numIngresado2').value;
    const mensajeError = document.getElementById('mensajeError');
    const rta = document.getElementById('result');
  
    mensajeError.innerHTML = '';
    rta.innerHTML = '';
  

    if (numIngresado1 === '' || numIngresado2 === '' || operation === '') {
      mensajeError.innerHTML = 'Por favor, ingresa todos los campos.';
      return;
    }
  
    
    const num1 = parseFloat(numIngresado1);
    const num2 = parseFloat(numIngresado2);
  
   
    if (isNaN(num1) || isNaN(num2)) {
      mensajeError.innerHTML = 'Por favor, ingresa números válidos.';
      return;
    }
  
    let resultado;
  
    switch (operation) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          mensajeError.innerHTML = 'No se puede dividir por cero.';
          return;
        }
        resultado = num1 / num2;
        break;
      default:
        mensajeError.innerHTML = 'Operación no válida. Usa +, -, * o /.';
        return;
    }

    rta.innerHTML = resultado;

    if (resultado > 0) {
      rta.classList.add('positive');
      rta.classList.remove('negative');
    } else if (resultado < 0) {
      rta.classList.add('negative');
      rta.classList.remove('positive');
    }
  }