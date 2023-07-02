function shellSort(arr) {
  // 1.获取数组的长度
  const len = arr.length;
  // 2.初始化的增量（gap -> 间隔/间隙）
  let gap = Math.floor(len / 2);
  // 3.while循环（gap不断减小）
  while (gap >= 1) {
    // 4.以gap作为间隔，进行分组，对分组进行插入排序
    for (let i = gap; i < len; i += gap) {
      let temp = arr[i];
      let j = i;
      while (arr[j - gap] > temp && j > gap - 1) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      // 5.将j位置的元素赋值temp
      arr[j] = temp;
    }
    // 6.增量变化
    gap = Math.floor(gap / 2);
  }
  return arr;
}
console.log(shellSort([8, 4, 6, 2, 7, 27, 5]));
