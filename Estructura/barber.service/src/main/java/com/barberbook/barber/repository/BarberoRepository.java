package com.barberbook.barber.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.barberbook.barber.entity.Barbero;

public interface BarberoRepository extends JpaRepository<Barbero, Long> {
}
