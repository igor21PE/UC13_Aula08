/**
 * esse é o exemplo da função definirdiadasemana
 * @example
 *   definirdiadasemana(1);//domingo
 * @param {1} dia 
 * @returns {domingo}
 */
function definirdiadasemana(dia){
    const diadasemana=[
    "domingo","segunda","terça","quarta","quinta","sexta","sabado"
    ]
if(dia => 1 && dia <= 7){
   console.log (diadasemana[dia -1])
} else{
    console.log ("este numero não corresponde aos dias da semana!!!")
}
}
definirdiadasemana(3)
definirdiadasemana(7)
definirdiadasemana(8)