// 插入排序
function insertionSort(arr) {
  // 1.获取数组长度
  const len = arr.length;
  // 2.外层循环：从第一个位置开始获取数据，向前面局部有序进行插入
  for (let i = 1; i < len; i++) {
    // 3.内层循环：获取i位置的元素，和前面的数据依次进行比较
    let temp = arr[i];
    let j = i;
    while (arr[j - 1] > temp && j > 0) {
      arr[j] = arr[j - 1];
      j--;
    }
    // 4.将j位置的数据，放置temp就可以啦
    arr[j] = temp;
  }
  return arr;
}
