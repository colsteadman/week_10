function name() {
    var name = prompt("what is your name?")
    alert(`hello ${name}`)
    return name

}
name()

function ask() {
    var f_or_c = prompt("what temperature do you want to convert to? (f) or (c)")
    if (f_or_c == "c"){
        function c() {
            var t = prompt("enter you temperature in farenheight")
            var total = ((t - 32) * 5) / 9
            alert(`your temp in c is ${total}`)
            return t
            return total
        }
        c()
    } else if (f_or_c == "f"){
        function f() {
            var t = prompt("enter you temperature in celcius")
            var total =((t * 9) / 5) + 32
            alert(`your temp in f is ${total}`)
            return t
            return total
        }
        f()
    }else {
        alert("you did not enter f or c.")
    }


    return f_or_c;
}

ask()













