alert('Дія небезпечна!!!')
let ask = confirm('Підтвердити?')
if(ask == true){
    document.writeln("Дякую за підтвердження!")
}
else{
    document.writeln("Дію відмінено!")
}