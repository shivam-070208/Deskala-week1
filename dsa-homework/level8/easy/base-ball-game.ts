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
 */

function calPoints(operations: string[]): number {
    const scores: number[] = [];
    for (const op of operations) {
        if (op === "C") {
            scores.pop();
        } else if (op === "D") {
            scores.push(2 * scores[scores.length - 1]);
        } else if (op === "+") {
            scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
        } else {
            scores.push(Number(op));
        }
    }
    return scores.reduce((sum, val) => sum + val, 0);
}
console.log(calPoints(["5","2","C","D","+"]));

/*
 * Time Complexity:
 * Best:    O(1)      - If operations is empty.
 * Average: O(n)      - Each operation processed once, where n = operations.length.
 * Worst:   O(n)      - Each operation processed once, where n = operations.length.
 *
 * Space Complexity:
 * Best:    O(1)      - If operations is empty.
 * Average: O(n)      - scores array could store up to n items.
 * Worst:   O(n)      - scores array stores nearly all n results.
 */