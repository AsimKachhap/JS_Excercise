//Write a function called same, which accepts two arrays.
//The function should return true if every value in 
//the array has its corresponding values squared in second array.
//The frequency of the values must be same.

//same([1,2,3], [4,1,9]) --> true
//same([1,2,1],[4,4,1]) --> false

arr1 = [1,2,3,4];
arr2 = [1,4,9,16];
arr3 = [2,3,4];
arr4 = [5,6,7];

function same(arr1,arr2){
    if(arr1.length !== arr2.length){
       console.log(false);
       return false;
    }

    for(let i=0; i<arr1.length;i++){
       let correctIndex = arr2.indexOf((Math.pow(arr1[i],2)));
        if(correctIndex === -1){
            console.log(false);
            return false;
        }
        else{
            arr2.splice(correctIndex,1);
        }
    }
    console.log(true);
    return true;
}

same(arr1,arr3);