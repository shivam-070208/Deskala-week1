//* https://leetcode.com/problems/house-robber/description/
/*
 * This function solves the "House Robber" problem.
 * You are given an array nums representing the amount of money stored in each house.
 * You cannot rob two adjacent houses. Determine the maximum amount of money you can rob.
 *
 * Example:
 * Input: nums = [2, 1, 1, 2]
 * Output: 4
 * Explanation: Rob house 1 (2) and house 4 (2) for a maximum sum of 4.
 */
function rob(nums: number[]): number {
    let p1:number =0;
    let p2:number =0;
     for( const num of nums){
        const curr = Math.max(p1,p2+num);
        p2 = p1;
        p1 = curr;
     }
     return p1;
};


console.log(rob([2,1,1,2]))

/*
 * Time Complexity:
 * O(n) - We process each house once in a single loop (n = nums.length)
 *
 * Space Complexity:
 * O(1) - Only a constant amount of extra space is used (p1, p2, curr)
 */

