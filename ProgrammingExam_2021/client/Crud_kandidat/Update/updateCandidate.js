const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const candidateId = URLParams.get("candidateId");

const candidateBody = document.getElementById("candidate-wrapper");


fetch("http://localhost:8080/candidates/" + candidateId)
    .then(response => response.json())
    .then(candidate => {
        (createCandidateRow(candidate));

    });


function createCandidateRow(candidate) {
    const candidateRow = document.createElement("div");
    candidateRow.id = candidate.id;


    candidateBody.appendChild(candidateRow);
    constructCandidateRow(candidateRow, candidate);
}


function constructCandidateRow(candidateRow, candidate) {
    candidateRow.innerHTML = `
   <h1> Detaljer af ${(candidate.name)} ${(candidate.lastName)}</h1>
   <br>
   <p id="candidate-image"> Billedeadresse: src="${(candidate.image)}"</p>
   <br>
   <p id="candidate-party">Parti: ${(candidate.party)} kr</p>
   <br>
   <br>
    <button id="update-button-${candidate.id}">Redigere</button> 
    <button onclick="myhref2(${candidate.id})">❌</button>
   
            `;

    document.getElementById(`update-button-${candidate.id}`)
        .addEventListener("click", () => {updateCandidate(candidate)

        });
}



function updateCandidate(candidate) {
    const tableRowToUpdate = document.getElementById(candidate.id);

    tableRowToUpdate.innerHTML = `
            <h1>Redigere</h1>
            
            <label>Navn: </label>
           <br><input id="update-candidate-name-${candidate.id}" value="${escapeHTML(candidate.name)}"><br>
            
            <br><label>Efternavn: </label>
            <br><input id="update-candidate-lastName-${candidate.id}" value="${(escapeHTML(candidate.lastName))}"><br>
            
            <br><label>Billedeadresse: </label>
            <br><input id="update-candidate-image-${candidate.id}" value="${(escapeHTML(candidate.image))}"><br>
            <br><label>Parti: </label>
            <br><input id="update-candidate-party-${candidate.id}" value="${(escapeHTML(candidate.party))}"><br>
            
           <br> <button onclick="updateCandidateBackend(${candidate.id})">Opdater ✅</button><br>
          
            `;

}



function updateCandidateBackend(candidateId) {

    const candidateRowToUpdate = document.getElementById(candidateId);

    const candidateToUpdate = {
        id: candidateId,
        name: document.getElementById(`update-candidate-name-${candidateId}`).value,
        lastName: document.getElementById(`update-candidate-lastName-${candidateId}`).value,
        image: document.getElementById(`update-candidate-image-${candidateId}`).value,
        party: document.getElementById(`update-candidate-party-${candidateId}`).value


    };

    fetch(baseURL + "/candidates/" + candidateId, {
        method: "PATCH",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(candidateToUpdate)
    }).then(response => {
        if (response.status === 200) {
            constructCandidateRow(candidateRowToUpdate, candidateToUpdate)
        }
    });
}








