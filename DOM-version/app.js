document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button')
    let btnText = document.createTextNode('Click Here!')

    button.appendChild(btnText)
    document.body.appendChild(button)

    button.addEventListener("click", function () {
        window.alert("Hello! How are you doing this fine evening?!?!?!");
    })

})

function secnalrt() {
    let txt;
    if (confirm("I hope you're ready for the ride of your life oooh boi!")){
    }
}