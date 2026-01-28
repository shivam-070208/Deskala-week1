//*https://leetcode.com/problems/reverse-string/
/*
/*
* This function solves the "Reverse String" problem by reversing the characters of the input string array in place.
- It uses two pointers, starting at the leftmost and rightmost indices, and swaps the elements at these pointers while moving them towards the center.
- The operation is performed in-place and does not allocate extra space for another array.

* Example:
Input: s = ["a","b","c","d","e"]
After reverse: s = ["e","d","c","b","a"]

* Time Complexity:
* O(n) - Each character is visited at most once (half are swapped with the other half).
* Space Complexity:
* O(1) - No extra space is allocated; only a few variables are used for swapping.
*/

function reverseString(s: string[]): void {
    let left =0;
    let right =s.length-1;
    while(left<right){
        const temp =s[right];
        s[right] =s[left];
        s[left]=temp;
        left++;
        right--;
    } 
};
const string =["a","b","c","d","e"]
reverseString(string)
console.log(string)