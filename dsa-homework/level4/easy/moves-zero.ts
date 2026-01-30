//*https://leetcode.com/problems/move-zeroes/description/

/*
 * This function efficiently solves the "Move Zeroes" .
 * It moves all 0's in the given array to the end while maintaining the relative order of the non-zero elements.
 * The operation is done in-place without making a copy of the array.
 *
 * Example:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0] (nums modified in-place)
 *
 * Time Complexity:
 * Time Complexity:
 * Best case: O(n) - If the array consists of only non-zero elements, each element is checked once.
 * Worst case: O(n) - If the array consists of only zero elements, or all zeros are at the start, still each element is processed once.
 * (In all cases, each element is touched at most twice: once for checking and possibly once for swapping.)
 *
 * Space Complexity:
 * O(1) - Operates in-place, uses only a fixed amount of extra space.
 */
 function moveZeroes(nums: number[]): void {
    let zeroIndex:number = 0;
  for(let i =0;i<nums.length;i++){
    if(nums[i]!=0){
        [nums[i],nums[zeroIndex]] = [nums[zeroIndex],nums[i]];
        zeroIndex++;
    }
  }
    
};

const nums=[1,0,3,0,3,4];
moveZeroes(nums)
console.log(nums)