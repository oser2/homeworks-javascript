let inputs = document.querySelectorAll("input")
let results = document.querySelectorAll(".result")

//
function ex5(){
    let name = inputs[0].value
    let email = inputs[1].value
    let password = [2].value
    if(name.length >= 3 && email.includes('@') && password.length >= 6){
        results[4].textContent = 'Дякуємо, дані передано'
    }
    else{
        results[4].textContent = "Вибачте, перевірте: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів."
    }
}