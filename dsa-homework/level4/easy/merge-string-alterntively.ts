//https://leetcode.com/problems/merge-strings-alternately/
/*
 * This function solves the "Merge Strings Alternately" problem.
 * It merges two input strings by alternating their characters. If one string is longer,
 * the remainder of that string is appended to the result.
 *
 * Example:
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 *
 * Time Complexity:
 * O(n + m), where n and m are the lengths of the two input strings.
 * Each character from both strings is processed exactly once.
 *
 * Space Complexity:
 * O(n + m) - The result string's length will be n + m in the worst case.
 */
function mergeAlternately(word1: string, word2: string): string {
    let l1:number = word1.length;
    let l2:number = word2.length;

    let minLength:number = Math.min(l1,l2);
    let resultString = "";
    for(let i = 0; i<minLength;i++){
        resultString+=word1[i]+word2[i];
    }
    resultString+=l1>l2?word1.slice(l2,l1):word2.slice(l1,l2);
    return resultString;
};

console.log(mergeAlternately("abc","pqr"))