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
function inivariable() {
    if (t > m) {
        a = m
        b = Math.abs(t)
    } else {
        a = Math.abs(t)
        b = m
    }
}
const add = Math.round((1/n)*10.0)/10.0
//variable de test
const list_t = [1,2,2.4]
const list_m = [1,1.5,3]
const list_sigma = [0.1,0.25,1.23]
const list_resul = [0.5,0.97725,0.31284]
let result_searc = [list_t,list_m,list_sigma,list_resul]

function init(){
    test_result_search(result_searc)
    inivariable()
    rectangle()
    trapez()
    simpson()
}

/**
 * Calcul de la probabilité de p(x<t) par la méthode des rectangles
 * @returns {(*|number)[]} Un liste de nombres réels positifs :
 * 1ère valeur -> probabilité p(x<t) suppérieurs à cette valeur
 * 2ème valeur -> probabilité p(x<t) inférieurs à cette valeur
 * 3ème valeur -> probabilité p(x<t) environ égale à cette valeur
 */
function rectangle(){
    /*Commence en a+1
    Parcourt des points de a+1 à b-1
    Initialisation d'une variable sommeCommun,
    pour récupérer la somme des aires des rectangles
    Pour ne pas modifier la constante a, on initialise une variable k
     */
    inivariable()
    console.log("a :"+a)
    var k = a+add
    var sommeCommun =0
    while (k<b){
        sommeCommun += loiNormal(k)
        /*Arrondi k à un chiffre après la virgule :
        problème rencontré k = 0.1000002 */
        k = Math.round((k+add)*10.0)/10.0
    }
    /*Multiplication de la somme des longueurs par la largeur
    Différenciation des rectangles Droits:
    par la première valeur interval, soit a
    Différenciation des rectangles Gauches:
    par la dernière valeur interval, soit b
    */
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
 * Retourne la probabilité de p(x<t) en calculant p(a<=x<=b)
 * Pas de paramètre et dépend de a,b,sigma,m et t
 * @returns {*|number}
 */
function trapez(){
    /*point k en a
    parcourt de tout les points entre a et b
    sommeTrape représente la somme des aires des trapèzes,
    soit la probabilité de p(a<=x<=b)
     */
    var k=a
    var sommeTrap =0
    while (k<b){
        /*Fait la somme des aires
        aire : (l1+l2)*h/2 -> aire d'un trapèze
        l1 = k; l2 = k+0.1; h = l'interval entre deux point soit 1/n
         */
        sommeTrap += (loiNormal(k) + loiNormal(k+add))*add/2
        k = Math.round((k+0.1)*10.0)/10.0
    }
    //converti la somme des aires des trapèzes pour donner la probabilité p(x<t)
    var res = convertiProba(sommeTrap)
    afficheMoi("Trapèze",res)
    return res
}


/**
 * Calcule de la probabilité p(x<t)
 * @returns {*|number} nombre réel positif
 */
function simpson(){
    var fa = loiNormal(a) //--> f(a)
    var fb = loiNormal(b) //--> f(b)
    var fab = 4*loiNormal((a+b)/2)  //-->4f((a+b)/2)
    var result = (fb+fab+fa)*(b-a)/6 //-->(b-a)/6 * [f(a)+4f((a+b)/2)+f(b)]
    result = convertiProba(result)
    return result
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

/*
Fonction test
 */
function test_result_search(myvar){
    for (var i=0;i<myvar[0].length;i++){
        t = myvar[0][i]
        m = myvar[1][i]
        sigma = myvar[2][i]
        var result_search = myvar[3][i]

        /*Teste de la méthode des rectangles
         */
        var result_get = rectangle()
        console.log(result_get)
        if (result_get[0]<result_search && result_get[1]>result_search){
            console.log("1.Bon resultat")
        }else {
            console.log("1.Mauvais resultat")
        }
        if (result_get[2] == result_search){
            console.log("2.Bon resultat")
        }else {
            console.log("2.Mauvais resultat")
        }

    }
}