//*https://leetcode.com/problems/first-missing-positive/
/*
* This function efficiently solves the "First Missing Positive" problem as described at https://leetcode.com/problems/first-missing-positive/.
- It finds the smallest missing positive integer from the given unsorted integer array.
- The solution uses a Set to track all positive integers in the array, and then checks for the first missing value starting from 1 up to the max found in the array.
- If all 1..max positive integers are present, returns max + 1 as the missing value.

* Example:
Input: nums = [1,2,0]
Output: 3

* Time Complexity:
* Time Complexity:
* Best Case: O(n) - All positive integers from 1 to max exist and are checked once.
* Average Case: O(n) - Each element is processed for set insertion and at most n checks are made.
* Worst Case: O(2n) - All elements are unique positive integers up to n, so we still process each element and check up to n, then a second loop as it has all positive at last.
* Space Complexity:
* O(n) - Due to usage of a Set for tracking presence.
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
console.log(firstMissingPositive([1,2,0]))