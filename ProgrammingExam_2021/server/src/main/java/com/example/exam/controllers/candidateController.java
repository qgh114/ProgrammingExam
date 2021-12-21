package com.example.exam.controllers;

import com.example.exam.models.Candidate;
import com.example.exam.repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class candidateController {
    @Autowired
    CandidateRepository candidates;


    @GetMapping("/candidates")
    public Iterable<Candidate> getCandidate(){
        return candidates.findAll();
    }

    @GetMapping("/candidates/{id}")
    public Candidate getCandidate(@PathVariable Long id){
        return candidates.findById(id).get();
    }

    @GetMapping("/candidates/allcandidatesfrom/{party}")
    public List<Candidate> getPaintingsAboveACertainPrice(@PathVariable String party) {
        return candidates.findCandidateFromGivenParty(party);
    }

    @PostMapping("/candidates")
    public Candidate addCandidate(@RequestBody Candidate newCandidate){
        return candidates.save(newCandidate);
    }

    @PatchMapping("/candidates/{id}")
    public String patchCandidateById(@PathVariable Long id, @RequestBody Candidate candidateToUpdateWith) {
        return candidates.findById(id).map(foundCandidate -> {
            if (candidateToUpdateWith.getName() != null) foundCandidate.setName(candidateToUpdateWith.getName());
            if (candidateToUpdateWith.getLastName() != null) foundCandidate.setLastName(candidateToUpdateWith.getLastName());
            if (candidateToUpdateWith.getImage() != null) foundCandidate.setImage(candidateToUpdateWith.getImage());
            if (candidateToUpdateWith.getParty() != null) foundCandidate.setParty(candidateToUpdateWith.getParty());
            candidates.save(foundCandidate);
            return "Candidate updated";
        }).orElse("Candidate not found");
    }

    @PutMapping("/candidates/{id}")
    public String updateCandidateById(@PathVariable Long id, @RequestBody Candidate candidateToUpdate) {
        if (candidates.existsById(id)) {
            candidateToUpdate.setId(id);
            candidates.save(candidateToUpdate);
            return "Candidate was created";
        } else {
            return "Candidate not found";
        }
    }


    @DeleteMapping("/candidates/{id}")
    public void deleteRecipeById(@PathVariable Long id) {
        candidates.deleteById(id);
    }
}
