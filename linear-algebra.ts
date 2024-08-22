//% color=#A111EE icon="\uf1de" block="LinearAlgebra"
// Namespace for linear algebra operations
namespace LinearAlgebra {
    // Define types for vectors and matrices
    export type Vector = number[];
    export type Matrix = number[][];

    // Custom error handling
    //% shim=LinearAlgebra::errorHandler
    function errorHandler(message: string): void {
        throw new Error("Linear Algebra Error: " + message);
    }

    // Vector operations

    // Add two vectors
    //% block="vector addition $v1 and $v2" v1.defl=0 v2.defl=0
    //% v1.shadow="array" v2.shadow="array"
    export function vectorAddition(v1: Vector, v2: Vector): Vector {
        if (v1.length === 0 || v2.length === 0) {
            errorHandler("Vectors cannot be empty.");
        }
        if (v1.length !== v2.length) {
            errorHandler("Vectors must be of the same length for addition.");
        }
        return v1.map((val, index) => val + v2[index]);
    }

    // Subtract two vectors
    //% block="vector subtraction $v1 from $v2" v1.defl=0 v2.defl=0
    //% v1.shadow="array" v2.shadow="array"
    export function vectorSubtraction(v1: Vector, v2: Vector): Vector {
        if (v1.length === 0 || v2.length === 0) {
            errorHandler("Vectors cannot be empty.");
        }
        if (v1.length !== v2.length) {
            errorHandler("Vectors must be of the same length for subtraction.");
        }
        return v1.map((val, index) => val - v2[index]);
    }

    // Multiply a vector by a scalar
    //% block="multiply vector $vector by scalar $scalar" vector.defl=0 scalar.defl=1
    //% vector.shadow="array"
    export function scalarMultiplication(vector: Vector, scalar: number): Vector {
        if (vector.length === 0) {
            errorHandler("Vector cannot be empty.");
        }
        return vector.map(val => val * scalar);
    }

    // Calculate the dot product of two vectors
    //% block="dot product of $v1 and $v2" v1.defl=0 v2.defl=0
    //% v1.shadow="array" v2.shadow="array"
    export function dotProduct(v1: Vector, v2: Vector): number {
        if (v1.length === 0 || v2.length === 0) {
            errorHandler("Vectors cannot be empty.");
        }
        if (v1.length !== v2.length) {
            errorHandler("Vectors must be of the same length for dot product.");
        }
        return v1.reduce((sum, val, index) => sum + val * v2[index], 0);
    }

    // Matrix operations

    // Add two matrices
    //% block="matrix addition $matrix1 and $matrix2" matrix1.defl=0 matrix2.defl=0
    //% matrix1.shadow="array" matrix2.shadow="array"
    export function matrixAddition(matrix1: Matrix, matrix2: Matrix): Matrix {
        if (matrix1.length === 0 || matrix2.length === 0) {
            errorHandler("Matrices cannot be empty.");
        }
        if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
            errorHandler("Matrices must have the same dimensions for addition.");
        }
        return matrix1.map((row, i) => row.map((val, j) => val + matrix2[i][j]));
    }

    // Subtract two matrices
    //% block="matrix subtraction $matrix1 from $matrix2" matrix1.defl=0 matrix2.defl=0
    //% matrix1.shadow="array" matrix2.shadow="array"
    export function matrixSubtraction(matrix1: Matrix, matrix2: Matrix): Matrix {
        if (matrix1.length === 0 || matrix2.length === 0) {
            errorHandler("Matrices cannot be empty.");
        }
        if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
            errorHandler("Matrices must have the same dimensions for subtraction.");
        }
        return matrix1.map((row, i) => row.map((val, j) => val - matrix2[i][j]));
    }

    // Multiply two matrices
    //% block="matrix multiplication $matrix1 and $matrix2" matrix1.defl=0 matrix2.defl=0
    //% matrix1.shadow="array" matrix2.shadow="array"
    export function matrixMultiplication(matrix1: Matrix, matrix2: Matrix): Matrix {
        if (matrix1.length === 0 || matrix2.length === 0) {
            errorHandler("Matrices cannot be empty.");
        }
        if (matrix1[0].length !== matrix2.length) {
            errorHandler("Number of columns in the first matrix must equal number of rows in the second matrix for multiplication.");
        }
        let result: Matrix = [];
        for (let i = 0; i < matrix1.length; i++) {
            result[i] = [];
            for (let j = 0; j < matrix2[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < matrix2.length; k++) {
                    sum += matrix1[i][k] * matrix2[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }
}
