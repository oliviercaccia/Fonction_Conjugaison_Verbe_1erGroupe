let verb = document.getElementById('verb').value
// slice() extrait le texte d'une chaine de caractères et retourne une nouvelle chaîne de caractères. Les changements au texte dans une chaine de caractères n'affectent pas l'autre chaîne.
// slice() extrait jusqu'à indiceFin, mais sans l'inclure. Par exemple, chn.slice(1, 4) extrait du second caractère jusqu'au quatrième caractère (caractères d'indices 1, 2 et 3).
// Par exemple, chn.slice(2, -1) extrait du troisième caractère jusqu'à l'avant-dernier caractère de la chaine de caractères.
function elementVerb(verb){
    let veb_minus_two_last_letters = verb.substring(0, verb.length - 2);
    return veb_minus_two_last_letters
  }

btn.addEventListener("click", function () {
    if (verb.slice(-2)!='er' ) {
        para.textContent = "Saisissez un verbe du 1er groupe";
    } else {
        let test = elementVerb(verb)
        para.innerHTML = "Je " + test + "e <br/>"
         + " Tu " + test + "es <br/>"
          +"il/elle/on " + test + "e <br/>"
           + "nous " + test + "ons <br/>"
            + "vous " + test + "ez <br/>"
             + " ils/elles " + test + "ent";

    }
})

 if (verb.slice(-2)=='er') {
    console.log("true");

} else 
{    console.log("false");

    
}
