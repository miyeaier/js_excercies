// // function foo(a,b){          
//     return a + b;
//   }
//       // global function

// 1Write a function that returns your first name. Call it.

// 2Write a new function that takes your name as an input. 
// The function should return your first name, plus your last name
// , as one string. (Hint: strings can be combined with a +)
 //这是你要定义的函数格式
 1.function it (name){ 
   
  return name;
 }
it("miyeser")

// 你必须定义一个值


// //  function Person(first, last) { 
//     // create "constructor"
//     this.first = first;        
//     // public variables -- reference current object
//     this.last = last;
// 函数运用的另一种方法
f_name = "miye";
l_name = "kaer";

function personname(){
   
    return this.f_name + " " +this.l_name;
}
personname ()
 
2.

var first_name= prompt("what is your first name: ");
var last_name= prompt("whats up,what is your last name");

function personname(){
   
    return this.first_name + " " +this.last_name;
}
personname ()

    
//this是Javascript语言的一个关键字。它代表函数运行时，
//自动生成的一个内部对象，只能在函数内部使用。
function test(){
    　　this.x = 1;
    　　alert(this.x);
    }
    test();

   // 将输出(this.x)里面的值
    