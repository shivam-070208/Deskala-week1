//* https://leetcode.com/problems/first-missing-positive/
/*
 * This function efficiently solves the "First Missing Positive" problem.
 * It finds the smallest missing positive integer from the given unsorted integer array.
 * The solution uses a Set to track all positive integers in the array, and then checks for the first missing value starting from 1 up to the max found in the array.
 * If all 1..max positive integers are present, returns max + 1 as the missing value.
 *
 * Example:
 * Input: nums = [1,2,0]
 * Output: 3
 */

function firstMissingPositive(nums: number[]): number {
    const seen = new Set<number>();
    let max = 0;

    for (const num of nums) {
        if (num > 0) {
            seen.add(num);
            max = Math.max(max, num);
        }
    }

    for (let i = 1; i <= max; i++) {
        if (!seen.has(i)) return i;
    }
    return max + 1;
}

console.log(firstMissingPositive([1, 2, 0]));

/*
 * Time Complexity:
 * Best:    O(n)      - All positive integers from 1 to max exist and are checked once.
 * Average: O(n)      - Each element is processed for set insertion, and at most n checks are made.
 * Worst:   O(2n)     - All elements are unique positive integers up to n, so each element is processed and checked, then an extra iteration.
 *
 * Space Complexity:
 * O(n) - Due to usage of a Set for tracking presence.
 */