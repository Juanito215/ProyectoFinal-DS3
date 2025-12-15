package com.barberbook.barber.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.barberbook.barber.entity.Barberia;
import com.barberbook.barber.entity.Barbero;
import com.barberbook.barber.repository.BarberiaRepository;
import com.barberbook.barber.repository.BarberoRepository;

@Service
public class BarberoService {

    private final BarberoRepository barberoRepo;
    private final BarberiaRepository barberiaRepo;

    public BarberoService(BarberoRepository barberoRepo, BarberiaRepository barberiaRepo) {
        this.barberoRepo = barberoRepo;
        this.barberiaRepo = barberiaRepo;
    }

    public List<Barbero> listar() {
        return barberoRepo.findAll();
    }

    public Barbero obtenerPorId(Long id) {
        return barberoRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Barbero no encontrado"));
    }

    public Barbero crear(Barbero barbero, Long barberiaId) {
        Barberia barberia = barberiaRepo.findById(barberiaId)
                .orElseThrow(() -> new RuntimeException("Barbería no encontrada"));

        barbero.setBarberia(barberia);
        return barberoRepo.save(barbero);
    }

    public Barbero actualizar(Long id, Barbero datos) {
        Barbero barbero = obtenerPorId(id);
        barbero.setNombre(datos.getNombre());
        barbero.setEspecialidad(datos.getEspecialidad());
        return barberoRepo.save(barbero);
    }

    public void eliminar(Long id) {
        barberoRepo.deleteById(id);
    }
}
