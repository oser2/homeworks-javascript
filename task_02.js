let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")


//Завдання 1
function ex1(){
    let temp = +inputs[0].value
    results[0].textContent = temp * 1.8 + 32 + "F"
}

//2
function ex2(){
    if(+inputs[1].value > 31 || +inputs[1].value < 28){
        results[1].textContent = "такого місяця не існує"
    }
    else{
        results[1].textContent = 'годин - ' + (+inputs[1].value * 24) + ". " + "хвилин - " + (+inputs[1].value * 1440) 
    }
}

//3

//4
function ex4(){
    if(+inputs[4].value <= 0){
        results[3].textContent = "введено некоректне число"
    }
    else(
        results[3].textContent = +inputs[4].value - +inputs[4].value * 0.1
    )
}

//5
function ex5(){
    if(Math.floor(+inputs[5].value) == 'NaN'){
        results[4].textContent = "введіть правильне число"
    }
    else{
        results[4].textContent = Math.floor(+inputs[5].value)
    }
    
}