type Item<T> = T;

export default class ArrayList<T> {
    public length: number;

    private totalSize: number = 0;
    private list: Item<T>[] = new Array(0);

    constructor(size: number = 10) {
        this.length = 0; // start empty!
        this.totalSize = size;
        this.list = new Array(size);
    }

    #capCheck() {
        if (this.length == this.totalSize) {
            const newList = new Array(Math.floor(this.totalSize * 2));

            for (let i = 0; i < this.length; ++i) {
                newList[i] = this.list[i];
            }

            this.list = newList;
            this.totalSize = newList.length;
        }
        return;
    }

    #shiftRightFrom(idx: number) {
        for (let i = this.length - 1; i >= idx; --i) {
            this.list[i + 1] = this.list[i];
        }
    }

    #shiftLeftFrom(idx: number) {
        if (idx < 0 || idx >= this.totalSize) return;

        for (let i = idx; i < this.length - 1; i++) {
            this.list[i] = this.list[i + 1];
        }
    }

    prepend(item: T): void {
        this.#capCheck();

        this.length++;

        this.#shiftRightFrom(0);

        this.list[0] = item;
    }

    insertAt(item: T, idx: number): void {
        this.#capCheck();

        this.length++;

        this.#shiftRightFrom(idx);

        this.list[idx] = item;
    }

    append(item: T): void {
        this.#capCheck();

        this.list[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; ++i) {
            if (this.list[i] === item) {
                const removedItem = this.list[i];
                this.#shiftLeftFrom(i);
                this.length--;
                return removedItem;
            }
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx >= 0 && idx < this.length) {
            return this.list[idx];
        }
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx >= 0 && idx < this.length) {
            const item = this.list[idx];

            this.#shiftLeftFrom(idx)
            this.length--;
            return item
        }
        return undefined;
    }
}
