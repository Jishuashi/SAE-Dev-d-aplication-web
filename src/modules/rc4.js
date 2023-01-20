function checkHexa(key,str){
    var regex = /[0-9A-Fa-f]{6}/g;
    if (str.match(regex)){
        return dechiffrementRC4(key,str)
    }
    else {
        return rc4(key,str)
    }
}

function rc4(key, str) {
    /**
     * @returns texte chiffré en hexadécimal
     * @param key : String
     * @param str : String
     * @type {RegExp}
     */


    let ciphertext = new Uint8Array(str.length);

    // Algorithme PRGA générant la suite chiffrante de RC4
    let S = new Uint8Array(256);
    for (let i = 0; i < 256; i++) {
        S[i] = i;
    }
    let j = 0;
    for (let i = 0; i < 256; i++) {
        j = (j + S[i] + key.charCodeAt(i % key.length)) % 256; // Tableau construit à partir de la clé
        [S[i], S[j]] = [S[j], S[i]];
    }

    // Algorithme KSA pour la génération de la permutation
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

function dechiffrementRC4(key, ciphertext) {
    // Convertit l'hexadécimal en bytes pour le déchiffrement
    let bytes = [];
    for (var i = 0; i < ciphertext.length; i += 2) {
        bytes.push(parseInt(ciphertext.substr(i, 2), 16));
    }
    var ciphertext = String.fromCharCode.apply(null, bytes);

    // Algorithme PRGA générant la suite déchiffrante de RC4
    let S = new Array(256);
    for (let i = 0; i < 256; i++) {
        S[i] = i;
    }

    let j = 0;
    for (let i = 0; i < 256; i++) {
        j = (j + S[i] + key.charCodeAt(i % key.length)) % 256;
        [S[i], S[j]] = [S[j], S[i]];
    }

    // Algorithme KSA pour la génération de la permutation
    var i = 0;
    j = 0;
    let plaintext = "";
    for (let n = 0; n < ciphertext.length; n++) {
        i = (i + 1) % 256;
        j = (j + S[i]) % 256;
        [S[i], S[j]] = [S[j], S[i]];
        let z = S[(S[i] + S[j]) % 256];
        plaintext += String.fromCharCode(ciphertext.charCodeAt(n) ^ z);
    }
    return plaintext;
}

console.log(checkHexa("Key", "bbf316e8d940af0ad3"))