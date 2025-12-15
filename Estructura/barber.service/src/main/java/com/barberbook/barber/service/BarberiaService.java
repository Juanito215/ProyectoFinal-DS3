package com.barberbook.barber.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.barberbook.barber.entity.Barberia;
import com.barberbook.barber.repository.BarberiaRepository;

@Service
public class BarberiaService {

    private final BarberiaRepository repository;

    public BarberiaService(BarberiaRepository repository) {
        this.repository = repository;
    }

    public List<Barberia> listar() {
        return repository.findAll();
    }

    public Barberia guardar(Barberia barberia) {
        return repository.save(barberia);
    }
}
