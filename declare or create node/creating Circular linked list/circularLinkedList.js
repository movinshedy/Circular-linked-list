// Initilize and allocate memory for nodes
let first = new Node(2);
let second = new Node(3);
let last = new Node(4);

// Connect nodes
first.next = second;
second.next = last;
last.next = first;
