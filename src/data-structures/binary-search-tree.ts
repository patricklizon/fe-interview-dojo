interface IBSTNode<T> {
  value: T;
  left: IBSTNode<T> | undefined;
  right: IBSTNode<T> | undefined;
}

class BSTNode<T> implements IBSTNode<T> {
  constructor(value: T, left?: IBSTNode<T>, right?: IBSTNode<T>) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  value: T;
  left: IBSTNode<T> | undefined;
  right: IBSTNode<T> | undefined;
}

interface IBST<T> {
  root: BSTNode<T> | undefined;
  add(value: T): void;
  toObject(): BSTNode<T> | undefined;
}

export class BinarySearchTree<T> implements IBST<T> {
  constructor() {
    this.root = undefined;
  }

  root: BSTNode<T> | undefined;

  public toObject(): BSTNode<T> | undefined {
    return this.root;
  }

  public add(value: T): void {
    if (!this.root) {
      this.root = new BSTNode(value);
      return;
    }

    let current = this.root;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new BSTNode(value);
          break;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new BSTNode(value);
          break;
        }
      }
    }
  }
}
