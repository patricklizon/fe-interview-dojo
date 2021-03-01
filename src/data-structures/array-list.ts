interface IArrayList<T> {
  length: number;
  push(el: T): void;
  insert(el: T, idx: number): void;
  pop(): T | undefined;
  get(idx: number): T | undefined;
  delete(idx: number): T | undefined;
}

export class ArrayList<T> implements IArrayList<T> {
  constructor(data?: Record<number, T>) {
    this.data = { ...data } ?? {};
    this.length = Object.keys(this.data).length;
  }

  private data: Record<number, T>;
  public length;

  public push(el: T): void {
    this.data[this.length] = el;
    this.length += 1;
  }

  public pop(): T | undefined {
    return this.delete(this.length - 1);
  }

  public get(idx: number): T | undefined {
    return this.data?.[idx];
  }

  public delete(idx: number): T | undefined {
    const removed = this.data[idx];

    for (let i = idx; i < this.length; i++) {
      // @ts-expect-error accessing number
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length -= 1;

    return removed;
  }

  public insert(el: T, idx: number): void {
    for (let i = this.length; i > idx; i--) {
      // @ts-expect-error accessing number
      this.data[i] = this.data[i - 1];
    }

    this.data[idx] = el;
    this.length += 1;
  }
}
