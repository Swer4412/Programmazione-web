var myName = "Andrea"
//Document è una oggetto che viene fornito dal browser
var paragraph = document.getElementById("paragraph")

//Con console indichiamo la console del browser lol non lo sapevo nonostante tutto
console.log(paragraph.textContent)
console.log(paragraph.className)

//Sosituiamo il valore del tag con il mio nome
paragraph.textContent = myName
//paragraph.innerHTML = myname  innerHTML intende ciò che c'è tra i tag es.<p>Ciao<p> --> Ciao

paragraph.className = "paragrafo"

function calcolaArea(base, altezza) {
    var area = base * altezza
    return area
}

//alert(calcolaArea(5,4)) non usare alert, è bloccante, non fa caricare l'html

console.log(calcolaArea(5, 3))