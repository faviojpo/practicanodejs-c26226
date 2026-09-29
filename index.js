// Requerimos el módulo nativo "readline" para interactuar con la consola
const readline = require('readline');

// Creamos la interfaz para leer lo que escribe el usuario en la terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== CALCULADORA EN NODE.JS ===");
console.log("Operaciones disponibles: + (sumar), - (restar), * (multiplicar), / (dividir)\n");

// 1. Pedimos el primer número
rl.question('Ingresa el primer número: ', (num1Input) => {
  const num1 = parseFloat(num1Input);

  // 2. Pedimos la operación
  rl.question('Ingresa la operación (+, -, *, /): ', (operacion) => {

    // 3. Pedimos el segundo número
    rl.question('Ingresa el segundo número: ', (num2Input) => {
      const num2 = parseFloat(num2Input);
      let resultado;

      // Evaluamos la operación elegida
      switch (operacion) {
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
            resultado = 'Error: No se puede dividir entre cero.';
          } else {
            resultado = num1 / num2;
          }
          break;
        default:
          resultado = 'Operación no válida. Usa +, -, * o /.';
      }

      // Mostramos la respuesta final
      console.log(`\nResultado: ${resultado}`);

      // Cerramos la lectura en la consola para terminar el programa
      rl.close();
    });
  });
});