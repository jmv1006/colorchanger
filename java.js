const button = document.querySelector(".btn")
const body = document.querySelector("body")
const colors = ['red' , 'green' , 'purple' , 'yellow' , 'aqua' , 'blue' , 'brown' , 'violet']

//body.style.backgroundColor = 'aqua'
button.addEventListener('click' , changeBackground)

function changeBackground() {
    const colorIndex= parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}

console.log(changeBackground);

    







