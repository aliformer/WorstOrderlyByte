class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
export class Iterator {
    constructor(context) {
      this.head = null;
    }
  
    // Add a node to the beginning of the linked list
    prepend(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode; 
    }
  
    // Add a node to the end of the linked list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    // Print the linked list
    print() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  

 export function arrayToLinkedList(arr) {
    const linkedList = new Iterator();
    for (const element of arr) {
      linkedList.append(element);
    }
    return linkedList;
  }