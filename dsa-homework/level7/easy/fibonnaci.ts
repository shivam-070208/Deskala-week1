//* https://leetcode.com/problems/fibonacci-number/
/*
 * This function computes the n-th Fibonacci number.
 * The Fibonacci numbers are defined as:
 * F(0) = 0, F(1) = 1
 * F(n) = F(n-1) + F(n-2) for n > 1
 *`
 * Example:
 * Input: n = 5
 * Output: 5
 * Explanation: The sequence is 0, 1, 1, 2, 3, 5
 *
 * Time Complexity:
 * O(n) - We compute each Fibonacci value from 2 to n once.
 *
 * Space Complexity:
 * O(1) - The algorithm uses only a constant number of variables.
 */
function fib(n: number): number {
    const numToValueMap = new Map<number,number>();
    for(let i =0;i<=n;i++){
       if(i==0 || i==1){
           numToValueMap.set(i,i);
           continue;
       }
       numToValueMap.set(i,numToValueMap.get(i-1)!+numToValueMap.get(i-2)!);
    }
   return numToValueMap.get(n)!;
};
console.log(fib(5));