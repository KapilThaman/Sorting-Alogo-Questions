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

// SelectionSort([23,14,12,24,56])// Selection Sort is i = 0 and j = i+1 loop through it selecting the minimum mindex value and swpaimng from i because i is the first value and we want to swap i with the minimum value 

function InsertionSort(arr){debugger
       
        for(let i = 0 ; i < arr.length; i++  ){
            let j = i + 1;
            let key = arr[j];
            
                while(i >= 0 && key < arr[i]){
                    if(arr[j] < arr[i]){
                        [arr[j],arr[i]] = [arr[i],arr[j]]
                        
                    }
                    i--;
                }
        }
        console.log(arr);
}
// InsertionSort([29,10,14,37,14,33,8,11]);// Insertion Sort is done , 

// Merge Sort 

function merge(array1, array2) {
    let combined = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i]);
            i++;
        } else {
            combined.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        combined.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        combined.push(array2[j]);
        j++;
    }
    return combined;
}

function mergeSort(array) {
    if (array.length === 1) return array;

    let midIndex = Math.floor(array.length/2);
    let left = mergeSort(array.slice(0, midIndex));
    let right = mergeSort(array.slice(midIndex));
    
    return merge(left, right);
}




function test() {
    let originalArray = [2,4,5,3,1,9,7,6,10];
    let sortedArray = mergeSort( originalArray );

    console.log( "Original Array:", originalArray );
    console.log( "\nSorted Array:", sortedArray );
}


test();
// Solved Merge Sort.

