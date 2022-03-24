function name() {
    var name = prompt("what is your name?")
    alert(`hello ${name}`)
    return name
 
 }
 name()
 
 function ask() {
    var f_or_c = prompt("what temperature do you want to convert to? (f) or (c)")
    return f_or_c;
 }
 
 function c() {
    var t = prompt("enter your temperature in farenheight")
    return t
 }
 
 function f() {
    var t = prompt("enter your temperature in celcius")
    return t
 }
 
 function convert_f() {
    var total = ((c - 32) * 5) / 9
    alert(`your temp in c is ${total}`)
 }
 
 function convert_c() {
    var total = ((f * 9) / 5) + 32
    alert(`your temp in f is ${total}`)
 }
 

 
 var ask = ask();
 if (ask == "c"){
    var c = c()
   
    convert_f()
 } else if (ask == "f") {
    var f = f()
   
    convert_c()
 } else {
     alert("you didn't enter f or c")
 }
 
 
 
 
 
 
 
 

