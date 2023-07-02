function selectionSort() {
  //1.获取数组的长度
  let length = this.array.length;
  //2.外层循环：从0位置开始取数据
  for (let j = 0; j < length - 1; j++) {
    //内层循环：从 i+1 位置开始，和后面的数据进行比较
    let min = j;
    for (let i = j + 1; i < length; i++) {
      if (this.array[min] > this.array[i]) {
        min = i;
      }
    }
    this.swap(min, j);
  }
}
