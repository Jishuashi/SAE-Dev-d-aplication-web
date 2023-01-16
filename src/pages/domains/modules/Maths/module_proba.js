import React, {useState} from 'react';
import '../../../../styles/moduleProba.css';
import {useNavigate} from "react-router-dom";
function ModuleProba({logged}) {
    const [error, setError] = useState("")
    const [result, setResult] = useState(``)

    let round = 100000.0
    const n = 10

    const [formData, setFormData] = useState({
        sigma: '',
        moy: '',
        t: '',
        method: 'rectangles' //default value
    });

    function loiNormal(x) {
        return (1 / (formData.sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - formData.moy) / formData.sigma, 2))
    }

    function convertiProba(number) {
        if (formData.t > formData.moy) {
            return Math.round((number + 0.5) * round) / round
        }
        return Math.round((0.5 - number) * round) / round
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setResult(``)

        if (formData.sigma <= 0) {
            setError("Erreur sigma dois être strictement supérieur à 0")
        } else {
            setError("")
            console.log(formData.method);
            /*"Placement des points" a et b
            Ils seront l'interval à calculer, soit p(t<x<m) si t<m
            sinon p(m<x<t)
            */
            let a = 0
            let b = 0
            if (formData.t > formData.moy) {
                a = formData.moy
                b = Math.abs(formData.t)
            } else {
                a = Math.abs(formData.t)
                b = formData.moy
            }

            const add = Math.round((1 / n) * 10.0) / 10.0


            if (formData.method === "rectangles") {
                /*Commence en a+1
                Parcourt des points de a+1 à b-1
                Initialisation d'une letiable sommeCommun,
                pour récupérer la somme des aires des rectangles
                Pour ne pas modifier la constante a, on initialise une letiable k
                 */
                let k = a + add
                let sommeCommun = 0
                while (k < b) {
                    sommeCommun += loiNormal(k)
                    /*Arrondi k à un chiffre après la virgule :
                    problème rencontré k = 0.1000002 */
                    k = Math.round((k + add) * 10.0) / 10.0
                }

                /*Multiplication de la somme des longueurs par la largeur
                Différenciation des rectangles Droits:
                par la première valeur interval, soit a
                Différenciation des rectangles Gauches:
                par la dernière valeur interval, soit b
                */

                sommeCommun *= add
                let rectDroit = sommeCommun + loiNormal(a) * add
                let rectGauche = sommeCommun + loiNormal(b) * add
                rectDroit = convertiProba(rectDroit)
                rectGauche = convertiProba(rectGauche)
                let median = (rectGauche + rectDroit) / 2
                median = Math.round(median * 100000.0) / 100000.0
                setResult(`rectangle gauche: ${rectGauche}, rectangle droit: ${rectDroit}, mediane: ${median}`)

            } else if (formData.method === "trapezes") {
                /*point k en a
                parcourt de tout les points entre a et b
                sommeTrape représente la somme des aires des trapèzes,
                soit la probabilité de p(a<=x<=b)
                 */
                let k = a
                let sommeTrap = 0
                while (k < b) {
                    /*Fait la somme des aires
                    aire : (l1+l2)*h/2 -> aire d'un trapèze
                    l1 = k; l2 = k+0.1; h = l'interval entre deux point soit 1/n
                     */
                    sommeTrap += (loiNormal(k) + loiNormal(k + add)) * add / 2
                    k = Math.round((k + 0.1) * 10.0) / 10.0
                    console.log(sommeTrap)
                }
                //converti la somme des aires des trapèzes pour donner la probabilité p(x<t)
                let resT = convertiProba(sommeTrap)
                setResult(`Médiane trapèzes: ${resT}`)

            } else if (formData.method === "simpson") {
                let fa = loiNormal(a) //--> f(a)
                let fb = loiNormal(b) //--> f(b)
                let fab = 4 * loiNormal((a + b) / 2)  //-->4f((a+b)/2)
                let result = (fb + fab + fa) * (b - a) / 6 //-->(b-a)/6 * [f(a)+4f((a+b)/2)+f(b)]
                result = convertiProba(result)
                setResult(`Médiane simpson: ${result}`)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const navigate = useNavigate();

    if (logged) {
        return (
            <div className="ModuleProba">
                <h1 className={"titleProba"}>Module de probabilité</h1>
                <form onSubmit={handleSubmit}>
                    <div className={"inputsProba"}>
                        <p className={"inputTextProba"}>Entrez les valeurs: </p>
                        <label htmlFor={"sigma"}>Sigma: </label>
                        <input type={"number"} className={"sigma"} name={"sigma"} min={"1"} step={"any"} required={true}
                               placeholder={"sigma>0"} onChange={handleChange}/>
                        <label htmlFor={"moy"}>Esperence: </label>
                        <input type={"number"} className={"moy"} name={"moy"} step={"any"} required={true}
                               onChange={handleChange}/>
                        <label htmlFor={"t"}>T: </label>
                        <input type={"number"} className={"t"} name={"t"} step={"any"} required={true}
                               onChange={handleChange}/>
                    </div>

                    <div className={"radioInputsProba"}>
                        <p className={"calcMethod"}>Méthode de calcul:</p>
                        <label htmlFor="rectangles">rectangles</label>
                        <input type={"radio"} className={"rectangles"} name={"method"} value="rectangles" defaultChecked
                               onChange={handleChange}/>
                        <label htmlFor="trapezes">trapèzes</label>
                        <input type={"radio"} className={"trapezes"} name={"method"} value="trapezes"
                               onChange={handleChange}/>
                        <label htmlFor="simpson">simpson</label>
                        <input type={"radio"} className={"simpson"} name={"method"} value="simpson"
                               onChange={handleChange}/>
                    </div>
                    <input type="submit" className={"lunchButtonProba"} value="Lancer le calcul"/>
                </form>

                <div className={"dialogBoxProba"}>
                    <p className={"errorProba"}>{error}</p>
                    <p className={"calcResultProba"}>{result}</p>
                </div>
            </div>);
    }
    else {
        return (navigate("/notAllowed"));
    }
}

export default ModuleProba;