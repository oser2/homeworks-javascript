let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")

//6
let arr = []
function ex6(){
    do{
        arr.push(prompt())
        if(Math.atan(-1) === NaN){
            arr.pop()
        }
    }
    while(arr[arr.length - 1] != null)
    arr = arr.map(Number)
    results[5].textContent = "сумма всіх введених чисел = " + arr.reduce((suma, item) => suma + item)
}
