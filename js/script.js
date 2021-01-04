let naam = prompt("Wat is uw voor- en achternaam?");
let leeftijd = prompt("Hoe jong bent u?");

document.querySelector("#naam").innerHTML = naam;
document.querySelector("#leeftijd").innerHTML = leeftijd;

document.querySelector("#kopjenaam").innerHTML = "Hey," + " " + naam;

if(naam == "") {
    document.querySelector("#kopjenaam").innerHTML = "Hmm, je hebt geen naam ingevuld.";

}


if(leeftijd == "18") {
    document.querySelector(".bezoeker").style.backgroundColor = 'green';
}

else {
    document.querySelector(".bezoeker").style.backgroundColor = 'red';
}
