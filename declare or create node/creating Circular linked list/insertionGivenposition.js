class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

// Function to insert a node at a specific position in a
// circular linked list
function insertAtPosition(last, data, pos)
{
    if (last === null) {
        // If the list is empty
        if (pos !== 1) {
            console.log("Invalid position!");
            return last;
        }
        // Create a new node and make it point to itself
        let newNode = new Node(data);
        last = newNode;
        last.next = last;
        return last;
    }

    // Create a new node with the given data
    let newNode = new Node(data);

    // curr will point to head initially
    let curr = last.next;

    if (pos === 1) {
        // Insert at the beginning
        newNode.next = curr;
        last.next = newNode;
        return last;
    }

    // Traverse the list to find the insertion point
    for (let i = 1; i < pos - 1; ++i) {
        curr = curr.next;

        // If position is out of bounds
        if (curr === last.next) {
            console.log("Invalid position!");
            return last;
        }
    }

    // Insert the new node at the desired position
    newNode.next = curr.next;
    curr.next = newNode;

    // Update last if the new node is inserted at the end
    if (curr === last)
        last = newNode;

    return last;
}

// Function to print the circular linked list
function printList(last){
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

// Insert elements at specific positions
let data = 5;
let pos = 2;
last = insertAtPosition(last, data, pos);
console.log("List after insertions: ");
printList(last);