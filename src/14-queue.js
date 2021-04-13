/ * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(el) {
    if (this.length !== 0) {
      this.end.next = new ListNode(el);
      this.end = this.end.next;
    } else {
      this.end = new ListNode(el);
      this.start = this.end;
    }
    this.length++;
  }

  dequeue() {
    const valueOfQueue = this.start.value;
    if (this.start === this.end) {
      this.end = null;
    }
    this.start = this.start.next;
    this.length -= 1;
    return valueOfQueue;
  }
}

module.exports = Queue;
