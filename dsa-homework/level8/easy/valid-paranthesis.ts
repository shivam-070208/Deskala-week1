//* https://leetcode.com/problems/valid-parentheses/
/*
 * This function checks if a string containing only parentheses is valid.
 * A valid string is one where every opening bracket has a corresponding closing bracket in the correct order.
 *
 * Example:
 * Input: s = "()[]{}"
 * Output: true
 */

function isValid(s: string): boolean {
    const openCharParanthesis: string[] = '({['.split('');
    const closeParanthesis: string[] = ')}]'.split('');
    const stack: string[] = [];
    let stringArray: string[] = s.split('');
    let char: string | undefined = stringArray.pop();
    while (char) {
        if (openCharParanthesis.includes(char)) {
            let p = stack.pop();
            let index = openCharParanthesis.indexOf(char);
            if (p != closeParanthesis[index]) return false;
        } else if (closeParanthesis.includes(char)) {
            stack.push(char);
        }
        char = stringArray.pop();
    }
    return !stack.length;
};
console.log(isValid("()[]{}"));

/*
 * Time Complexity:
 * Best:    O(1)      - If the input is an empty string (""), we return immediately.
 * Average: O(n)      - Each character is visited and processed once.
 * Worst:   O(n)      - Each character is visited and may be pushed onto the stack.
 *
 * Space Complexity:
 * Best:    O(1)      - Empty string, stack never grows.
 * Average: O(n)      - Stack may hold up to n/2 brackets in typical use.
 * Worst:   O(n)      - All opening brackets (like "(((((((((("), stack grows to length n.
 */