package com.example.exam.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "candidates")
@Entity
public class Candidate {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column
    private String name;


    @Column
    private String lastName;


    @Column(columnDefinition="TEXT")
    private String image;


    @Column
    private String party;
}
