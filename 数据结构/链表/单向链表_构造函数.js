// 当前封装的列表，默认第一个节点的下标是0
// 封装链表类 (第一个节点是 0，还是1，需要考虑；要考虑到 创建链表对象的时候并没有新建节点)
function LinkedList(){
    // 内部的类：节点类
    function Node(data){
        this.data = data
        this.next = null
    }
    // 属性
    this.head = null 
    this.length = 0  // 记录链表的长度

    // 追加方法
    // 1.append方法
    LinkedList.prototype.append = function (data) {
        // 1.创建新的节点
        let newNode = new Node(data)

        // 2.判断是否添加的是第一个节点
        if(this.length == 0){ // 2.1是第一个节点
            
            this.head = newNode
        } else {              // 2.2不是第一个节点
            // 找到最后一个节点
                // 通过head一个个往后找到最后一个节点，并将最后一个节点的 next 指向新创建的节点
            let current = this.head
                // 将 current 指向最后一个节点
            while(current.next){ // 判断 next 是否为空，若next为空说明是最后一个节点，若不是最后一个节点则往后找最后一个节点
                current = current.next  
            }
            // 最后一个节点的 next 指向新创建的节点
            current.next = newNode
        }
        // 3.length + 1
        this.length += 1
        
    }
    // 2.toString方法
    LinkedList.prototype.toString = () => {
        // 1.定义变量
        let current = this.head
        let listString = ''
        // 2.循环获取一个个的节点
        while(current){
            listString += current.data + ' '
            current = current.next
        }
        return listString
    }
    // 3.insert()方法
    LinkedList.prototype.insert = (position,data) => {
        // 1.对 position 进行越界判断（负数不合理，position大于length不合理 ）
        if(position < 0 || position > this.length) return false
        // 2. 根据data创建 newNode
        let newNode = new Node(data)
        // 3. 判断插入的位置是否是第一个
        if(position == 0) {
            // 先将新节点指向原来的第一个节点，这样才不会丢失原来的节点
            newNode.next = this.head
            // 再将新节点变为第一个节点
            this.head = newNode
        } else {
            // 先找到要插入的地方
            let index = 0
            let current = this.head
            let previous = null
            while(index++ < position){
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }
        // 4.length + 1
        this.length += 1
        return true
    }
    // 4.get方法
    LinkedList.prototype.get = (position) => {
        // 一旦传入位置信息，最好先做越界判断
        // 1.越界判断
        if(position < 0 || position >= this.length) return null
        let current = this.head
        let index = 0
        // while(index++ < position){
        //     current = current.next
        // }
        while(index < position){
            current = current.next
            index++
        }
        return current.data
    }
    // 5.indexOf方法
    LinkedList.prototype.indexOf = (data) => {
        // 1.定义变量
        let current = this.head
        let index = 0
        // 2.开始查找
        while(current){
            if(current.data === data) return index
            current = current.next
            index += 1
        }
        // 3.找到最后没有找到，返回 -1 
        return -1
    }
    // 6.update()方法
    LinkedList.prototype.update = (position,data) => {
        // 1.越界判断
        if(position < 0 || position >= this.length) return false
        // 2.查找正确的节点
        let index = 0
        let current = this.head
        while(index++ < position){
            current = current.next
        }
        // 3.将position位置的node的data修改
        current.data = data
        return true
    }
    // 7.removeAt() 方法
    LinkedList.prototype.removeAt = (position) => {
        // 1.越界判断
        if(position < 0 || position >= this.length) return null
        // 2.判断是否删除的是第一个节点
        let current = this.head
        if(position == 0){
            this.head = this.head.next
        } else {
            let index = 0
            let previous = null
            while(index++ < position){
                previous = current
                current = current.next
            }
            // 前一个节点的next指向current的next即可
            previous.next = current.next
        }
        // 3.length - 1
        this.length -= 1
        return current.data
    }
    // 8.remove 方法
    LinkedList.prototype.remove = (data) => {
        // 1.获取data在链表中的位置
        let position = this.indexOf(data)

        // 2.根据位置信息，删除节点
        return this.removeAt(position)
    }
    // 9. isEmpty() 方法
    LinkedList.prototype.isEmpty = () => {
        return this.length === 0
    }
    // 10. size() 方法
    LinkedList.prototype.size = () => {
        return this.length
    }
}  

// 测试代码
// 1.创建LinkedList
let list = new LinkedList()

// 2.测试append方法
list.append('abc')
list.append('cde')
list.append('efg')
console.log(list)
console.log(list.toString())
// 4.测试inset方法
list.insert(2,'我是新增的')
// 5.测试get方法
console.log(list.get(2))
// console.log(list)
console.log(list.toString())
// 6.测试 indexOf 方法
console.log(list.indexOf('abc'))
// 7.测试 update 方法
console.log(list.update(2,'我把新增的数据修改了'))
console.log(list.toString())
// 8.测试 removeAt 方法
// console.log(list.removeAt(2))
// console.log(list.toString())
// 9.测试 remove 方法
console.log(list.remove('我把新增的数据修改了'))
console.log(list.toString())
// 10.测试 isEmpty() 方法 和 size() 方法
console.log(list.isEmpty())
console.log(list.size())