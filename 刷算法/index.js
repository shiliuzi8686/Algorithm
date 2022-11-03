
    // function mergeTwoLists(listNode1,listNode2){
    //     let p1 = listNode1.head
    //     let p2 = listNode2.head
    //     let newListNode = new LinkedList()
    //     while(p2 !== null || p1 !== null){
    //         console.log(10)
    //         if(p2 !== null && p1 !== null){ //两个节点都存在
    //             console.log(9)
    //             if(p1.data > p2.data){
    //                 newListNode.append(p2.data)
    //                 p2 = p2.next
    //             } else {
    //                 newListNode.append(p1.data)
    //                 p1 = p1.next
    //             }
    //             continue
    //         }
    //         if(p1 === null){ //p1不存在，p2存在
    //             console.log(8)
    //             newListNode.append(p2.data)
    //             p2 = p2.next
    //             continue
    //         }
    //         if(p2 === null){ //p2不存在，p1存在
    //             console.log(7)
    //             newListNode.append(p1.data)
    //             p1 = p1.next
    //             continue
    //         }
    //     }
    //         // 对于不等长的两个链表存在问题
    //         // while(p2 !== null && p1 !== null){
    //         //     if(p1.data > p2.data){
    //         //         newListNode.append(p2.data)
    //         //         p2 = p2.next
    //         //     } else {
    //         //         newListNode.append(p1.data)
    //         //         p1 = p1.next
    //         //     }
    //         // }
    //         // if(p1 !== null){
    //         //     newListNode.append(p1.data)
    //         // }
    //         // if(p2 !== null){
    //         //     newListNode.append(p2.data)
    //         // }
    //     return newListNode
    // }
    // let listNode1 = new LinkedList()
    // listNode1.append(1)
    // listNode1.append(2)
    // listNode1.append(4)
    // listNode1.append(8)
    // listNode1.append(9)
    // console.log(listNode1.toString())
    // let listNode2 = new LinkedList()
    // listNode2.append(1)
    // listNode2.append(3)
    // listNode2.append(4)
    // console.log(listNode2.toString())
    // console.log(mergeTwoLists(listNode1,listNode2).toString())

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// function partition(head, x) {
//     // 存放小于x 的链表的虚拟头节点
//     let less = new ListNode()
//     let p_less = less
//     let more = new ListNode()
//     let p_more = more
//     let p = head
//     // p负责遍历原链表
//     while(p){
//         if(p.val >= x){
//             p_more.next = p
//             p_more = p_more.next
//         } else {
//             p_less.next = p
//             p_less = p_less.next
//         }
//         // 断开原链表中的每个节点的 next 指针
//         let temp = p.next
//         p.next = null
//         p = temp
//     }
//     // 连接两个链表
//     p_less.next = more
//     return less
// }
// let link1_head = new ListNode(2)
// let link1 = link1_head
// link1.next = new ListNode(1)
// link1 = link1.next
// link1.next = new ListNode(3)
// link1 = link1.next
// link1.next = new ListNode(6)
// link1 = link1.next
// link1.next = new ListNode(9)
// link1 = link1.next
// link1.next = new ListNode(4)
// link1 = link1.next
// console.log(link1_head)
// console.log(partition(link1_head,5))

// 删除链表的倒数第N个节点


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let link1_head = new ListNode(1)
let link1 = link1_head
link1.next = new ListNode(2)
link1 = link1.next
link1.next = new ListNode(3)
link1 = link1_head
// 打印链表1
while(link1){
    // console.log('链表1---')
    // console.log(link1.val)
    link1 = link1.next
}

let link2_head = new ListNode(9)
let link2 = link2_head
link2.next = new ListNode(8)
link2 = link2.next
link2.next = new ListNode(7)
link2 = link2.next
link2.next = new ListNode(6)
link2 = link2_head
// 打印链表2
while(link2){
    // console.log('链表2---')
    // console.log(link2.val)
    link2 = link2.next
}

// 两条链表相交测试
function getIntersectionNode(head1,head2){
    let p1 = head1
    let p2 = head2
    let i = 0
    while(p1 !== p2){
        console.log(++i)
        p1 = p1 === null ? head2 : p1.next
        p2 = p2 === null ? head1 : p2.next
    }
    console.log('p1',p1)
    console.log('p2',p2)
}
// getIntersectionNode(link1_head,link2_head)
