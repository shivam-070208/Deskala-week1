//* https://leetcode.com/problems/move-zeroes/description/

/*
This solution efficiently solves the Two Sum problem using a hash map (implemented here via JavaScript's Map).
Here's how it works:
1. It iterates through the array of numbers once.
2. For each number, it computes its "complement"—the value needed to reach the target sum (i.e., target - current number).
3. It checks if this complement has already been seen (i.e., is stored in the map). If so, it means a pair has been found, and their indices are returned.
4. Otherwise, it records the current number and its index in the map for future lookups.
This approach ensures each number is processed at most twice, resulting in an efficient O(n) time complexity.
*/
/*
* Time Complexity:
* Best Case: O(1) - if the answer is found at the very first iteration.
* Worst Case: O(n) - if the answer is at the end of the array or does not exist.
* Average Case: O(n) - since we might need to traverse most of the array on average.
* Space Complexity: O(n) - due to the auxiliary hash map.
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