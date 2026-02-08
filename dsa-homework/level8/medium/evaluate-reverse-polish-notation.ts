//* https://leetcode.com/problems/evaluate-reverse-polish-notation/

/*
 * This function evaluates the value of an arithmetic expression in Reverse Polish Notation (RPN).
 * Supported operators are +, -, *, and /. Each operand may be an integer or another expression.
 *
 * Example:
 * Input: tokens = ["2", "1", "+", "3", "*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
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

/*
 * Time Complexity:
 * Best:    O(1)      - If the input has only a single number.
 * Average: O(n)      - Each token is processed once, n = tokens.length.
 * Worst:   O(n)      - Each token is processed once, n = tokens.length.
 *
 * Space Complexity:
 * O(n) - Stack may hold up to about n/2 numbers in the worst case (so, O(n)).
 */