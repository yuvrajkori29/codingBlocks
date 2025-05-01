

// Array
let arr = [1,2,3,4,5];
console.log(arr);

console.log( "index  " + arr.indexOf(3));

for(let i=0;i<arr.length;i++)
     {
           console.log(arr[i]);
     }

   arr.push(4);
   arr.unshift(10);
   arr.indexOf(3);  

   console.log( "index   " + arr.indexOf(3));


//    Object
//one way  of creating json ;


var bird = {
     
    name : "Kiwi",
    eggs : ["one","two" , "three", "four"],
    color : "red",

    fly : function(){
        console.log("no it cant fly and her name is " + this.name);
    }
} ;


bird.eggs.forEach((element,idx) => {
    console.log(idx + " " + element);
});
bird.fly();