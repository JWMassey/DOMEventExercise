//DOM Events Exercise - Jack Massey//

//1a
const button1 = document.querySelector(`#one`)
//1b
button1.onclick = function(){
    alert(`You clicked the first button! Congrats!`)
}

//2a
const h3 = document.querySelector(`h3`)
//2b
h3.addEventListener(`mouseover`, () =>{
    alert(`You hovered over the h3 element! Congrats!`)
})

//3a
const form = document.querySelector(`form`)
//3b
form.addEventListener(`submit`, p => {
    p.preventDefault();
    alert(form.elements.entry.value)
})

//Bonus//

//4a
const darkMode = document.querySelector(`#dm`)
//4b
const body = document.querySelector(`body`)
darkMode.addEventListener(`click`, () => {
    body.classList.toggle(`dark-mode`)
})

//5a
const times = document.querySelector(`#times`)
//5b
let clicks = 0
times.addEventListener(`click`, () => {
    clicks++;
    if (clicks < 3){
        alert(`You clicked the last button! Congrats!`)
    } 
    if (clicks === 3){
        alert(`OH NO! This button is NOT going to work anymore`)
    }
})