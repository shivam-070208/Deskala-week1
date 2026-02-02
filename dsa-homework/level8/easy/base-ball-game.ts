//* https://leetcode.com/problems/baseball-game/description/
/*
 * This function calculates the total score for a baseball game based on operations provided as an array of strings.
 * The operations can be:
 *  - An integer: Record a new score.
 *  - "+": Record a new score that is the sum of the previous two scores.
 *  - "D": Record a new score that is double the previous score.
 *  - "C": Invalidate and remove the previous score.
 *
 * Example:
 * Input: operations = ["5","2","C","D","+"]
 * Output: 30
 * Explanation:
 * 5  -> record 5, scores = [5]
 * 2  -> record 2, scores = [5,2]
 * C  -> remove 2, scores = [5]
 * D  -> double previous (5*2=10), scores = [5,10]
 * +  -> sum previous two (5+10=15), scores = [5,10,15]
 * Total = 5 + 10 + 15 = 30
 *
 * Time Complexity:
 * O(n) - Process each operation once.
 * Space Complexity:
 * O(n) - Store up to all scores.
 */

function calPoints(operations: string[]): number {
    const scorestack:number[] = [];
    for( let char of operations){
        if( char === "C"){
            scorestack.pop()
        }else if( char === "D"){
            const p =scorestack.pop();
            scorestack.push(p!,2*p!);
        } else if ( char === "+"){
            const p1 = scorestack.pop();
            const p2 = scorestack.pop();
            scorestack.push(p2!,p1!, p1!+p2!); 
        } else {
            scorestack.push(Number(char))
        }
    }
    return scorestack.reduce((n,red)=>{
       return red+=n;
        
    },0)
};
console.log(calPoints(["5","2","C","D","+"]))