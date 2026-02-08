//* https://leetcode.com/problems/container-with-most-water/description/
/*
 * This function solves the "Container With Most Water" problem.
 * Given an array of non-negative integers representing the heights of lines on a coordinate plane,
 * it finds two lines that, together with the x-axis, form a container containing the most water.
 *
 * Example:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The maximum area (water that can be held) is produced by the lines at index 1 and 8.
 */

function maxArea(height: number[]): number {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        maxArea = Math.max(maxArea, h * w);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

maxArea([1,8,6,2,5,4,8,3,7]);

/*
 * Time Complexity:
 * Best:    O(1)      - If the array has fewer than 2 lines, at most one computation is done.
 * Average: O(n)      - Both pointers traverse the array from opposite ends, visiting each element at most once.
 * Worst:   O(n)      - In all practical scenarios, every element is considered as one of the sides.
 *
 * Space Complexity:
 * O(1) - Only a constant amount of extra space is used (pointers and maxArea variable).
 */