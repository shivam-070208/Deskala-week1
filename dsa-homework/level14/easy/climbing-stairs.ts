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
 *
 * Time Complexity:
 * O(n) - We compute the result in a single pass from 2 to n.
 *
 * Space Complexity:
 * O(1) - The algorithm uses only a fixed number of variables (not proportional to n), so space usage is constant.
 */
function climbStairs(n: number): number {
    const stack:number[] =[0];
    for(let i=1;i<=n;i++){
      let l1 =stack.pop()!;
      if(i==1 || i==2){
          stack.push(l1,l1+1);
      }
      else {
          let l2 = stack.pop()!;
          stack.push(l1,l1+l2)
      }
    }
    return stack.pop()!;
};
console.log(climbStairs(10));