function show(){
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var but1 = document.getElementById("but1");
    var but2 = document.getElementById("but2");
    var but3 = document.getElementById("but3");
    p1.hidden =false;
    p2.hidden =true;
    p3.hidden =true;
    but1.classList.add("active")
    but2.classList.remove("active")
    but3.classList.remove("active")
}
function show1(){
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var but1 = document.getElementById("but1");
    var but2 = document.getElementById("but2");
    var but3 = document.getElementById("but3");
    p1.hidden =true;
    p2.hidden =false;
    p3.hidden =true;
    but1.classList.remove("active")
    but2.classList.add("active")
    but3.classList.remove("active")
}
function show2(){
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    var but1 = document.getElementById("but1");
    var but2 = document.getElementById("but2");
    var but3 = document.getElementById("but3");
    p1.hidden =true;
    p2.hidden =true;
    p3.hidden =false;
    but1.classList.remove("active")
    but2.classList.remove("active")
    but3.classList.add("active")
}

