//* https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1899728382/
/*
* This function solves the "Remove Duplicates from Sorted Array" problem (https://leetcode.com/problems/remove-duplicates-from-sorted-array/).
- It modifies the input sorted array in-place to remove duplicates.
- It iterates over the array, removing consecutive duplicate values using splice.
- The function returns the new length of the array after duplicates have been removed.

* Example:
Input: nums = [1,1,2]
After: nums = [1,2], returns 2
*/
function removeDuplicates(nums: number[]): number {
    let prev:number|undefined;
    for(let i =0;i<nums.length;i++){
       if(prev===nums[i]){
        nums.splice(i,1);
        i--;
       }
        prev = nums[i];
    }
    return nums.length;
};

const numsInput = [1,1,2]
console.log(numsInput,removeDuplicates(numsInput))

/*
 * Time Complexity:
 * Best:    O(n)     - If no duplicates exist (or only a few at the start), each element is checked once, and few splices happen.
 * Average: O(n^2)   - On average, splice is called for repeated consecutive duplicates, shifting elements each time.
 * Worst:   O(n^2)   - If every number is duplicated (e.g., [1,1,1...]), each splice causes all elements after to be shifted left.
 *
 * Space Complexity:
 * O(1) - No extra array or data structure used; operation done in place.
 */