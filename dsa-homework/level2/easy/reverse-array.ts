//* https://leetcode.com/problems/reverse-string/
/*
* This function solves the "Reverse String" problem by reversing the characters
* of the input string array in place using two pointers.
* The function swaps characters from the ends towards the center without extra space.
*
* Example:
* Input:  s = ["a","b","c","d","e"]
* Output: s = ["e","d","c","b","a"]
*/

function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}

const string = ["a", "b", "c", "d", "e"];
reverseString(string);
console.log(string);

/*
 * Time Complexity:
 * Best:    O(1)      - If the array is empty or has a single element.
 * Average: O(n)      - Each index pair is swapped once moving towards center.
 * Worst:   O(n)      - All pairs from front and back are swapped (n/2 swaps).
 *
 * Space Complexity:
 * O(1) - Only a constant amount of extra space is used (for temp and indices).
 */