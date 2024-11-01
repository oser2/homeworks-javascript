let results = document.querySelectorAll(".result")
let inputs = document.querySelectorAll("input")

//1

function ex1(){
    let arr = [+inputs[0].value, +inputs[1].value, +inputs[2].value]
    arr[1] = 10
    results[0].textContent = arr
}