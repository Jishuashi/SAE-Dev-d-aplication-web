import React, {useState} from 'react';
import  '../../../../styles/moduleCrypto.css';

function ModuleCrypto (){
    let [result, setResult] = useState(``);
    let [error, setError] = useState("");

    const [formData, setFormData] = useState({
        key: '',
        textCrypto: '',
        t: '',
    });

    function rc4(key, str) {
        /**
         * @returns texte chiffré en hexadécimal
         * @param key : String
         * @param str : String
         * @type {Uint8Array}
         */

        let ciphertext = new Uint8Array(str.length);

        // Initialisation d'un array pour le chiffrement
        let S = new Uint8Array(256);
        for (let i = 0; i < 256; i++) {
            S[i] = i;
        }
        let j = 0;
        for (let i = 0; i < 256; i++) {
            j = (j + S[i] + key.charCodeAt(i % key.length)) % 256; // récupère l'unicode UTF-16 de la clé et fait un modulo 256 dessus
            [S[i], S[j]] = [S[j], S[i]];
        }

        let i = 0;
        j = 0;
        for (let n = 0; n < str.length; n++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256;
            [S[i], S[j]] = [S[j], S[i]];
            let z = S[(S[i] + S[j]) % 256];

            // XOR entre la clé et le texte pour produire le chiffrement
            ciphertext[n] = str.charCodeAt(n) ^ z;
        }

        str = ""
        for (let i = 0 ; i < ciphertext.length ; i++){
            if (ciphertext[i] <= 16){
                str += "0" // la conversion en hexadécimal ne renvoie pas un 0, nécessaire au bon chiffrement
            }
            str += ciphertext[i].toString(16) // conversion décimal/hexadécimal
        }

        return str

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setResult(``)
        setError("")
        if (formData.key !== "") {
            if (formData.textCrypto !== ""){
                setResult(rc4(formData.key,formData.textCrypto))
            } else {
                setError("Erreur le champ Texte n'a pas de valeur")
            }
        } else  {
            setError("Erreur le champ Clé n'a pas de valeur")
        }
    }

    return(
        <div className="ModuleCrypto">
                <h1 className={"titleCrypto"}>Module de cryptographie</h1>
                <form onSubmit={handleSubmit}>
                    <div className={"inputsCrypto"}>
                        <p className={"inputTextCrypto"}>Entrez les valeurs requise pour chiffrer le texte en hexadécimal: </p>
                        <label htmlFor={"key"}>Clé: </label>
                        <input type={"text"} className={"key"} name={"key"} onChange={handleChange}/>
                        <label htmlFor={"textCrypto"}>Texte: </label>
                        <input type={"text"} className={"textCrypto"} name={"textCrypto"} onChange={handleChange}/>
                    </div>
                    <input type="submit" className={"lunchButtonCrypto"} value="Lancer le chiffrement"/>
                </form>

            <div className={"dialogBoxCrypto"}>
                <p className={"errorCrypto"}>{error}</p>
                <label htmlFor={"result"}>Résultat: </label>
                <input type={"text"} name={"result"} onInput={false} className={"calcResultCrypto"} value={result}></input>
            </div>

        </div>);
}

export default ModuleCrypto;