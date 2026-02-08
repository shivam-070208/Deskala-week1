//* https://leetcode.com/problems/rotate-array/description/
/*
 * This function efficiently solves the "Rotate Array" problem by rotating
 * the given array to the right by k steps. If k exceeds the array's length,
 * it normalizes k using modulus to avoid redundant rotations. It removes the leading
 * (n-k) elements and pushes them to the end, effectively rotating the array in-place.
 *
 * Example:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output after rotation: nums = [5,6,7,1,2,3,4]
 */

function rotate(nums: number[], k: number): void {
    const n = nums.length;
    const step = k > n ? k % n : k;
    const moved = nums.splice(0, n - step);
    nums.push(...moved);
}

const numsI = [1, 2, 3, 4, 5, 6, 7];
rotate(numsI, 3);
console.log(nums);

/*
 * Time Complexity:
 * Best:    O(1)      - If nums.length <= 1 or k % n == 0, no operation needed.
 * Average: O(n)      - Splice and push involve n operations for typical k.
 * Worst:   O(n)      - All elements are moved (large k or n).
 *
 * Space Complexity:
 * Best:    O(1)      - No rotation needed, or in-place for empty input.
 * Average: O(n)      - Auxiliary array created by splice for moved elements.
 * Worst:   O(n)      - All elements copied once due to splice.
 */