import { TreeNode } from "../types/tree-node.ts";

//* https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
/*
 * This function calculates the maximum depth of a binary tree.
 * It recursively finds the depth of the left and right subtrees and returns the maximum plus one for the current root.
 *
 * Example:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 * Explanation: The maximum depth is 3 (root -> 20 -> 15 or root -> 20 -> 7).
 */
function maxDepth(root: TreeNode | null): number {
    if(root === null)
      return 0;
    const left_depth : number = maxDepth(root.left);
    const right_depth : number = maxDepth(root.right);
  
    return Math.max(left_depth,right_depth) + 1  
  };

const tree = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(tree)); 
/*
 * This function calculates the maximum depth of a binary tree.
 * It recursively computes the depth by exploring left and right subtrees.
 *
 * Time Complexity:
 * O(n) - Each node is visited exactly once (where n is the number of nodes in the tree).
 *
 * Space Complexity:
 * O(h) - The maximum space on the call stack is the height of the tree (h),
 * which is O(n) in the worst case (unbalanced) and O(log n) in the best case (balanced).
 */