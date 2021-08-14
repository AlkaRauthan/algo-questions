// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

class Node{

    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }

}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertFirst(record){
        this.head = new Node(record,this.head);
    }
}


function midpoint(list) {
    let slow = list.head;
    let fast = list.head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const linkedList = new LinkedList();
linkedList.insertFirst(5);
linkedList.insertFirst(6)
linkedList.insertFirst(7)
linkedList.insertFirst(8)
linkedList.insertFirst(9)

module.exports = midpoint;
