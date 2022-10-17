const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  
  constructor() {
    this.firstElement = null;
    this.lastElement = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.firstElement.next, this.firstElement;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.firstElement) {
      this.firstElement = node;
      this.lastElement = node;
    } else {
      this.lastElement.next = node;
      this.lastElement = node;
    }
    return this.length++;
  }

  dequeue() {
    if (!this.firstElement) {
      return null;
    }

    let dequeueElement = this.firstElement;

    if (this.firstElement === this.lastElement) {
      this.lastElement = null;
    }else {
    this.firstElement = this.firstElement.next;
    this.length--;
    return dequeueElement.value;
    }
  }
}

module.exports = {
  Queue
};
