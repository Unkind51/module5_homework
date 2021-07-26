let arr = [3, 10, 77, 46, 0, 3];


let x = true;
for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[0]){
        x = false;
    }
}
console.log(x);