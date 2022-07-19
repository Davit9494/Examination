let s = "i.like.this.program.very.much"
function reverse (str){
return str.split(".").reverse().join(".")
}
console.log(reverse(s));
let b = "pqr.mno"
console.log(reverse(b));