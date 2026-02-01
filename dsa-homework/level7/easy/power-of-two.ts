//* https://leetcode.com/problems/power-of-two/description/

/*
 * This function checks if a given integer n is a power of two.
 * A number is a power of two if it is greater than zero and there exists an integer x such that n == 2^x.
 *
 * Example:
 * Input: n = 16
 * Output: true
 * Explanation: 16 = 2^4, so it is a power of two.
 *
 * Time Complexity:
 * O(1) - The check is performed with a single bitwise operation.
 *
 * Space Complexity:
 * O(1) - The algorithm uses only a constant amount of space.
 */
function isPowerOfTwo(n: number): boolean {
    return n<=0?false:!(n&(n-1));
};
console.log(isPowerOfTwo(16));