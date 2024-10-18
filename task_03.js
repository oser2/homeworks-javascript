let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")

//
function ex4(){
    let userName = inputs[0].value
    let payment = +inputs[1].value
    results[3].textContent =  `Дякуємо, ${userName}! До сплати ${payment} гривень`
}

