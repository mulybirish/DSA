//

// let ar = [0, 1, 2, 0, 0, 0];
// let ar2 = [3, 4, 5];
// ar = [...ar, ...ar2];
// console.log(ar);

// currying

// function add(num1) {
//   return (num2) => {
//     return num1 * num2;
//   };
// }
// let timesTen = add(10);
// console.log(add(3)(2));

// add element to the end of the array
// let arr = [1, 2, 3, 4, 5, 6];
// function addElement(array, element) {
//   return [...array, element];
// }

// let a = [1, 2, 3];
// let b = a;
// a.push(4);
// console.log(b, "b");
// const getExData = async () => {
//   const response = await fetch(
//     "https://zylalabs.com/api/392/exercise+database+api/309/list+of+body+parts"
//   );
//   const data = await response.json();
//   console.log(data);
// };
// getExData();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // WRITE LL CONSTRUCTOR HERE //
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      //   this.head = this.head.next;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    // const newNode = new Node(value);
    // check if no nodes in the list
    if (!this.head) return undefined;

    // if there is more two nodes
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;

    this.length--;
    // what if we have only 1 node after the decrement !
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    //
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    // get the index
    let temp = this.get(index);
    if (temp) {
      // if temp is not null insert a new value
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    // op 1
    if (index === 0) return this.unShift(value);
    //op 2
    if (index === this.length) return this.push(value);
    // if index doesnt exsit
    if (index < 0 || index > this.length) return false;

    // to insert somewhere in the list
    const newNode = new Node(value);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.get(index);
    let before = this.get(index - 1);
    let after = this.get(index + 1);
    // tutorial solution
    // before.next = temp ;
    // before.next = temp.next
    // temp.next = null

    // my solution
    before.next === null;
    temp.next = after;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

const newList = new LinkedList(1);
newList.push(2);
newList.push(3);
newList.unShift(4);
// console.log(newList.shift());
console.log(newList.set(1, 8));
// console.log(newList.insert(1, 9));
// console.log(newList.remove(1), "del");
// console.log(newList.remove(2), "del");
// console.log(newList.remove(0), "del");
// console.log(newList.remove(0), "del");
console.log(newList.reverse());
