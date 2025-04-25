interface Node<T> {
    value: T;
    next?: Node<T>;
}


export default class Queue<T> {
    public length: number;

    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode: Node<T> = {
            value: item,
        };

        if (!this.head || !this.tail) {
            this.head = this.tail = newNode;
            this.length++;
            return;
        }

        this.tail.next = newNode;
        this.tail = this.tail.next;
        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const node = this.head;
        this.head = this.head.next;

        this.length--;

        // If the list is now empty, update tail as well
        if (!this.head) {
            this.tail = undefined;
        }

        return node.value;
    }

    peek(): T | undefined {
        if (!this.head || !this.tail) {
            return undefined;
        }
        return this.head.value;
    }
}
