package com.barberbook.barber.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.barberbook.barber.entity.Servicio;

public interface ServicioRepository extends JpaRepository<Servicio, Long> {
}
