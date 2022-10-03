// 封装集合类
function newSet() {
    // 属性
    this.items = {}
    // 方法
    // add 方法
    newSet.prototype.add = (value) => {
        // 判断当前集合中是否已经包含了该元素
        if(this.has(value)){
            return false
        }
        // 将元素添加到集合中
        this.items[value] = value
        return true
    }
    // has 方法
    newSet.prototype.has = (value) => {
        return this.items.hasOwnProperty(value)
    }
    // remove 方法
    newSet.prototype.remove = (value) => {
        // 1.判断该集合中是否包含该元素
        if(!this.has(value)) return false
        // 2.将该元素从属性中删除
        delete this.items[value]
        return true
    }
    // clear 方法
    newSet.prototype.clear = () => {
        this.items = {}
    }
    // size 方法
    newSet.prototype.size = () => {
        return Object.keys(this.items).length
    }
    //获取集合中所有的值
    newSet.prototype.values = () => {
        // return Object.keys(this.items)
        return Object.values(this.items) // 严格一点应该是 values
    }
    // 集合间的操作
    // 并集(该方法存在错误)
    newSet.prototype.union = (otherSet) => {
        // this：集合对象A
        // otherSet：集合对象B
        // 1.创建新的集合
        let unionSet = new Set()
        // 2.将A集合中所有的元素都添加到新集合中
        let values = this.values()
        for(let i = 0;i < values.length;i++){
            unionSet.add(values[i])
        }
        console.log(unionSet)
        // 3. 取出B集合中的元素，判断是否需要加到新的集合
        values = otherSet.values()
        for(let i = 0;i < values.length;i++){
            unionSet.add(values[i])
        }
        console.log(unionSet)
        return unionSet
    }
}

// 测试Set类
let set = new newSet()
console.log(set.add('1'))
console.log(set.add('2'))
console.log(set.add('1'))
console.log(set.add('3'))
//     console.log(set.has('1'))
//     console.log(set.values('1'))
//     console.log(set.size())
//     console.log(set.remove('1'))
//     console.log(set.values('1'))
//     console.log(set.clear())
//     console.log(set.values('1'))
// 测试并集
let otherSet = new newSet()
otherSet.add('a')
otherSet.add('b')
otherSet.add('c')
console.log(set.union(otherSet).values())