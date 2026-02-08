// https://leetcode.com/problems/climbing-stairs/description/
/*
 * This function solves the "Climbing Stairs" problem.
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * The function returns the number of distinct ways you can climb to the top.
 *
 * Example:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top:
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */
function climbStairs(n: number): number {
    if (n === 0 || n === 1) return 1;
    if (n === 2) return 2;            

    let first = 1; 
    let second = 2;

    
    for (let i = 3; i <= n; i++) {
        const temp = first + second;
        first = second;
        second = temp;
    }
    return second;
}
console.log(climbStairs(10));

/*
 ? Time Complexity:
 * Time (Best):    O(n)
 * Time (Worst):   O(n)
 * Time (Average): O(n)
 ? Space Complexity:   O(1)
 */