/* 10. Generic Linked List (Expert)

Implement a generic LinkedList<T> class with methods:
- append(value: T)
- prepend(value: T)
- find(value: T): ListNode<T> | null
- remove(value: T): boolean
- Iteration support (for...of).
*/

interface ListNode<T> {
    value: T,
    next: number,
}

class LinkedList<T> {
    start: ListNode<T> = null

    append(value: T) {

    }
    prepend(value: T) {

    }
    find(value: T): ListNode<T> {

    }
    remove(value: T): boolean {

    }
    next(): ListNode<T> {

    }

}
