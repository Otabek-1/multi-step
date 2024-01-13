let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");

function step1submit(){
    step1.style.display = "none";
    step2.style.display = "block";
    document.getElementById("menu-btn2").className = "selected";
    document.getElementById("menu-btn1").style.background = "none";
    document.getElementById("menu-btn1").style.color = "white";

}

function step2submit(){
    step2.style.display = "none";
    step3.style.display = "block";
    document.getElementById("menu-btn3").className = "selected";
    document.getElementById("menu-btn2").style.background = "none";
    document.getElementById("menu-btn2").style.color = "white";
    document.getElementById("menu-btn2").style.border = "1px solid white";
    
}

function step3submit(){
    step3.style.display = "none";
    step4.style.display = "block";
    document.getElementById("menu-btn4").className = "selected";
    document.getElementById("menu-btn3").style.background = "none";
    document.getElementById("menu-btn3").style.color = "white";
    document.getElementById("menu-btn3").style.border = "1px solid white";
    
}

function step4submit(){
    step4.style.display = "none";
    document.getElementById("finish").style.display = "block";
    document.getElementById("menu-btn3").className = "selected";
    document.getElementById("menu-btn2").style.background = "none";
    document.getElementById("menu-btn2").style.color = "white";
    document.getElementById("menu-btn2").style.border = "1px solid white";
    
}

function step2back(){
    step2.style.display = "none";
    step1.style.display = "block";
    document.getElementById("menu-btn1").style.background = "#BFE0FF";
    document.getElementById("menu-btn2").style.background = "none";
    document.getElementById("menu-btn2").style.color = "white";
}

function step3back(){
    step3.style.display = "none";
    step2.style.display = "block";
    document.getElementById("menu-btn2").style.background = "#BFE0FF";
    document.getElementById("menu-btn3").style.background = "none";
    document.getElementById("menu-btn3").style.color = "white";
}

function step4back(){
    step4.style.display = "none";
    step3.style.display = "block";
    document.getElementById("menu-btn3").style.background = "#BFE0FF";
    document.getElementById("menu-btn4").style.background = "none";
    document.getElementById("menu-btn4").style.color = "white";
}

