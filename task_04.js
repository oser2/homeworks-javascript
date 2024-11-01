let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")


//1
function ex1(){
    if(inputs[0].value == '' || inputs[1].value == ''){
        results[0].textContent = "Не всі поля заповнені"
    }
    else{
        results[0].textContent = "Обидва поля заповнені"
    }
}

//2
function ex2(){
    if(+inputs[2].value + +inputs[3].value <= 10){
        results[1].textContent = "Сума менша або дорівнює 10"
    }
    else{
        results[1].textContent = "Сума більша 10"
    }
}

//3


//4


//5
function ex5(){
    let name = inputs[4].value
    let email = inputs[5].value
    let password = inputs[6].value
    if(name.length >= 3 && email.includes('@') && password.length >= 6){
        results[4].textContent = 'Дякуємо, дані передано'
    }
    else{
        results[4].textContent = "Вибачте, перевірте: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів."
    }
}