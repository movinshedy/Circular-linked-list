class Node {
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

// Function to insert a node at the beginning of the
// circular linked list
function insertAtBeginning(last, value)
{
    const newNode = new Node(value);

    // If the list is empty, make the new node point to
    // itself and set it as last
    if (last === null) {
        newNode.next = newNode;
        return newNode;
    }

    // Insert the new node at the beginning
    newNode.next = last.next;
    last.next = newNode;

    return last;
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
const first = new Node(2);
first.next = new Node(3);
first.next.next = new Node(4);
let last
    = first.next.next; // Using let to allow reassignment
last.next = first;

console.log("Original list: ");
printList(last);

// Insert 5 at the beginning
last = insertAtBeginning(last, 5);

console.log("List after inserting 5 at the beginning: ");
printList(last);
