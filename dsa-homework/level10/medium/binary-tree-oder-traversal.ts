import { TreeNode } from "../types/tree-node.ts";

//* https://leetcode.com/problems/binary-tree-level-order-traversal/description/

/*
 * This function returns the level order traversal of a binary tree as a 2D array.
 *
 * Example:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 * Explanation: The tree's nodes are visited level by level from left to right.
 */
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const result: number[][] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            levelValues.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(levelValues);
    }

    return result;
}

const exampleRoot = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(levelOrder(exampleRoot));


/*
 * Time Complexity:
 * O(n) - Every node in the binary tree is visited exactly once.
 *
 * Space Complexity:
 * O(m) - Where m is the maximum number of nodes at any level (the width of the tree).
 *        In the worst case (a completely full or balanced tree), this is O(n/2), which is O(n).
 *        The result array also takes up O(n) space for storing all values.
 */
