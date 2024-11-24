/**
 * este é o exemplo da função calculardesconto
 * 
 * @example
 *   calculardesconto(100, 10); // 90   
 * @param {100} precoOriginal 
 * @param {10} porcentagemDesconto 
 * @returns {90}
 */
const calcularDesconto = (precoOriginal, porcentagemDesconto) => {
    return precoOriginal - (precoOriginal * (porcentagemDesconto / 100));
  };
  console.log(calcularDesconto(100, 10));
  console.log(calcularDesconto(250, 20));