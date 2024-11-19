class Node {
    constructor(value)
    {
        this.data = value;
        this.next = null;
    }
}

function insertInEmptyList(last, data)
{
    if (last !== null)
        return last;

    // Create a new node
    let newNode = new Node(data);

    // Point newNode to itself
    newNode.next = newNode;

    // Update last to point to the new node
    last = newNode;
    return last;
}

function printList(last)
{
    if (last === null)
        return;

    // Start from the head node
    let head = last.next;
    while (true) {
        console.log(head.data);
        head = head.next;
        if (head === last.next)
            break;
    }
}

// Main function

let last = null;

// Insert a node into the empty list
last = insertInEmptyList(last, 1);

// Print the list
console.log("List after insertion:");
printList(last);