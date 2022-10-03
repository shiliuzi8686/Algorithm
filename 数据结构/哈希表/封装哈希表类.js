// 封装哈希表类
function HashTable() {
    // 属性
    this.storage = [] // 数组
    this.count = 0    // 数组的元素个数
    this.limit = 7    // 数组的长度
    // 方法
    // 哈希函数
    HashTable.prototype.hashFunc = (str,size) => {
        //1.定义hashCode变量
        let hashCode = 0
        // 霍纳算法，来计算hashCode的值
        // cat ---> Unicode编码
        for(let i = 0;i < str.length;i++){
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }
        // 3.取余操作
        let index = hashCode % size

        return index 
    }
    // 插入&修改操作
    HashTable.prototype.put = (key,value) => {
        // 1.根据key获取对应的index
        let index = this.hashFunc(key,this.limit)
        // 2.根据index取出对应的bucket
        let bucket = this.storage[index]
        // 3.判断该bucket是否为null
        if(bucket == null){
            bucket = []
            this.storage[index] = bucket 
        }
        // 4.判断是否是修改数据
        for(let i = 0;i < bucket.length;i++){
            let tuple = bucket[i]
            if(tuple[0] == key){
                tuple[1] = value
                return
            }
        }
        // 5.进行添加操作
        bucket.push([key,value])
        this.count += 1
        // 判断是否需要进行扩容
        if(this.count > this.limit * 0.75){
            let newPrime = this.getPrime(this.limit * 2)
            this.resize(newPrime)
        }
    }
    // 获取方法
    HashTable.prototype.get = (key) => {
        // 1.根据key获取对应的index
        let index = this.hashFunc(key,this.limit)
        // 2.根据index获取对应的bucket
        let bucket = this.storage[index]
        // 3.判断bucket是否为null
        if(bucket == null){
            return null
        }
        // 4.有bucket,那么就进行线性查找
        for(let i = 0;i < bucket.length;i++){
            let tuple = bucket[i]
            if(tuple[0] == key){
                return tuple[1]
            }
        }
        // 5.依然没有找到，那么就返回null
        return null
    }
    // 删除方法
    HashTable.prototype.remove = (key) => {
        // 1.根据key获取对应的index
        let index = this.hashFunc(key,this.limit)
        // 2.根据index获取对应的bucket
        let bucket = this.storage[index]
        // 3.判断bucket是否为null
        if(bucket == null) return null
        // 4.有bucket，那么就进行线性查找，并且删除
        for(let i = 0;i < bucket.length;i++){
            let tuple = bucket[i]
            if(tuple[0] == key){
                bucket.splice(i,1)
                this.count--
                // 缩小容量
                if(this.limit > 7 && this.count < this.limit * 0.25){
                    let newPrime = this.getPrime(Math.floor(this.limit / 2))
                    this.resize(newPrime)
                }
                return tuple
            }
        }
    }
    // 其他方法和测试
    // 判断哈希表是否为空
    HashTable.prototype.isEmpty = () => {
        return this.count == 0
    }
    // 获取哈希表中元素的个数
    HashTable.prototype.size = () => {
        return this.count
    }
    // 哈希表扩容
    HashTable.prototype.resize = (newLimit) => {
        // 1.保存旧的数组内容
        let oldStorage = this.storage
        // 2.重置所有的属性
        this.storage = []
        this.count = 0
        this.limit = newLimit
        // 3.遍历oldStorage中所有的bucket
        for(let i = 0;i < oldStorage.length;i++){
            // 3.1取出对应的bucket
            let bucket = oldStorage[i]
            // 3.2判断bucket是否为null
            if(bucket == null){
                continue
            }
            // 3.3 bucket中有数据，那么取出数据，重新插入
            for(let i = 0;i < bucket.length;i++){
                let tuple = bucket[i]
                this.put(tuple[0],tuple[1])
            }
        }
    }
    // 判断某个数字是否是质数
    HashTable.prototype.isPrime = (num) => {
        // 1.获取num的平方根
        let temp = parseInt(Math.sqrt(num))
        for(let i = 2;i < temp;i++){
            if(num % i == 0) return false
        }
        return true
    }
    // 获取指数的方法
    HashTable.prototype.getPrime = (num) => {
        while(!this.isPrime(numm)){
            num++
        }
        return num
    }
}

// 测试哈希表
// 1.创建哈希表
let ht = new HashTable()
// 2.插入数据
ht.put('abc','123')
ht.put('bcd','234')
ht.put('cde','345')
ht.put('def','456')
ht.put('efg','567')
// 3.获取数据
console.log(ht.get('abc'))
// 4.修改方法
ht.put('abc','111')
console.log(ht.get('abc'))
// 5.删除方法
ht.remove('abc')
console.log(ht.get('abc'))
// 6.