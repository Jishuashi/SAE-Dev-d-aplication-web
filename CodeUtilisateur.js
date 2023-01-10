window.onload = init

function init(){

}



/**
 * Calcule la valeur de la loi normal en x abcisse
 * @param x nombre réel
 * @returns {number} nombre réel
 */
function loiNormal(x){
    var res = (1/(sigma*Math.sqrt(2*Math.PI)))*Math.exp(-0.5*Math.pow((x-m)/sigma,2))
    return res
}