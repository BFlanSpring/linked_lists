/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let poppedNode = this.tail.val;
    if (this.head === null){
      throw new Error("The list is empty. Cannot pop.");
    }
    if (this.head === this.tail){
      this.head = null;
      this.tail = null;
    }
    else{ 
    let current = this.head;
    while(current.next !== this.tail) {
      current = current.next;
    }
    this.tail = current;
    this.tail.next = null;
  }

  this.length --;

  return poppedNode;

  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      throw new Error("The list is empty. Cannot shift.");
    }
    let shiftedNode = this.head.val;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
    return shiftedNode;
  }
  

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.head === null) {
      throw new Error("The list is empty. Cannot find value.");
    }
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of range.");
    }
    let currentNode = this.head;
    let currentIndex = 0;
  
    while (currentIndex < idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode.val;
  }
  
  /** setAt(idx, val): set val at idx to val */
  
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of range.");
    }
    let currentNode = this.head;
    let currentIndex = 0;
  
    while (currentIndex < idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    currentNode.val = val;
  }


  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of range.");
    }
    let previousNode = null;
    let currentNode = this.head;
    let currentIndex = 0;
    if (idx === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < idx) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
      previousNode.next = currentNode.next;
      if (idx === this.length - 1) {
        this.tail = previousNode;
      }
    }
    this.length--;
    return currentNode.val;
  }
  

  
  average() {
    if (this.head === null) {
      throw new Error("The list is empty. Cannot find average.");
    }
    let sum = 0;
    let currentNode = this.head;
    let currentIndex = 0;
  
    while (currentNode !== null) {
      const amt = currentNode.val; 
      sum += amt; 
      currentNode = currentNode.next;
      currentIndex++;
    }
  
    const avg = sum / currentIndex;
    return avg;
  }


  reverse() {
    if (this.head === null || this.head.next === null) {
    }
  
    let previousNode = null;
    let currentNode = this.head;
  
    while (currentNode !== null) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = previousNode;
  }
}

  