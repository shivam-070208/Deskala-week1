//* https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1899728382/
/*
* This function solves the "Remove Duplicates from Sorted Array" problem (https://leetcode.com/problems/remove-duplicates-from-sorted-array/).
- It modifies the input sorted array in-place to remove duplicates.
- It iterates over the array, removing consecutive duplicate values using splice.
- The function returns the new length of the array after duplicates have been removed.

* Example:
Input: nums = [1,1,2]
After: nums = [1,2], returns 2

* Time Complexity: O(n^2) in the worst case, since splice is called for every duplicate.
* Space Complexity: O(1), as the operation is performed in-place.
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