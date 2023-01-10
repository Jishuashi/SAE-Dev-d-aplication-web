window.onload = init
let sigma = 1
let m = 0
let t = 1
let arrondi = 100000.0

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

/**
 * Convertie la probabilité du nombre en paramètre selon t
 *Si t>m, ajoute au nombre 0.5, sinon soustrait le nombre à 0.5
 * @param number nombre réel positif correspondant à la probabilité entre deux points
 * @returns {number}
 */
function convertiProba(number){
    if (t>m){
        return Math.round((number+0.5)*arrondi)/arrondi
    }
    return Math.round((0.5-number)*arrondi)/arrondi
}

function afficheMoi(text, number){
    var result = document.getElementById("simpson")
    result.appendChild(document.createTextNode(text+": "+number.toString()))
    result.appendChild(document.createElement("br"))
}