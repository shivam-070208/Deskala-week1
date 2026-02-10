import { TreeNode } from "../types/tree-node.ts";

//* https://leetcode.com/problems/path-sum/description/
/*
 * This function determines if the tree has a root-to-leaf path such that adding up all the values along the path equals the target sum.
 *
 * Example:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * Output: true
 * Explanation: The path 5->4->11->2 sums to 22.
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(root=== null)
        return false;
    if(root.left === null && root.right === null && targetSum === root.val)
        return true
    const isleft = hasPathSum(root.left, targetSum - root.val);
    const isright = hasPathSum(root.right,targetSum - root.val);
    return isleft || isright
};

const tree = new TreeNode(5, 
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null), 
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);
const sum = 22;
console.log(hasPathSum(tree, sum)); 


/*
 * Time Complexity:
 * Best:    O(1)      - If the root is null or the path sum is found at the root.
 * Average: O(n)      - In general, each node may need to be visited.
 * Worst:   O(n)      - All n nodes are visited (e.g., if no path sum exists or in a skewed tree).
 *
 * Space Complexity:
 * O(h) - The maximum space on the call stack is the height of the tree (h),
 * which is O(n) in the worst case (unbalanced) and O(log n) in the best case (balanced).
 */