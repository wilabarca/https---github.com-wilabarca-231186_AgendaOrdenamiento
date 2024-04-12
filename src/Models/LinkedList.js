import { Node } from './Node.js';

export class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(nombre, numeroTelefono) {
    let newNode = new Node({ nombre, numeroTelefono });
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  toArray() {
    let current = this.head;
    let array = [];
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  remove(nombre) {
    if (!this.head) {
      return;
    }

    if (this.head.data.nombre === nombre) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current && current.data.nombre !== nombre) {
      previous = current;
      current = current.next;
    }

    if (!current) {
      return; 
    }

    previous.next = current.next;
  }
}
