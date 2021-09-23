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
    colorchange.textContent = '3'

    colorchange.style.textAlign = 'center'
    colorchange.style.borderColor = 'black'
    colorchange.style.border = 'solid'
    colorchange.style.width = '100px'
    colorchange.style.height = '100px'

    colorchange.addEventListener('mouseenter', function () {
        colorchange.style.backgroundColor = 'purple'
    })
    colorchange.addEventListener('mouseleave', function () {
        colorchange.style.backgroundColor = ''
    })

    let paragraph = document.createElement("p")
    let pText = document.createTextNode("4. This is gonna be my Test paragraph")
    paragraph.appendChild(pText)
    document.body.appendChild(paragraph)

    paragraph.style.textAlign = 'center'

    paragraph.addEventListener("click", function () {
        paragraph.style.color = generateRandomColor()
    })
    function generateRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let randomColor = generateRandomColor();//"#F10531"

    let nameContainer = document.createElement("div")
    let nameBtn = document.createElement("button")
    let btnName = document.createTextNode('Click me again!')
    nameBtn.appendChild(btnName)
    document.body.appendChild(nameBtn)

    nameBtn.addEventListener("click", function () {
        let nameSpan = document.createElement("span");
        let spanText = document.createTextNode("5. Quincy S.");
        nameContainer.appendChild(nameSpan)
        nameSpan.appendChild(spanText)
        document.body.appendChild(nameSpan)
    })

})

let friends = ['Diego', 'Jerry', 'Kevin', 'Hunter', 'Chase1', 'Chase2', 'Jarvis', 'Alex1', 'Alex2', 'Raymond']

function feelsalrt() {
    if (confirm("2. Do you want to update message??")) {
        alert(document.getElementById("feelsbox").value)
    }
}


