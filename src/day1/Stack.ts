interface Node<T> {
    value: T,
    next?: Node<T>
};

export default class Stack<T> {
    public length: number;

    private head?: Node<T>;

    constructor() {
        this.length = 0;
    }

    push(item: T): void {
        const newNode: Node<T> = { value: item, next: undefined };

        this.length++;

        if (!this.head) {
            this.head = newNode;
            return;
        }

        const chain = this.head;
        this.head = newNode;
        this.head.next = chain;
    }
    pop(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        const node = this.head;
        this.head = node.next;
        return node.value;
    }
    peek(): T | undefined {
        return this.head?.value
    }
}
