// 冒泡排序
function bubblesort() {
  // 1.获取数组的长度
  let length = this.array.length;
  for (let j = length - 1; j >= 0; j--) {
    //第一次进来： i = 0，比较 0 和 1 位置的两个数据，如果0位置大于1位置的数据
    //最后一次进来： i=length-2，比较 length-2 和 length-1 两个数据的值
    for (let i = 0; i < j; i++) {
      if (this.array[i] > this.array[i + 1]) {
        // 交换两个数据：也可以使用数组的解构赋值
        this.swap(i, i + 1);
      }
    }
  }
}
