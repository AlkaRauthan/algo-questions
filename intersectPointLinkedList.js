/// By Numbers
//Repeatiting numbers will fail
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

    size(){
        let node = this.head;
        let counter = 0;
        while(node){
            counter++
            node = node.next;
        }
        return counter;
    }

}

const linkedList1 = new LinkedList(); // 9 8 7 6 3 5
linkedList1.insertFirst(5);
linkedList1.insertFirst(3);
linkedList1.insertFirst(6);
linkedList1.insertFirst(7);
linkedList1.insertFirst(8);
linkedList1.insertFirst(9);

const linkedList2 = new LinkedList(); // 2 1 6 3 5
linkedList2.insertFirst(5);
linkedList2.insertFirst(3);
linkedList2.insertFirst(6);
linkedList2.insertFirst(1);
linkedList2.insertFirst(2);

function mergePoint(linkedListA,linkedListB) {
    const countA = linkedListA.size();
    const countB = linkedListB.size();
    let headA = linkedListA.head;
    let headB = linkedListB.head;

    if(countA > countB){
        headA = moveHeadByDifference(headA,countA  - countB);
    }else{
        headB =  moveHeadByDifference(headB,countB  - countA);
    }

    while(headA && headA.data !== headB && headB.data){
        if((headA.next && headA.next.data) === (headB && headB.next.data)){
            return headA.next;
        }
        headA = headA.next;
        headB = headB.next
    }
    return null;

}

function moveHeadByDifference(head,difference){
        while( difference > 0){
            head = head.next;
            difference--;
        }
        return head;
}


const mp = mergePoint(linkedList1,linkedList2);
