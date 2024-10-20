function BubbleSort(arr){debugger
    for (let index = 0; index < arr.length; index++) {
            for (let j = 0; j < arr.length; j++) {
                    if(arr[j] > arr[j+1]){
                        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                    }
                   
                
            }
}
console.log(arr);   
}
BubbleSort([10,9,8,7,6,5,4,3]) //bubble sort: Start from 0 and keep on checking if the 1st element is greater than 2nd then swap 
