document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button')
    let btnText = document.createTextNode('Click Here!')

    button.appendChild(btnText)
    document.body.appendChild(button)

    button.addEventListener("click", function () {
        window.alert("1. Hello! How are you doing this fine evening?!?!?!");
    })

    let colorchange = document.createElement("div")

    document.body.appendChild(colorchange)
    
    colorchange.style.backgroundColor = 'pink'
    colorchange.style.borderColor = 'black'
    colorchange.style.border = 'solid' 
    colorchange.style.width = '100px'
    colorchange.style.height = '100px'

    colorchange.addEventListener('mouseenter', function () {
        colorchange.style.backgroundColor = 'purple'
    })
    colorchange.addEventListener('mouseleave', function () {
        colorchange.style.backgroundColor = 'pink'
    })



})

function feelsalrt() {
    if (confirm("2. Do you want to update message??")) {
        alert(document.getElementById("feelsbox").value)
    }
}


