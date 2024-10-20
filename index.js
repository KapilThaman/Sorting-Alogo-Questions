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
// BubbleSort([10,9,8,7,6,5,4,3]) //bubble sort: Start from 0 and keep on checking if the 1st element is greater than 2nd then swap 


// Selection Sort :

function SelectionSort(arr){
   

        for(let i = 0 ;i < arr.length - 1; i++){ 
            let minIndex = 0;
                for(let j = i+1; j<arr.length; j++){
                    if(!minIndex){
                        if(arr[i] > arr[j]){
                            minIndex = j
                        }
                        else{
                            minIndex = i
                        }
                    }
                    else{
                        if(arr[j] < arr[minIndex]){
                            minIndex = j;
                        }
                        
                    }
                    
                }
                [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
        console.log(arr);
}

SelectionSort([23,14,12,24,56])// Selection Sort is i = 0 and j = i+1 loop through it selecting the minimum mindex value and swpaimng from i because i is the first value and we want to swap i with the minimum value 