const candidateTableBody = document.getElementById("candidate-tbody");

fetch(baseURL+ "/candidates")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.map(createCandidatesTableRow);
    });

function createCandidatesTableRow(candidate){
    const candidateTableRow = document.createElement("tr");
    candidateTableRow.id = candidate.id;

    candidateTableBody.appendChild(candidateTableRow);
    constructCandidateTableRow(candidateTableRow, candidate);
}

function constructCandidateTableRow(candidateTableRow, candidate) {
    candidateTableRow.innerHTML = `
      
   
    <td id="candidate-name">${(candidate.name)}</td>
    <td id="candidate-lastName">${(candidate.lastName)}</td>
    <td id="candidate-image">${(candidate.image)}</td>
    <td id="candidate-party">${(candidate.party)}</td>
    
    <td><button id="expand-candidate-"${candidate.id} onclick="myhref3(${candidate.id})">🖊️</button></td>
        
    `;



}
function myhref3(candidateId) {
    location.assign('./updateCandidate.html?candidateId='+ candidateId)


}













