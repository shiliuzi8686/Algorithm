function mid(left,right,arr){
    //  1.取出中间位置
    let center = Math.floor( (left + right) / 2)
    // 2.判断大小，并且进行交换
    if(arr[left] > arr[center]){
        ;[arr[left],arr[center]] = [arr[center],arr[left]]
    }
    if(arr[center] > arr[right]){
        ;[arr[right],arr[center]] = [arr[center],arr[right]]
    }
    if(arr[left] > arr[center]){
        ;[arr[left],arr[center]] = [arr[center],arr[left]]
    }
    // 3.将center换到right-1的位置
    ;[arr[center],arr[right - 1]] = [arr[right - 1],arr[center]]
    return arr[right - 1] //返回枢纽
}
function quickSort(arr){
    quick(0,arr.length - 1,arr)
}
function  quick (left,right,arr){
    // // 1.结束条件
    // if(left >= right) return
    // // 2.获取枢纽
    // let pivot = mid(left,right)
    // // 3.定义变量，用于记录当前找到的位置
    // let i = left
    // let j = right - 1
    // // 4.开始进行交换
    // while(true){
    //     while(arr[++i] < pivot) {}
    //     while(arr[--j] > pivot) {}
    //     if(i < j) {
    //         ;[arr[i],arr[j]] = [arr[j],arr[i]]
    //     } else {
    //         break
    //     }
    //     // 6.将枢纽放置在正确的位置，i位置
    //     ;[arr[i],arr[right - 1]] = [arr[right - 1],arr[i]]

    //     // 7.分而治之
    //     quick(left,i - 1,arr)
    //     quick(i + 1,right,arr)
    // }

    
    if(right > left){
        let pivot = mid(left,right,arr)
        let i = left
        let j = right - 1
        while(j > i){
            while(arr[++i] < pivot) {}
            while(arr[--j] > pivot) {}
            if(j > i){
                ;[arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
        ;[arr[i],arr[right - 1]] = [arr[right - 1],arr[i]]
        quick(left,i - 1,arr)
        quick(i + 1,right,arr)
    }
}