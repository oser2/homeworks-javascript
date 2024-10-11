let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")


//Завдання 1
function ex1(){
    let temp = +inputs[0].value
    results[0].textContent = temp * 1.8 + 32 + "F"
}
