class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

// Function to insert a node at the end of a circular linked
// list
function insertEnd(tail, value){
    let newNode = new Node(value);
    if (tail === null) {
        // If the list is empty, initialize it with the new
        // node
        tail = newNode;
        newNode.next = newNode;
    }
    else {
        // Insert new node after the current tail and update
        // the tail pointer
        newNode.next = tail.next;
        tail.next = newNode;
        tail = newNode;
    }
    return tail;
}

// Function to print the circular linked list
function printList(last)
{
    if (last === null)
        return;

    let head = last.next;
    while (true) {
        console.log(head.data + " ");
        head = head.next;
        if (head === last.next)
            break;
    }
    console.log();
}

// Create circular linked list: 2, 3, 4
let first = new Node(2);
first.next = new Node(3);
first.next.next = new Node(4);

let last = first.next.next;
last.next = first;

console.log("Original list: ");
printList(last);

// Insert elements at the end of the circular linked
// list
last = insertEnd(last, 5);
last = insertEnd(last, 6);

console.log("List after inserting 5 and 6: ");
printList(last);