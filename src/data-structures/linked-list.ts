interface ILinkedListNode<T> {
  value: T | undefined;
  next: ILinkedListNode<T> | undefined;
}

export class LinkedListNode<T> implements ILinkedListNode<T> {
  constructor(value?: T) {
    this.value = value;
    this.next = undefined;
  }

  public value;
  public next: ILinkedListNode<T> | undefined;
}

interface ILinkedList<T> {
  head: ILinkedListNode<T> | undefined;
  tail: ILinkedListNode<T> | undefined;
  length: number;
  push(value: T): void;
  pop(): T | undefined;
  delete(idx: number): T | undefined;
}

export class LinkedList<T> implements ILinkedList<T> {
  constructor() {
    this.head = undefined;
    this.tail = this.head;
    this.length = 0;
  }

  public length: number;
  public head: ILinkedListNode<T> | undefined;
  public tail: ILinkedListNode<T> | undefined;

  public push(value: T): void {
    const node = new LinkedListNode(value);

    if (!this.head) this.head = node;

    this?.tail && (this.tail.next = node);
    this.tail = node;
    this.length += 1;
  }

  private _findNode(idx: number): ILinkedListNode<T> | undefined {
    if (idx < 0) return undefined;

    let node = this.head;

    while (idx) {
      node = node?.next;
      idx--;
    }

    return node;
  }

  public get(idx: number): T | undefined {
    return this._findNode(idx)?.value;
  }

  public delete(idx: number): T | undefined {
    const current = this._findNode(idx);

    if (!current) return undefined;

    const previous = this._findNode(idx - 1);

    if (previous) {
      previous.next = current.next;
    } else {
      this.head = current.next;
    }

    this.length -= 1;
    this.tail = this._findNode(this.length - 1);

    return current.value;
  }

  public pop(): T | undefined {
    return this.delete(this.length - 1);
  }
}
