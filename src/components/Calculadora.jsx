import React, { useState } from 'react';

const Calculadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const calculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (isNaN(number1) || isNaN(number2)) {
      setResult('Error: Introduce números válidos');
      return;
    }
    switch (operation) {
      case 'sum': setResult(number1 + number2); break;
      case 'subtract': setResult(number1 - number2); break;
      case 'multiply': setResult(number1 * number2); break;
      case 'divide':
        setResult(number2 !== 0 ? number1 / number2 : 'Error: División por 0');
        break;
      default: setResult(null);
    }
  };
  return (
    <div className="calculadora">
      <h2>Calculadora</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Número 1" />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Número 2" />
      <div className="buttons">
        <button onClick={() => calculate('sum')}>Sumar</button>
        <button onClick={() => calculate('subtract')}>Restar</button>
        <button onClick={() => calculate('multiply')}>Multiplicar</button>
        <button onClick={() => calculate('divide')}>Dividir</button>
      </div>
      {result !== null && <h3>Resultado: {result}</h3>}
    </div>
  );
};
export default Calculadora;