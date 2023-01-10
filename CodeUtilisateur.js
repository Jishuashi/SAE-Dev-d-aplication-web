window.onload = init
/*Sigma et m représente les paramètres de la loi normal
m est l'espérence
sigma l'écart type
t la probabilité à calculer, soit p(x<t)
n est l'échelle, soit le nombre de point entre x et x+1
 */
let sigma = 1
let m = 0
let t = 1
let arrondi = 100000.0
const n = 10
/*"Placement des points" a et b
Ils seront l'interval à calculer, soit p(t<x<m) si t<m
sinon p(m<x<t)
 */
let a = 0
let b =0
if(t>m){
    a = m
    b = Math.abs(t)
}else {
    a = Math.abs(t)
    b = m
}
function init(){
    rectangle()
}


function rectangle(){
    var k = a
    var sommeRectangleGauche =0
    var sommeRectangleDroit =0
    var sommeMedian=0
    while (k<=b-0.1){
        sommeRectangleGauche += loiNormal(k)
        sommeMedian += loiNormal((k+k+0.1)/2)
        k = Math.round((k+0.1)*10.0)/10.0
        sommeRectangleDroit += loiNormal(k)
    }
    sommeRectangleGauche *= (b-a)/n
    sommeRectangleDroit *= (b-a)/n
    sommeMedian *= (b-a)/n
    sommeRectangleDroit = convertiProba(sommeRectangleDroit)
    sommeRectangleGauche = convertiProba(sommeRectangleGauche)
    sommeMedian = convertiProba(sommeMedian)
    afficheMoi("Gauche",sommeRectangleGauche)
    afficheMoi("Droit",sommeRectangleDroit)
    afficheMoi("Median",sommeMedian)
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