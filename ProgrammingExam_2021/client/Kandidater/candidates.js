const tbodyElement = document.getElementById("show-all-candidates");

let candidates;

fetch(baseURL+"/candidates")
    .then(response => response.json())
    .then(result => {
        candidates = result;
        candidates.map(createCandidate1);
    });



function createCandidate1 (candidate) {
    const candidateElement = document.createElement("div");
    candidateElement.innerHTML = `

    

         <div>
                <img src="${(candidate.image)}" class="image" >
    
    
                <h4>
                    Navn: ${(candidate.name)}  ${(candidate.lastName)}
    
                </h4>
    
                <h4>
                    Parti: ${(candidate.party)}
    
                </h4>
            </div>
 

      `;

    tbodyElement.appendChild(candidateElement);

}


function searchForSpecificCandidates() {
    const selectedStatus = document.getElementById("show-specific-candidates").value;
    //removes everthing
    tbodyElement.innerHTML = "";
    if (selectedStatus === "Alle") {
        candidates.map(createCandidate1)
    } else {
    //gets candidates from specific party using selected dropdown value
    fetch(baseURL+"/candidates/allcandidatesfrom/"+ selectedStatus)
        .then(response => response.json())
        .then(candidates => {
            candidates.map(createCandidate1);
        });}




}

document.getElementById("search").addEventListener("click", searchForSpecificCandidates);


