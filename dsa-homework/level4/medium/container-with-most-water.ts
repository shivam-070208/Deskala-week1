// https://leetcode.com/problems/container-with-most-water/description/
/*
 * This function solves the "Container With Most Water" problem.
 * Given an array of non-negative integers representing the heights of lines on a coordinate plane,
 * it finds two lines that, together with the x-axis, form a container containing the most water.
 *
 * Example:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The maximum area (water that can be held) is produced by the lines at index 1 and 8.
 *
 * Time Complexity:
 * O(n) - The algorithm examines each line at most once using the two-pointer technique.
 *
 * Space Complexity:
 * O(1) - Only a constant number of variables are used.
 */

function maxArea(height: number[]): number {
    let MAX_AREA = 0;
    let lp = 0;
    let lr = height.length-1;
    while(lp<lr){
        const hl = height[lp];
        const hr = height[lr];
        const area = (lr-lp)*Math.min(hl,hr);
        if(area>MAX_AREA) MAX_AREA=area;
        if(hl<hr) lp++;
        else lr--;
        
    }
    return MAX_AREA;
};
maxArea([1,8,6,2,5,4,8,3,7]);