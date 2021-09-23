document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button')
    let btnText = document.createTextNode('Click Here!')

    button.appendChild(btnText)
    document.body.appendChild(button)

    button.addEventListener("click", function () {
        window.alert("Hello! How are you doing this fine evening?!?!?!");
    })

})

function feelsalrt() {
    if(confirm("Do you want to update message??")){
        confirm(document.getElementById("feelsbox").value)
    }
}