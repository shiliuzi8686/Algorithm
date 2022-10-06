class PriorityQueue {
    constructor(){
        this.arr = []
    }
    getLeftIndex(parentIndex){
        return parentIndex * 2
    }
    getRightIndex(parentIndex){
        return parentIndex * 2 + 1
    }
    getParentIndex(childIndex){
        return Math.floor(childIndex / 2)
    }
    hasLeft(parentIndex){
        return this.getLeftIndex(parentIndex) < this.arr.length
    }
    hasRight(parentIndex){
        return this.getRightIndex(parentIndex) < this.arr.length
    }
    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0
    }
    getLeft(parentIndex){
        return this.arr[this.getLeftIndex()]
    }
    getRight(parentIndex){
        return this.arr[this.getRightIndex()]
    }
    getParent(childIndex){
        return this.arr[this.getParent(childIndex)]
    }
    less(index1,index2){
        return index1 < index2
    }
    // 数组的两个元素交换位置
    swap(index1,index2){
        ;[this.arr[index1],this.arr[index2]] = [this.arr[index2],this.arr[index1]]
    }
    // 获取堆顶的第一个元素
    peek(){
        return this.arr[0]
    }
    // 弹出堆顶元素，堆大小发生变化
    delMax(){
        if(this.arr.length === 0) return null
        if(this.arr.length === 1) return this.arr[0]
        let item = this.arr[0]
        this.arr[0] = this.arr.pop()
        // this.
    }
    // 上浮swim
    swim(index){
        // 浮到堆顶，就不能再上浮了
        while(index > 0 && this.less(parent(x),x)){
            this.swap()
        }
    }
    // 下沉sink
    sink(){

    }
}