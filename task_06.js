let results = document.querySelectorAll(".result")

//1
let arr = []
let i = 0
while(i < 10){
    i++
    arr.push(i)
}
results[0].textContent = arr

//2
arr = []
for(let i = 1; i < 21; i++){
    if(i % 2 != 0){
         continue   
    }
    else{
        arr.push(i)
    }

}   
results[1].textContent = arr

//
