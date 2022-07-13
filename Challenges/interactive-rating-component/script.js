
function grade1(){
    nota = 1;
    
}

function grade2(){
    nota = 2;
    
}

function grade3(){
    nota = 3;
    
}

function grade4(){
    nota = 4;
    
}

function grade5(){
    nota = 5;
    
}



function submit(){
    
    document.getElementById("rating").style.display = "none";
    document.getElementById("thankyou").style.display = "block";
    var res = document.getElementById("selectedRate")
    
    res.innerText = `You selected ${nota} out of 5`
    
}
