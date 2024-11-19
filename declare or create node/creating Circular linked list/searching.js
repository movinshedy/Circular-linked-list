class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

function search(last, key){
    if (last === null) {
        // If the list is empty
        return false;
    }

    let head = last.next;
    let curr = head;

    // Traverse the list to find the key
    while (curr !== last) {
        if (curr.data === key) {
            // Key found
            return true;
        }
        curr = curr.next;
    }

    // Check the last node
    if (last.data === key) {
        // Key found
        return true;
    }
    // Key not found
    return false;
}

function printList(last){
    if (last === null)
        return;

    let head = last.next;
    while (true) {
        process.stdout.write(head.data + " ");
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

console.log("Original list:");
printList(last);

// Search for a specific value
let key = 3;
let found = search(last, key);
if (found) {
    console.log(`Value ${key} found in the list.`);
}
else {
    console.log(`Value ${key} not found in the list.`);
}