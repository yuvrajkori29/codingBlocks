console.log("Prototype Inheritance");


let obj1 = {
    a : 10,
    b :20,
    c : 30
};


let obj2  = Object.create(obj1);  // here obj2 will be shown empty but if we try to acess obj2.a it will print 10 this is because of prototype 
                                  //inheritance




    obj2.x = 50;
obj2.y =60;
obj2.z =70;

                                  let obj3  = Object.create(obj2);  

            /* obj2 will try to find  a in obj2 
            if not found
            then try to find in obj2.__proto__
            if not found
            then in obj2.__proto__.__proto__
            until __proto__ gets null */   
            
            
            console.log(obj3);
            console.log(obj3.__proto__);
            console.log(obj3.a);
            console.log(obj3.__proto__.__proto__.__proto__);
