//closure - whenver a function is born / created ------- all the scopes  present at born captued by inner func =========  till inner funct is
//  present in memory



function outer(arg1){
     
    var cat1 = "meow";
    let x = 10;
    
    function inner(arg2){
        var cat2= "meow meow";
        let x =20;
        console.log(arguments[0]);       // arguments can access only inner scope not outer scope;
        console.log(arg1,cat1,arg2,cat2,x)
    }

    return inner;
}   


var x = outer("call 1");

x("call 2 inner function");