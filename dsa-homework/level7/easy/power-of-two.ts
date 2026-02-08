//* https://leetcode.com/problems/power-of-two/description/

/*
 * This function checks if a given integer n is a power of two.
 * A number is a power of two if it is greater than zero and there exists an integer x such that n == 2^x.
 *
 * Example:
 * Input: n = 16
 * Output: true
 * Explanation: 16 = 2^4, so it is a power of two.
 */
function isPowerOfTwo(n: number): boolean {
    return n <= 0 ? false : !(n & (n - 1));
};
console.log(isPowerOfTwo(16));

/*
 * Time Complexity:
 * Best:    O(1)      - Single check if n <= 0, immediately return false.
 * Average: O(1)      - Always a constant number of operations (one bitwise op, one comparison).
 * Worst:   O(1)      - Always, regardless of input, performs a small constant number of operations.
 *
 * Space Complexity:
 * O(1) - Uses only a constant amount of space, regardless of input.
 */