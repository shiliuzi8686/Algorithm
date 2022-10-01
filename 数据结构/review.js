// 单向列表
function LinkedList(){
    this.head = null
    this.length = 0
    function newNode(value){
        this.data = value
        this.next = null
    }
    LinkedList.prototype.append = function(data) {
        const newN = new newNode(data)
        if(this.length === 0){
            this.head = newN
        } else {
            let curNode = this.head
            while(curNode.next){
                curNode = curNode.next
            }
            curNode.next = newN
        }
        this.length++
    }
    LinkedList.prototype.insert = function(data,targetIndex) {
        const newN = new newNode(data)
        if(targetIndex === 0){
            newN.next = this.head
            this.head = newN
        } else {
            let curNode = this.head
            let curIndex = 1
            while(targetIndex > curIndex){
                curNode = curNode.next
                curIndex++
            }
            newN.next = curNode.next
            curNode.next = newN
        }
        return true
    }
    LinkedList.prototype.toString = function() {
        let curNode = this.head
        let resStr = " "
        while(curNode){
            resStr += curNode.data
            curNode = curNode.next
        }
        return resStr
    }
    LinkedList.prototype.get = function(targetIndex){
        let curIndex = 0
        let curNode = this.head
        while(curIndex !== targetIndex){
            curNode = curNode.next
            curIndex++
        }
        return curNode.data
    }
    LinkedList.prototype.indexOf = function(data) {
        let curIndex = 0
        let curNode = this.head
        while(curNode){
            if(curNode.data === data) return curIndex
            curNode = curNode.next
            curIndex++
        }
        return -1
    }
    LinkedList.prototype.removeAt = function(targetIndex) {
        if(targetIndex === 0) this.head = this.head.next
        else {
            let curIndex = 1
            let curNode = this.head
            while(targetIndex > curIndex){
                curIndex++
                curNode = curNode.next
            }
            curNode.next = curNode.next.next
        }
        return true
    }
}

let linkedlist1 = new LinkedList()
linkedlist1.append('1')
linkedlist1.append('3')
linkedlist1.insert('2',1)
linkedlist1.append('4')
// console.log(linkedlist1.get(2))
// console.log(linkedlist1.indexOf('4'))
// console.log(linkedlist1.toString())
// console.log(linkedlist1.removeAt(2))
// console.log(linkedlist1.toString())


// 双向链表
function DoublyLinkedList(){
    function newNode(value){
        this.data = value
        this.next = null
        this.prev = null
    }
    // 第一个节点
    this.head = null
    // 最后一个节点
    this.tail = null
    this.length = 0
    DoublyLinkedList.prototype.append = function(data){
        const newN = new newNode(data)
        if(this.length === 0){
            this.head = newN
            this.tail = newN
        } else {
            this.tail.next = newN
            newN.prev = this.tail
            this.tail = newN
        }
        this.length++
    }
    DoublyLinkedList.prototype.toString = function(){
        let curNode = this.head
        let resStr = ' '
        while(curNode){
            resStr += curNode.data
            curNode = curNode.next
        }
        return resStr
    }
}
let DoublyLinkedList_1 = new DoublyLinkedList()
DoublyLinkedList_1.append('1')
DoublyLinkedList_1.append('2')
// console.log(DoublyLinkedList_1.toString())

// set
function mySet(){
    this.items = {}
    mySet.prototype.add = function(item){
        if(this.has(item)) return false
        this.items[item] = item
        return true
    }
    mySet.prototype.has = function (item) {
        return this.items.hasOwnProperty(item)
    }
    mySet.prototype.values = function(){
        return Object.values(this.items)
    }
}

let mySet_1 = new mySet()
mySet_1.add('1')
mySet_1.add('2')
mySet_1.add('2')
// console.log(mySet_1.values())

// 二叉搜索树
function BinarySearchTree(){
    this.root = null
    function newNode(data){
        this.data = data
        this.left = null
        this.right = null
    }
    BinarySearchTree.prototype.insert = function (data){
        let newN = new newNode(data)
        if(this.root === null) this.root = newN
        else this.insertNode(this.root,newN)
    }
    BinarySearchTree.prototype.insertNode = function (node,newNode){
        if(newNode.data > node.data){
            if(node.right === null) node.right = newNode
            else this.insertNode(node.right,newNode)
        } else {
            if(node.left === null) node.left = newNode
            else this.insertNode(node.left,newNode)
        }
    }
    // 树的遍历
    BinarySearchTree.prototype.preOrderTraversal = function(handler){
        this.preOrderTraversalNode(this.root,handler)
    }
    BinarySearchTree.prototype.preOrderTraversalNode = function(node,handler){
        if(node !== null){
            handler(node.data)
            this.preOrderTraversalNode(node.left,handler)
            this.preOrderTraversalNode(node.right,handler)
        } 
    }
    BinarySearchTree.prototype.midOrderTraversal = function(handler){
        this.midOrderTraversalNode(this.root,handler)
    }
    BinarySearchTree.prototype.midOrderTraversalNode = function(node,handler){
        if(node !== null){
            this.midOrderTraversalNode(node.left,handler)
            handler(node.data)
            this.midOrderTraversalNode(node.right,handler)
        } 
    }
    BinarySearchTree.prototype.postOrderTraversal = function(handler){
        this.postOrderTraversalNode(this.root,handler)
    }
    BinarySearchTree.prototype.postOrderTraversalNode = function(node,handler){
        if(node !== null){
            this.postOrderTraversalNode(node.left,handler)
            this.postOrderTraversalNode(node.right,handler)
            handler(node.data)
        } 
    }
}
let BinarySearchTree_1 = new BinarySearchTree()

// BinarySearchTree_1.insert(4)
// BinarySearchTree_1.insert(5)
// BinarySearchTree_1.insert(6)
// BinarySearchTree_1.insert(1)
// BinarySearchTree_1.insert(2)
// BinarySearchTree_1.insert(3)
// console.log('先序遍历----')
// BinarySearchTree_1.preOrderTraversal( (data) => {
//     console.log(data)
// })
// console.log('中序遍历----')
// BinarySearchTree_1.midOrderTraversal( (data) => {
//     console.log(data)
// })
// console.log('后序遍历----')
// BinarySearchTree_1.postOrderTraversal( (data) => {
//     console.log(data)
// })


// 冒泡排序
function bubbleSort(arr){
    const len = arr.length
    //两两对比，双重for循环
    for(let i = len - 1;i > 0;i--){
        for(let j = 0;j < i;j++){
            if(arr[j] > arr[j + 1]) {
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    }
    return arr
}
// console.log(bubbleSort([5,8,1,6,9,2,3,4]))

// 选择排序
function selectionSort(arr){
    const len = arr.length
    for(let i = 0;i < len - 1;i++){
        for(let j = i + 1;j < len;j++){
            if(arr[j] < arr[i]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr
}
// console.log(selectionSort([5,8,1,6,9,2,3,4,12]))

