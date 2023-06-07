//
class User {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
  greet(msg = "") {
    console.log(
      `hello my name is ${this.name} and i am a ${this.job}  and ${msg}`
    );
  }

  updateName(newName, newJob) {
    this.name = newName;
    this.job = newJob;
    console.log(newName, newJob);
  }
}

// let muly = new User("muly", "doctor");
// muly.updateName("gili", "dancer");
// muly.greet("toaster");

// let ar = [0, 1, 2, 0, 0, 0];
// let ar2 = [3, 4, 5];
// ar = [...ar, ...ar2];
// console.log(ar);

// console.log(gili);

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

// console.log(arr, "OG");
// console.log(addElement(arr, 7));

// let mulugeta = {
//   name: "muly",
//   job: "hopefully programmer",
// };
// let { job } = mulugeta;
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
}

const newList = new LinkedList(1);
newList.push(2);
newList.push(3);
console.log(newList.unShift(4));
