function deleteCandidate(candidateId) {
    fetch(baseURL +"/candidates/" + candidateId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(candidateId).remove();
        } else {
            console.log(response.status);
        }
    });
}

function myhref2(candidateId) {
    if (confirm("Er du sikker på du vil slette?")) {
        deleteCandidate(candidateId);
    }

    location.assign('candidate-list.html');
}
