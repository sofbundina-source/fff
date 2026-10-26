let userWins = 0
let compWins = 0
let lives = 10
let a = +prompt("До какого числа должна работать программа?")
while(true) {
    const comp = Math.floor(Math.random() * a) + 1
    const user = +prompt("Угадай число от 1 до " + a)
    if (Number.isNaN(user) || user < 1 || user > a) {
        alert("Некорректное число")
        continue
        }
     if (comp === user) {
        userWins += 1
    alert(`Победа пользователя! Счет: ${userWins} : ${compWins}. Осталось попыток ${lives}`) 
     } else {
        compWins += 1
        lives -= 1
        alert(`Победа компьютера! Число: ${comp}. Счет: ${userWins} : ${compWins}. Осталось попыток: ${lives}`) 
     }
    if (lives === 0) {
    alert("Игра окончена.")
    break
    }
}
