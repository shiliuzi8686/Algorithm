// 这里的双向链表的 第一个节点 的索引为0，即就是this.head（head指向第一个节点），即this.head指向的节点索引为0
// 封装双向链表
function DoublyLinkedList (){
    // 内部的类，用于创建节点
    function Node(data){
        this.data = data
        this.next = null
        // this.prev = prev
    }
    // 属性
    this.head = null
    this.tail = null
    this.length = 0
    // 常见的操作：方法
    // 1.append方法
    DoublyLinkedList.prototype.append = (data) => {
        // 1.根据 data 创建节点
        let newNode = new Node(data)
        // 2.判断添加的是否是第一个节点
        if(this.length == 0){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        // 3.length + 1
        this.length += 1
    }
    // 2.将链表转成字符串形式
    // 2.1 toString 方法
    DoublyLinkedList.prototype.toString = () => {
        return this.backwardString()
    }
    // 2.2 forwardString 方法
    DoublyLinkedList.prototype.forwardString = () => {
        // 1.定义变量
        let current = this.tail
        let resultString = ""
        // 2.依次向前遍历，获取每一个节点
        while(current){
            resultString += current.data + " "
            current = current.prev
        }
        return resultString
    }
    // 2.3 backwardString 方法
    DoublyLinkedList.prototype.backwardString = () => {
        // 1.定义变量
        let current = this.head  // head 是指向第一个节点的，除非第一个节点没有才会指向null
        // let index = 0
        // let BoublyLinkedListStr = current.data + " "
        // while(current.next){
        //     current = current.next
        //     BoublyLinkedListStr += current.data + " "
        // }
        let BoublyLinkedListStr = ""
        // 依次向后遍历，获取每一个节点
        while(current){
            BoublyLinkedListStr += current.data + " "
            current = current.next
        }
        return BoublyLinkedListStr
    }
    // 3.insert 方法
    DoublyLinkedList.prototype.insert = (position,data) => {
        // 1.越界判断
        if(position < 0 || position > this.length) return false
        // 2.根据data创建新的节点
        let newNode = new Node(data)
        // 3.判断原来的链表是否为空 ，在这里就可以看出 将 Node 封装成一个内部类 的优点了，每次的data，只需要在创建 Node 实例对象的时候传进就可以了，而不需要在修改指针的时候穿插给新节点放入data的代码
        if(this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            if(position == 0){ // 3.1 判断position是否为0
                // this.head.prev = newNode
                // newNode.next = this.head
                // this.head = newNode
                newNode.next = this.head
                this.head.prev = newNode
                this.head = newNode
            } else if(position == this.length){ // 3.2 position == length
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
            } else {     // 3.3 其他情况                         
                // 找到要插入的位置
                let index = 0
                let current = this.head
                while(index < position){
                    index++
                    current = current.next
                }
                // 修改指针
                newNode.prev = current.prev
                newNode.next = current
                current.prev.next = newNode
                current.prev = newNode
            }
        }
        // length + 1
        this.length += 1
        return true
    }
    // 4.get 方法
    DoublyLinkedList.prototype.get = (position) => {
        // 1.越界判断
        if(position < 0 || position >= this.length) return null
        // 2.获取元素
        let current = this.head   // current 指向第一个节点 , 故index肯定初始化为0，因为我们写的时候默认第一个节点的索引是0,这样的话Index这个索引在哪，current就指向index所在索引的节点
        let index = 0
        while(index++ < position){
            current = current.next
        }
        return current.data
    }
    // indexOf()方法
    DoublyLinkedList.prototype.indexOf = (data) => {
        // 1.定义变量
        let current = this.head
        let index = 0
        // 2.查找和datda相同的节点
        while(current){
            if(current.data === data) return index
            current = current.next
            index++
        }
        return -1 
    }
    // update() 方法
    DoublyLinkedList.prototype.update = (position,newData) => {
        // 1.越界判断
        if(position < 0 || position >= this.length) return false
        // 2. 找到正确的节点
        let current = this.head
        let index = 0
        while(index++ < position){
            current = current.next
        }
        // 3.修改找到节点的data信息
        current.data = newData

        return true
    }
    // removeAt() 方法
    DoublyLinkedList.prototype.removeAt = (position) => {
        // 1.越界判断
        if(position < 0 || position >= this.length) return null
        // 2.判断是否只有一个节点
        let current = this.head  // 放在这里是为了方便返回 current
        if(this.length == 1){
            this.head = null
            thia.tail = null
        } else {
            if(position == 0){  // 判断删除的是否为第一个节点
                // this.head.next = this.head.next.next //错误
                // this.head.prev = null 
                this.head.next.prev = null
                this.head = this.head.next
            } else if(position == this.length - 1){ // 最后节点
                current = this.tail
                this.tail = this.tail.prev
                this.tail.next = null
            } else {
                let index = 0
                while(index++ < position){
                    current = current.next
                }
                current.prev.next = current.next
                current.next.prev = current.prev
            }
        }
        // 3.length - 1
        this.length -= 1
        return current.data 
    }
    // remove 方法
    DoublyLinkedList.prototype.remove = (position) => {
        return this.removeAt(this.indexOf(position))
    }
    // 9.isEmpty 方法
    DoublyLinkedList.prototype.isEmpty = () => {
        return this.length === 0
    }
    // 10. size 方法
    DoublyLinkedList.prototype.size = () => {
        return this.length
    }
    // 11. 获取链表的第一个节点
    DoublyLinkedList.prototype.getHead = () => {
        return this.head.data
    }
    // 12. 获取链表的最后一个节点
    DoublyLinkedList.prototype.getTail = () => {
        return this.tail.data
    }
}

// 测试代码
// 1.测试append方法
let DoublyList = new DoublyLinkedList()
// DoublyList.append('1')
// DoublyList.append('2')
// DoublyList.append('3')
// console.log(DoublyList)
// 2.测试 toString 方法
// console.log(DoublyList.toString())
// console.log(DoublyList.backwardString())
// console.log(DoublyList.forwardString())
// 3.测试 insert 方法
DoublyList.insert(0,'1')
DoublyList.insert(0,'2')
DoublyList.insert(2,'3')
console.log(DoublyList.toString())
// 4.测试 get 方法
console.log(DoublyList.get(1))
// 5.测试 indexOf 方法
console.log(DoublyList.indexOf('1'))
// 6.测试 update 方法
console.log(DoublyList.update(2,'修改的data'))
console.log(DoublyList.toString())
// 7.测试 removeAt 方法
console.log(DoublyList.removeAt(2))
console.log(DoublyList.toString())
// 8.测试 remove 方法
console.log(DoublyList.removeAt(0))
console.log(DoublyList.toString())
// 测试其他方法
console.log(DoublyList.isEmpty())
console.log(DoublyList.size())
console.log(DoublyList.getHead())
console.log(DoublyList.getTail())