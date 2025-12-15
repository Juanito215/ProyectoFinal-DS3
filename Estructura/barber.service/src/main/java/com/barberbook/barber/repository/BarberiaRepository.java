package com.barberbook.barber.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.barberbook.barber.entity.Barberia;

public interface BarberiaRepository extends JpaRepository<Barberia, Long> {
}
