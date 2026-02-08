//* https://leetcode.com/problems/trapping-rain-water/submissions/1911484750/
/*
 * This function solves the "Trapping Rain Water" problem.
 * Given an array of non-negative integers representing an elevation map where the width of each bar is 1,
 * it calculates how much water can be trapped after raining.
 *
 * Example:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map can trap 6 units of water.
 */

function trap(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                waterTrapped += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                waterTrapped += rightMax - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
}

const elevationMap = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(elevationMap));

/*
 * Time Complexity:
 * Best:    O(1)      - If the array contains less than 2 elements, no water can be trapped.
 * Average: O(n)      - Traverses the elevation map once using the two-pointer technique.
 * Worst:   O(n)      - Traverses the elevation map entirely even for degenerate or challenging layouts.
 *
 * Space Complexity:
 * O(1) - Only a constant amount of extra space is used (left, right, leftMax, rightMax, waterTrapped).
 */