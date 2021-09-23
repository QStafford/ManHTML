document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button')
    let btnText = document.createTextNode('Click Here!')

    button.appendChild(btnText)
    document.body.appendChild(button)

    button.addEventListener("click", function () {
        window.alert("1. Hello! How are you doing this fine evening?!?!?!");
    })
})

function feelsalrt() {
    if(confirm("2. Do you want to update message??")){
        alert(document.getElementById("feelsbox").value)
    }
}
