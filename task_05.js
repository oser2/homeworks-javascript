let option = document.querySelectorAll("option")
let list = document.querySelector(".list")
let listex = document.querySelector(".listex")

//
if(option.value == "КАВА"){
    listex.textContent = "КАВА"
}
else if(option.value == "ЧАЙ"){
    listex.textContent = "ЧАЙ"
}
else if(option.value == "СІК"){
    listex.textContent = "СІК"
}
console.log(Number(option.value))
