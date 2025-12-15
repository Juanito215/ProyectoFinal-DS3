package com.barberbook.appointment.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "appointments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    private LocalTime time;

    @Column(nullable = false)
    private String status;

    // Referencias lógicas (NO FK físicas)
    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private Long barberId;

    @Column(nullable = false)
    private Long serviceId;
}
