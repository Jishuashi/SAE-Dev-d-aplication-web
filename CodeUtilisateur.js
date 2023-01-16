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
const add = Math.round((1/n)*10.0)/10.0
function init(){
    rectangle()
}


function rectangle(){
    var k = a+add
    var sommeCommun =0
    while (k<b){
        sommeCommun += loiNormal(k)
        k = Math.round((k+add)*10.0)/10.0
    }
    sommeCommun *= add
    var rectDroit = sommeCommun + loiNormal(a)*add
    var rectGauche =sommeCommun + loiNormal(b)*add
    rectDroit = convertiProba(rectDroit)
    rectGauche = convertiProba(rectGauche)
    var median = (rectGauche+rectDroit)/2
    median = Math.round(median*100000.0)/100000.0
    return [rectGauche,rectDroit,median]
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