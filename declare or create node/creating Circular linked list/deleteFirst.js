class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteFirstNode(last) {
    if (last === null) {
        // If the list is empty
        console.log("List is empty");
        return null;
    }

    let head = last.next;

    if (head === last) {
        // If there is only one node in the list
        last = null;
    } else {
        // More than one node in the list
        last.next = head.next;
    }

    return last;
}

function printList(last) {
    if (last === null) return;

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

// Delete the first node
last = deleteFirstNode(last);

console.log("List after deleting first node: ");
printList(last);