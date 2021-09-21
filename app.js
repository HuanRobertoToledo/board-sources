const board = document.querySelector('#board')
const colors = ["#ad7e44c", "#ad4844", "#9fad44", "#44a4ad", "#44ad7e", "#65ad44", "#4459ad", "#7c44ad", "#ad448f", "#ad4462"]
const SQUARES_NUMBER = 500


for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement ('div')
    square.classList.add ('square')

    square.addEventListener('mouseover',()=>setColor(square))

    square.addEventListener('mouseleave',()=>removeColor(square))

    

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor ()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 30px ${color}`
    console.log(color);
}

function removeColor (element) {
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}



