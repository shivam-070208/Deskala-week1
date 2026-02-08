//* https://leetcode.com/problems/two-sum/description/
/*
This solution efficiently solves the Two Sum problem using a hash map (implemented here via JavaScript's Map).
Here's how it works:
1. It iterates through the array of numbers once.
2. For each number, it computes its "complement"—the value needed to reach the target sum (i.e., target - current number).
3. It checks if this complement has already been seen (i.e., is stored in the map). If so, it means a pair has been found, and their indices are returned.
4. Otherwise, it records the current number and its index in the map for future lookups.
This approach ensures each number is processed at most twice, resulting in an efficient O(n) time complexity.
*/

function twoSum(nums: number[], target: number): number[] {
    const numToIndex = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement)!, i];
        }
        numToIndex.set(num, i);
    }
    return [-1, -1];
};

console.log(twoSum([2,7,11,15],9))

/*
 * Time Complexity:
 * Best:    O(1)      - If a solution is found at the very beginning.
 * Average: O(n)      - Typically need to traverse most of the array to find a pair.
 * Worst:   O(n)      - Have to check all elements, such as when the answer is at the end or doesn't exist.
 *
 * Space Complexity:
 * O(n) - Uses a hash map to store up to n elements.
 */