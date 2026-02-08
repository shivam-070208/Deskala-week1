//* https://leetcode.com/problems/move-zeroes/description/

/*
 * This function efficiently solves the "Move Zeroes" problem.
 * It moves all 0's in the given array to the end while maintaining the relative order of the non-zero elements.
 * The operation is done in-place without making a copy of the array.
 *
 * Example:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0] (nums modified in-place)
 */
function moveZeroes(nums: number[]): void {
    let zeroIndex: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[zeroIndex]] = [nums[zeroIndex], nums[i]];
            zeroIndex++;
        }
    }
};

const nums = [1, 0, 3, 0, 3, 4];
moveZeroes(nums)
console.log(nums)

/*
 * Time Complexity:
 * Best:    O(n) - Each element is checked once when no zeros present (all non-zeros).
 * Average: O(n) - Every element is checked exactly once, most typical cases.
 * Worst:   O(n) - All zeros are at the start or end, but still each element is checked once and possibly swapped.
 *
 * Space Complexity:
 * O(1) - Operates fully in-place, only a fixed few variables are needed.
 */