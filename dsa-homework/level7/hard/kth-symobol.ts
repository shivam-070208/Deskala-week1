// https://leetcode.com/problems/k-th-symbol-in-grammar/

/*
 * This function returns the k-th symbol in n-th row of the grammar table.
 *
 * We are given the following grammar table:
 * Row 1: 0
 * Row 2: 0 1
 * Row 3: 0 1 1 0
 * Row 4: 0 1 1 0 1 0 0 1
 * and so on, where each 0 becomes 0 1, and each 1 becomes 1 0 for the next row.
 *
 * Example:
 * Input: n = 4, k = 5
 * Output: 1
 * Explanation: In row 4, the sequence is 01101001, and the 5th symbol is 1.
 *
 * Time Complexity:
 * Best Case: O(1) - When n = 1, the function returns immediately.
 * Worst Case: O(n) - The deepest recursion occurs for general n, leading to stack depth of n.
 * Average Case: O(n) - The average depth of recursion is proportional to n.
 * Space Complexity:
 * O(n) - Stack space due to recursion.
 */


function kthGrammar(n: number, k: number): number {
    if (n === 1) return 0;
    const parent = kthGrammar(n - 1, Math.ceil(k / 2));
    return k % 2 === 1 ? parent : parent ^ 1;
}