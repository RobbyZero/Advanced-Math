// Check if a number is prime
function checkIfPrime(n: number): boolean {
    if (n <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (n <= 3) return true;  // 2 and 3 are prime
    if (n % 2 === 0 || n % 3 === 0) return false; // Multiples of 2 and 3 are not prime
    // Check for factors from 5 to sqrt(n)
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true; // If no factors were found, n is prime
}

// Calculate the greatest common divisor (GCD) of two numbers
function calculateGcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Calculate the least common multiple (LCM) of two numbers
function calculateLcm(a: number, b: number): number {
    if (a === 0 || b === 0) return 0; // Handle cases where one of the numbers is 0
    return Math.abs(a * b) / calculateGcd(a, b); // Use Math.abs to ensure the LCM is positive
}

// Factorize a number into its prime factors
function getPrimeFactors(n: number): number[] {
    if (n < 1) return []; // Handle cases where n is less than 1
    let factors: number[] = [];
    // Handle 2 separately
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }
    // Handle odd factors
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    // If n is a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }
    return factors;
}

//% color=#9EF104 icon="\uf160" block="Number Theory Tools"
namespace numberTheoryTools {

    //% block="is prime %n" 
    //% n.min=1 n.max=1000
    export function isPrime(n: number): boolean {
        return checkIfPrime(n);
    }

    //% block="GCD of %a and %b" 
    //% a.min=1 b.min=1
    export function gcd(a: number, b: number): number {
        return calculateGcd(a, b);
    }

    //% block="LCM of %a and %b" 
    //% a.min=1 b.min=1
    export function lcm(a: number, b: number): number {
        return calculateLcm(a, b);
    }

    //% block="factorize %n" 
    //% n.min=1
    export function factorize(n: number): number[] {
        return getPrimeFactors(n);
    }
}

