let results = document.querySelectorAll(".result")

//
let age = 15
results[0].textContent = "Мені " + age + " років"
console.log(age)

//
let name = "Остап"
results[1].textContent = "Мене звати " + name
console.log(name)

//
let isStudent = true
if(isStudent == true){
    results[2].textContent = "Am I sudent of GoITeens? " + "Yes"
    console.log(isStudent)
}

//
let myString = "Ніколи не здавайся, щоб побачити завтра."
results[3].textContent = myString
console.log(myString)

//
let myNumber = Math.floor(Math.random() * 10)
myNumber = myNumber + 10
results[4].textContent = myNumber
console.log(myNumber)

//
let myNull = null
results[5].textContent = myNull
console.log(myNull)

//
function ex8(){
    let result = prompt("Your name?", '')
    alert('Hello, ' + result)
}


//
function ex9(){
    alert('Дія небезпечна!!!')
    let ask = confirm('Підтвердити?')
    if(ask == true){
        alert("Дякую за підтвердження!")
    }
    else{
        alert("Дію відмінено!")
    }
}
