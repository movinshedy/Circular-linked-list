class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteSpecificNode(last, key) {
    if (last === null) {
        // If the list is empty
        console.log("List is empty, nothing to delete.");
        return null;
    }

    let curr = last.next;
    let prev = last;

    // If the node to be deleted is the only node in the list
    if (curr === last && curr.data === key) {
        last = null;
        return last;
    }

    // If the node to be deleted is the first node
    if (curr.data === key) {
        last.next = curr.next;
        return last;
    }

    // Traverse the list to find the node to be deleted
    while (curr !== last && curr.data !== key) {
        prev = curr;
        curr = curr.next;
    }

    // If the node to be deleted is found
    if (curr.data === key) {
        prev.next = curr.next;
        if (curr === last) {
            last = prev;
        }
    } else {
        // If the node to be deleted is not found
        console.log("Node with data " + key + " not found.");
    }

    return last;
}

function printList(last) {
    if (last === null) {
        console.log("List is Empty");
        return;
    }

    let head = last.next;
    while (true) {
        console.log(head.data + " ");
        head = head.next;
        if (head === last.next) break;
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

// Delete a specific node
let key = 3;
last = deleteSpecificNode(last, key);

console.log("List after deleting node " + key + ": ");
printList(last);