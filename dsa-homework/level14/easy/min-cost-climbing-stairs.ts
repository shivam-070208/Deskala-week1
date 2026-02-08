//* https://leetcode.com/problems/min-cost-climbing-stairs/description/
/*
 * This function solves the "Min Cost Climbing Stairs" problem.
 * Each index in the input array 'cost' represents the cost to step on that stair.
 * You can start at index 0 or index 1, and at each step you can climb 1 or 2 stairs.
 * The function returns the minimum cost to reach the top of the floor (beyond the last stair).
 *
 * Example:
 * Input: cost = [10, 15, 20]
 * Output: 15
 * Explanation: Cheapest is start on step 1 (cost[1] = 15), then take a single step to the top.
 *
 */
function minCostClimbingStairs(cost: number[]): number {
    let step: number = cost.length -1;
    let p1:number = 0;
    let p2 : number =0;
    while(step>=0){
        let current = Math.min(p1,p2) + cost[step];
        p2 = p1;
        p1 = current;
      step--;
    }
    return Math.min(p1,p2);
};

console.log(minCostClimbingStairs([10,15,20]));


/*
 * Time Complexity:
 * O(n) - We process each stair once in a single while loop (n = cost.length)
 *
 * Space Complexity:
 * O(1) - Only a constant amount of extra space is used (p1, p2, current, step)
 */
