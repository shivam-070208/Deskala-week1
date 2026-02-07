import { ListNode } from "../types/list-node";
//* https://leetcode.com/problems/intersection-of-two-linked-lists/description/
/*
 * This function finds the intersection node of two singly linked lists.
 * If two singly linked lists intersect, returns the reference to the node where the intersection begins; otherwise, returns null.
 *
 * Example:
 * Input: 
 * List A: 4 -> 1 \
 *                   8 -> 4 -> 5
 * List B:     5 -> 0 -> 1 /
 * Output: 8
 *
 * Time Complexity:
 * O(m + n) - where m and n are the lengths of two linked lists.
 *
 * Space Complexity:
 * O(1) - Uses only pointers without extra space.
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

 let pointerA: ListNode | null = headA;
 let pointerB: ListNode | null = headB;

 while (pointerA !== pointerB) {
   pointerA = pointerA ? pointerA.next : headB;
   pointerB = pointerB ? pointerB.next : headA;
 }

 return pointerA; 
};

const common = new ListNode(8, new ListNode(4, new ListNode(5)));
const headA = new ListNode(4, new ListNode(1, common));
const headB = new ListNode(5, new ListNode(0, new ListNode(1, common)));

console.log(getIntersectionNode(headA, headB)?.val); // Output should be 8
