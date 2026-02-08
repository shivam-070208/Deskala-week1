//* https://leetcode.com/problems/powx-n/
/*
 * This function computes x raised to the power of n.
 * The function returns the result of x^n.
 *
 * Example:
 * Input: x = 2, n = 10
 * Output: 1024
 * Explanation: 2^10 = 1024
 */

function myPow(x: number, n: number): number {
    if (n === 1) {
        return x;
    }
    if (x === 1) {
        return x;
    }
    if (n === 0) {
        return 1;
    }
    let neg: boolean = n < 0;
    n = Math.abs(n);
    let pow: number = 1;
    while (n > 0) {
        if (n % 3 === 0) {
            x = x * x * x;
            n = Math.floor(n / 3);
        } else if (n % 2 === 0) {
            x = x * x;
            n = Math.floor(n / 2);
        } else {
            pow = pow * x;
            n--;
        }
    }
    if (neg) {
        return 1 / pow;
    }
    return pow;
};
console.log(myPow(2, 10));

/*
 * Time Complexity:
 * Best:    O(1)      - If n is 0, the function immediately returns 1.
 * Average: O(log n)  - For most values of n, the function performs logarithmic steps.
 * Worst:   O(log n)  - For large n, the function performs a logarithmic number of operations.
 *
 * Space Complexity:
 * Best:    O(1)
 * Average: O(1)
 * Worst:   O(1)
 */