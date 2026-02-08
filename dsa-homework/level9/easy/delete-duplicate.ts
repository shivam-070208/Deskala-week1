
//* https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
/*
 * This function removes duplicates from a sorted singly linked list.
 * Given the head of a sorted singly linked list, it deletes all duplicates such that each element appears only once and returns the new head.
 *
 * Example:
 * Input: 1 -> 1 -> 2 -> 3 -> 3
 * Output: 1 -> 2 -> 3
 */

import { ListNode } from "../types/list-node.ts";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}

/*
 * Time Complexity:
 * Best:    O(1)
 * Worst:   O(n)
 * Average: O(n)
 *
 * Space Complexity:
 * O(1)
 */