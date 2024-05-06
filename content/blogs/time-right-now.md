---
title: "What time is it. How do we know time."
description: Learn how to be in sync with time.
author: Shubham Jha
authorImage: https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50
coverImage: https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50
date: "2024-04-20"
---

| Option | Description                              |
| ------ | ---------------------------------------- |
| data   | data that will be passed into templates. |
| engine | Handlebars is the default.               |
| ext    | extension to be used for dest files.     |

Time is not what is used to be. Its a way to life. How do we live is defined by it. Where we are is dictated by it. Sure we have clocks to tell you what time is it. But thats just a tool. You can tell time in a lot of different ways. For example, you can look up at the big red giant in the sky and its position will tell you what time it is. Same as clocks you just have to know how to look at it.

Time is quite important for communication, if you dont know what time it is, the messages and their purpose becomes irrelevant. For example - you have to report the delivery status of handlebars, you cannot do that without time. If time didn't exist, it would be impossible to know that they arrived at their correct address.

Only constructive comments will be shown. Internet is full of negativity as it is so if you are not going to help improve this by your comments, don't post at all or you will be not shown.

Browser Object Model

1. document
2. history
3. screen
4. navigator
5. location
   and so on

What is the rest parameter and spread operator?

- Using the rest parameter syntax, we can create functions that can take a variable number of arguments.
- spread operator is used to spreading an array, and object literals

## Code

Immediately Invoked Function or Self Invoking Functions or Anonymous Function

( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

```
(function (){
  //Do something;
})();
```

Higher Order Functions

```
function higherOrder(fn) {
  fn();
}

higherOrder(function() { console.log("Hello world") });

function higherOrder2() {
  return function() {
    return "Do something";
  }
}
var x = higherOrder2();
x()   // Returns "Do something"
```

**call** - It is a predefined method in Javascript that is used to invoke a function by specifing the owner object. It accepts arguments separately\
Syntax `saySomething.call(person4, "awesome");`

**apply** - similar to call but it takes arguments as an array instead.\
Syntax - `saySomething.apply(person4, ["awesome"]);`

**bind** - returns an new function where the value of `this` keyword is bound to the owner object.

    var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");

**Currying** is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.

    function multiply(a,b){
        return a*b;
    }

    function currying(fn){
        return function(a){
            return function(b){
                return fn(a,b);
            }
        }
    }

    var curriedMultiply = currying(multiply);

    multiply(4, 3); // Returns 12

    curriedMultiply(4)(3); // Also returns 12

Functional Currying Example using bind method

    function mul(val1, val2){
        document.write("<p>" + val1 * val2 + "</p>");
    }

    let var1 = mul.bind(this, 5);
    document.write("var1 method");
    var1(4);
    var1(7);
    let var2 = mul.bind(this, 4);
    document.write("var2 method")
    var2(2);
    var2(4);

Functional Currying Example using closures

    function mul(val1){
        return function(val2){
            document.write("<p>" + val1 * val2 + "</p>");
        }
    }

    let a = mul(2);
    a(5);
    a(6);

**Closures** are an ability of a function to remember the variables and functions that are declared in its outer scope.

    function randomFunc(){
    var obj1 = {name:"Vivian", age:45};

        return function(){
            console.log(obj1.name + " is "+ "awesome");
            // Has access to obj1 even when the randomFunc function is executed
        }
    }

    var initialiseClosure = randomFunc(); // Returns a function

    initialiseClosure();

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```
