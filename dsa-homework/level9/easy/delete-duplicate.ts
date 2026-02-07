export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
//* https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
/*
 * This function removes duplicates from a sorted singly linked list.
 * Given the head of a sorted singly linked list, it deletes all duplicates such that each element appears only once and returns the new head.
 *
 * Example:
 * Input: 1 -> 1 -> 2 -> 3 -> 3
 * Output: 1 -> 2 -> 3
 *
 * Time Complexity:
 * O(n) - We iterate through the list once.
 *
 * Space Complexity:
 * O(1) - The operation is done in-place using constant extra space.
 */


function deleteDuplicates(head: ListNode | null): ListNode | null {
    let prev:ListNode|null = null;
    let curr :ListNode|null= head;
    while (curr) {
        if (prev?.val !== curr.val) {
            prev = curr;
            curr = curr.next;
        } else {
            prev.next = curr.next;
            curr = curr.next;
        }
    }
    return head;
};