//* https://leetcode.com/problems/evaluate-reverse-polish-notation/

/*
 * This function evaluates the value of an arithmetic expression in Reverse Polish Notation (RPN).
 * Supported operators are +, -, *, and /. Each operand may be an integer or another expression.
 *
 * Example:
 * Input: tokens = ["2", "1", "+", "3", "*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 *
 * Time Complexity:
 * O(n) - Each token is processed once.
 * Space Complexity:
 * O(n) - Stack may hold up to n/2 numbers in the worst case.
 */
function evalRPN(tokens: string[]): number {
    const stack :number[] = [];
    let p1:number;
    let p2:number;
    for(const token of tokens){
        switch(token){
            case '+':
                p1 = stack.pop()!
                p2 = stack.pop()!
                stack.push(p2+p1);
                break;
            case '-':
                p1 = stack.pop()!
                p2 = stack.pop()!
                stack.push(p2-p1);
                break;
            case '*':
                p1 = stack.pop()!
                p2 = stack.pop()!
                stack.push(p2*p1);
                break;
            case '/':
                p1 = stack.pop()!
                p2 = stack.pop()!
                stack.push(Math.trunc(p2/p1));
                break;
            default:
                stack.push(Number(token))

        }
    }
    return stack.pop()!;
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+"]));