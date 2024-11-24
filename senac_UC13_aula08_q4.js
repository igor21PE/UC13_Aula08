/**
 * este é um exemplo da função podeacessar
 *  
 * @example
 *   podeAcessar(20, false, true); //true
 * @param {20, false, true} usuario 
 * @returns {true}
 */
function podeAcessar(usuario) {
    return (usuario.idade > 18 || usuario.isAdmin) && !usuario.isBlocked;
  }
  console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false }));
  console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));