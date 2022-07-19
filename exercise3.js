let dupes = [1,2,3,'a','a','f',3,4,2,'d','d'];

function removeDups(arr) {
   let newArr = []
   for(let i =0; i<arr.length; i++){
    if(newArr.includes(arr[i])){
        continue;
    }
    else{
        newArr.push(arr[i])
    }
   }
   return newArr
};
console.log(removeDups(dupes));