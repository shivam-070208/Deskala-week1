//* https://leetcode.com/problems/valid-parentheses/
/*
 * This function checks if a string containing only parentheses is valid.
 * A valid string is one where every opening bracket has a corresponding closing bracket in the correct order.
 *
 * Example:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Time Complexity:
 * O(n) - Each character is processed once.
 * Space Complexity:
 * O(n) - In the worst case, the stack contains all opening brackets.
 */

function isValid(s: string): boolean {
    const openCharParanthesis:string[] = '({['.split('');
    const closeParanthesis:string[] = ')}]'.split('');
    const stack:string[] = [];
    let stringArray:string[] = s.split('');
    let char:string | undefined= stringArray.pop()
    while( char){
        if(openCharParanthesis.includes(char) ){
            let p = stack.pop();
            let index = openCharParanthesis.indexOf(char);
            if(p != closeParanthesis[index]) return false;
        } else if(closeParanthesis.includes(char)){
         stack.push(char);
        }
        char = stringArray.pop()
    }
    return !stack.length;
};
console.log(isValid("()[]{}"));