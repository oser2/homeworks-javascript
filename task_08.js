const friends = [`Mango`, `Poly`, `Kiwi`, `Ajax`];
const friends2 = [`Mango`, `Poly`, `Kiwi`, `Ajax`];
const friends3 = [`Mango`, `Poly`, `Kiwi`, `Ajax`];
let string = ""
let results = document.querySelectorAll('.result')
let inputs = document.querySelectorAll('input')
let buttons = document.querySelectorAll('button')
buttons[0].addEventListener('click', ex1_1)
buttons[1].addEventListener('click', ex1_2)
buttons[2].addEventListener('click', ex1_3)

//

function ex1_1() {
    console.log("!")
    function ex1_1_inner(arr){
        for(let i = 0; i < arr.lenght; i++){
            string += arr[i] + " "

        }
        results[0].textContent = "for - " + string
    }
ex1_1_inner(friends)
}

function ex1_2() {
    string = " "
    console.log("!")
    function ex1_2_inner(arr){
        results[0].textContent = "join - " + arr.join(" ")
    }  
ex1_2_inner(friends2)
}

function ex1_3() {
    string = " "
    console.log("!")
    function ex1_3_inner(arr){
        arr.forEach(element => {
            string += element + " "
        });
        results[0].textContent = "ForEach - " + string
    }  
    
ex1_3_inner(friends3)
}