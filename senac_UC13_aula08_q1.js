/**
 * este é o exemplo da função de verificaridade
 * @example
 *   verificaridae(12);//"você é menor de idade"
 * @param {12} idade 
 * @returns {"você é menor de idade"}
 */
function verificaridade(idade){
if (idade < 18){
    console.log("você é menor de idade")
}else{
    console.log("você é maior de idade")
}
}
verificaridade(15)
verificaridade(18)
verificaridade(21)