//* https://leetcode.com/problems/fibonacci-number/
/*
 * This function computes the n-th Fibonacci number.
 * The Fibonacci numbers are defined as:
 * F(0) = 0, F(1) = 1
 * F(n) = F(n-1) + F(n-2) for n > 1
 *
 * Example:
 * Input: n = 5
 * Output: 5
 * Explanation: The sequence is 0, 1, 1, 2, 3, 5
 */

function fib(n: number): number {
    const numToValueMap = new Map<number, number>();
    for (let i = 0; i <= n; i++) {
        if (i == 0 || i == 1) {
            numToValueMap.set(i, i);
            continue;
        }
        numToValueMap.set(i, numToValueMap.get(i - 1)! + numToValueMap.get(i - 2)!);
    }
    return numToValueMap.get(n)!;
};
console.log(fib(5));

/*
 * Time Complexity:
 * Best:    O(1)      - If n is 0 or 1.
 * Average: O(n)      - In general, iterates from 2 to n.
 * Worst:   O(n)      - When n is much greater than 1, must compute all Fibonacci values up to n.
 *
 * Space Complexity:
 * Best:    O(1)      - If n is 0 or 1, only a constant number of entries in map.
 * Average: O(n)      - Keeps a map of all Fibonacci values up to n.
 * Worst:   O(n)      - The map holds n+1 elements if n is large.
 */