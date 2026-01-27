//*https://leetcode.com/problems/rotate-array/description/
/*
*This function efficiently solves the "Rotate Array" problem by rotating the array to the right by k steps.
- It first normalizes k in case it's greater than the array's length (since rotating by the length is a no-op).
- Then, it moves the last k elements to the front, effectively rotating the array.
- The operation is done in-place on the input array.

*Example:
Input: nums = [1,2,3,4,5,6,7], k = 3
After rotation: nums = [5,6,7,1,2,3,4]
*/
/*
* Time Complexity:
* O(n) - For each case.
* Space Complexity:
* O(n) - Due to auxillary newarr.
*/
function rotate(nums: number[], k: number): void {
    const step = k>nums.length?k%nums.length:k;
    const newarr = nums.splice(0,nums.length-step);
    nums.push(...newarr);
};
const nums = [1,2,3,4,5,6,7]
rotate(nums,3)
console.log(nums)