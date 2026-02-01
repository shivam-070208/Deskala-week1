//* https://leetcode.com/problems/powx-n/
/*
 * This function computes x raised to the power of n.
 * The function returns the result of x^n.
 *
 * Example:
 * Input: x = 2, n = 10
 * Output: 1024
 * Explanation: 2^10 = 1024
 *
 * Time Complexity:
 * O(log n) - The algorithm uses a logarithmic number of operations to compute the power.
 * Best Case: O(1) - If n is 0, the function returns 1 immediately.
 * Worst Case: O(log n) - If n is a large positive or negative number, the algorithm performs a logarithmic number of operations.
 * Average Case: O(log n) - In most cases, the algorithm performs a logarithmic number of operations.
 * Space Complexity:
 * O(1) - The algorithm uses only a constant amount of space.
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