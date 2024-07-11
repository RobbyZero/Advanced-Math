//% color=#5B06F9 icon="\uf084" block="Cryptography"
namespace Cryptography {
    // Caesar cipher encryption
    //% block="Caesar Cipher Encrypt $plaintext with shift $shift"
    export function caesarCipherEncrypt(plaintext: string, shift: number): string {
        let ciphertext = "";
        for (let i = 0; i < plaintext.length; i++) {
            let char = plaintext.charAt(i);
            if (char >= 'A' && char <= 'Z') {
                let code = (char.charCodeAt(0) - 65 + shift) % 26 + 65;
                ciphertext += String.fromCharCode(code);
            } else if (char >= 'a' && char <= 'z') {
                let code = (char.charCodeAt(0) - 97 + shift) % 26 + 97;
                ciphertext += String.fromCharCode(code);
            } else {
                ciphertext += char;
            }
        }
        return ciphertext;
    }

    // Caesar cipher decryption
    //% block="Caesar Cipher Decrypt $ciphertext with shift $shift"
    export function caesarCipherDecrypt(ciphertext: string, shift: number): string {
        // Decryption is just encryption with negative shift
        return caesarCipherEncrypt(ciphertext, -shift);
    }

    // Substitution cipher encryption
    //% block="Substitution Cipher Encrypt $plaintext with key $key"
    export function substitutionCipherEncrypt(plaintext: string, key: string): string {
        let ciphertext = "";
        for (let i = 0; i < plaintext.length; i++) {
            let char = plaintext.charAt(i);
            let index = char.toUpperCase().charCodeAt(0) - 65;
            if (index >= 0 && index < 26) {
                ciphertext += key.charAt(index);
            } else {
                ciphertext += char;
            }
        }
        return ciphertext;
    }

    // Substitution cipher decryption
    //% block="Substitution Cipher Decrypt $ciphertext with key $key"
    export function substitutionCipherDecrypt(ciphertext: string, key: string): string {
        let plaintext = "";
        for (let i = 0; i < ciphertext.length; i++) {
            let char = ciphertext.charAt(i);
            let index = key.indexOf(char);
            if (index != -1) {
                plaintext += String.fromCharCode(index + 65);
            } else {
                plaintext += char;
            }
        }
        return plaintext;
    }

    // Vigenère cipher encryption
    //% block="Vigenère Cipher Encrypt $plaintext with key $key"
    export function vigenereCipherEncrypt(plaintext: string, key: string): string {
        let ciphertext = "";
        let keyIndex = 0;
        for (let i = 0; i < plaintext.length; i++) {
            let char = plaintext.charAt(i);
            if (char >= 'A' && char <= 'Z') {
                let shift = key.charAt(keyIndex % key.length).toUpperCase().charCodeAt(0) - 65;
                let code = (char.charCodeAt(0) - 65 + shift) % 26 + 65;
                ciphertext += String.fromCharCode(code);
                keyIndex++;
            } else if (char >= 'a' && char <= 'z') {
                let shift = key.charAt(keyIndex % key.length).toLowerCase().charCodeAt(0) - 97;
                let code = (char.charCodeAt(0) - 97 + shift) % 26 + 97;
                ciphertext += String.fromCharCode(code);
                keyIndex++;
            } else {
                ciphertext += char;
            }
        }
        return ciphertext;
    }

    // Vigenère cipher decryption
    //% block="Vigenère Cipher Decrypt $ciphertext with key $key"
    export function vigenereCipherDecrypt(ciphertext: string, key: string): string {
        let plaintext = "";
        let keyIndex = 0;
        for (let i = 0; i < ciphertext.length; i++) {
            let char = ciphertext.charAt(i);
            if (char >= 'A' && char <= 'Z') {
                let shift = key.charAt(keyIndex % key.length).toUpperCase().charCodeAt(0) - 65;
                let code = (char.charCodeAt(0) - 65 - shift + 26) % 26 + 65;
                plaintext += String.fromCharCode(code);
                keyIndex++;
            } else if (char >= 'a' && char <= 'z') {
                let shift = key.charAt(keyIndex % key.length).toLowerCase().charCodeAt(0) - 97;
                let code = (char.charCodeAt(0) - 97 - shift + 26) % 26 + 97;
                plaintext += String.fromCharCode(code);
                keyIndex++;
            } else {
                plaintext += char;
            }
        }
        return plaintext;
    }
}



//% color=#2AE7EA icon="\uf0cb" block="Exponential/Log"
namespace explog {
    /**
     * Computes the exponential function e^x for a given value of x.
     * @param x The exponent value.
     * @returns The result of e raised to the power of x.
     */
    //% block="e to the power of $x"
    //% x.defl=1
    export function exp(x: number): number {
        return Math.exp(x);
    }

    /**
     * Computes the natural logarithm ln(x) for a given value of x.
     * @param x The input value.
     * @returns The natural logarithm of x.
     */
    //% block="natural log of $x"
    //% x.defl=1
    export function ln(x: number): number {
        return Math.log(x);
    }

    /**
     * Computes the base-10 logarithm log10(x) for a given value of x.
     * @param x The input value.
     * @returns The base-10 logarithm of x.
     */
    //% block="log base 10 of $x"
    //% x.defl=1
    export function log10(x: number): number {
        return Math.log(x) / Math.log(10);
    }
}

//% color=#49EE1B icon="\uf151" block="Trig Modes"
namespace TrigModes {
    let pi = 0;

    //% block="degrees %angle"
    //% angle.min=-180 angle.max=180
    export function Degrees(angle: number): number {
        pi = Math.atan2(0, -1); // Calculate pi (π)
        return pi * angle / 180; // Convert angle from degrees to radians
    }
}