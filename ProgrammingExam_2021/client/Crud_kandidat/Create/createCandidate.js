/*
Funktionen henter data fra kunden og sætter dem ind i variablerne til venstre

FETCH bruger methoden POST til at sætte data ind i tabellen
* */


function createCandidate(){
    const candidateToCreate = {
        name:document.getElementById("create-candidate-name").value,
        lastName: document.getElementById("create-candidate-lastname").value,
        image:document.getElementById("create-candidate-image").value,
        party:document.getElementById("create-candidate-party").value,
    }

    fetch(baseURL + "/candidates", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(candidateToCreate)
    })
        .then(response => {
            if(response.status === 200){
                location.assign("../../Hjem/frontpage.html")
            }
        })
        .catch(error => console.log(error));


}



/*
Funktionen viser over til en anden page
* */

function myhref() {
    location.assign("frontpage.html");
}


