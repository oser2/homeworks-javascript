let results = document.querySelectorAll(".result")
let inputs = document.querySelectorAll("input")

//1
let arr = [inputs[0].value]
function ex1(){
    results[0].textContent = arr
    console.log(arr)
}