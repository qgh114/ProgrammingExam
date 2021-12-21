package com.example.exam.repositories;

import com.example.exam.models.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CandidateRepository extends JpaRepository<Candidate, Long> {

    @Query(value = "SELECT * FROM candidates WHERE party = ?", nativeQuery = true)
    List<Candidate> findCandidateFromGivenParty(String party);
}
