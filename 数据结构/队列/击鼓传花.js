// 
function passGame(nameList,num){
    let queue = new Queue()
    for(let i = 0;i < nameList.length;i++){
        queue.enqueue(nameList[i])
    }
    while(queue.size() > 1){
        for(let i = 0;i < num - 1;i++){
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }
    const endName = queue.front()
    return nameList.indexOf(endName)
}