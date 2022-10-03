/**
 * 最好是封装一个类
 * 在JS中是基于对象的(是如何基于对象来实现面向对象的特性的 )
 */
// 封装栈类
function Stack () {
    // 栈中的属性
    this.items = []

    // 栈的相关操作
    // 1.push():将元素压入栈
    Stack.prototype.push = function (element) {
        this.items.push(element)
    }

    // 2.poo():从栈中取出元素
    Stack.prototype.pop = function() {
        return this.items.pop()
    }

    // 3.peek():查看栈顶元素
    Stack.prototype.peek = () => {
        return this.items[this.items.length - 1]
    }
    
    // 4.isEmpty():判断栈是否为空
    Stack.prototype.isEmpty = () => {
        return this.items.length == 0
    }

    // 5.size():获取栈中元素的个数
    Stack.prototype.size = () => {
        return this.items.length
    }

    // 6.toString():以字符串形式输出栈内数据
    Stack.prototype.toString = () => {
        let resultString = ''
        for(let item of this.items){
            resultString += item
        }
        return resultString
    }
}

modules.exports = Stack