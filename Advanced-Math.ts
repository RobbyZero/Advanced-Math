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

//% color=#67CD23 icon="\uf02d" block="Calculus"
namespace Calculus {
    /**
     * Numerically computes the derivative of a function at a given point using the central difference method.
     * @param func The function to differentiate.
     * @param x The point at which to compute the derivative.
     * @param h The step size.
     * @returns The derivative of the function at the given point.
     */
    //% block="differentiate $func at $x with step size $h"
    //% inlineInputMode=inline
    export function differentiate(func: (x: number) => number, x: number, h: number): number {
        return (func(x + h) - func(x - h)) / (2 * h);
    }

    /**
     * Numerically computes the definite integral of a function over a given interval using the trapezoidal rule.
     * @param func The function to integrate.
     * @param a The lower bound of the interval.
     * @param b The upper bound of the interval.
     * @param n The number of subintervals (higher values give better accuracy).
     * @returns The definite integral of the function over the given interval.
     */
    //% block="integrate $func from $a to $b with $n subintervals"
    //% inlineInputMode=inline
    export function integrate(func: (x: number) => number, a: number, b: number, n: number): number {
        const h = (b - a) / n;
        let sum = 0.5 * (func(a) + func(b));
        for (let i = 1; i < n; i++) {
            sum += func(a + i * h);
        }
        return h * sum;
    }

    /**
     * Performs integration by parts on the given functions.
     * @param f The first function.
     * @param g The second function.
     * @param a The lower bound of integration.
     * @param b The upper bound of integration.
     * @returns The result of integration by parts.
     */
    //% block="integrate by parts: ∫($f * $g) from $a to $b"
    //% inlineInputMode=inline
    export function integrateByParts(f: (x: number) => number, g: (x: number) => number, a: number, b: number): number {
        const integralF = integrate(f, a, b, 1000); // Compute ∫f(x)dx
        const integralG = integrate(g, a, b, 1000); // Compute ∫g(x)dx
        return (f(a) * g(a) - f(b) * g(b)) - integralF * integralG; // Apply integration by parts formula
    }
}

//% color=#2AE7EA icon="\uf0cb" block="Exponential/Log"
namespace ExponentialLog {
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
    const PI = Math.PI;

    //% block="radians to degrees %angle"
    //% angle.min=-360 angle.max=360
    export function radiansToDegrees(angle: number): number {
        return angle * 180 / PI; // Convert angle from radians to degrees
    }
}
