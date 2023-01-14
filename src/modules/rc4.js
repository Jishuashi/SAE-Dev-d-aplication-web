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

module.exports = rc4;

let key = "Secret";
let plaintext = "Attack at dawn";
let ciphertext = rc4(key, plaintext);
console.log(ciphertext);