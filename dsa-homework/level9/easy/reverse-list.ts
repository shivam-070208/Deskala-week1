
//* https://leetcode.com/problems/reverse-linked-list/
/*
 * This function reverses a singly linked list.
 * Given the head of a singly linked list, it reverses the list and returns the new head.
 *
 * Example:
 * Input: 1 -> 2 -> 3 -> 4 -> 5
 * Output: 5 -> 4 -> 3 -> 2 -> 1
 *
 * Time Complexity:
 * O(n) - We iterate through the list once.
 *
 * Space Complexity:
 * O(n) - The reversal is done by crwating new List.
 */

import { ListNode } from "../types/list-node.ts";






function reverseList(head: ListNode | null): ListNode | null {
    let reversedList:ListNode|null = null;
    let curr:ListNode|null = head;
    while(curr){
            reversedList = new ListNode(curr.val,reversedList);
            curr = curr.next;
    }
    return reversedList;
};
let reversed = reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))));
let result: number[] = [];
while (reversed) {
    result.push(reversed.val);
    reversed = reversed.next;
}
console.log(result);