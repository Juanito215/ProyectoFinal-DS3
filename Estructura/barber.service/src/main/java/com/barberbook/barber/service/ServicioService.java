package com.barberbook.barber.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.barberbook.barber.entity.Barberia;
import com.barberbook.barber.entity.Servicio;
import com.barberbook.barber.repository.BarberiaRepository;
import com.barberbook.barber.repository.ServicioRepository;

@Service
public class ServicioService {

    private final ServicioRepository servicioRepo;
    private final BarberiaRepository barberiaRepo;

    public ServicioService(ServicioRepository servicioRepo, BarberiaRepository barberiaRepo) {
        this.servicioRepo = servicioRepo;
        this.barberiaRepo = barberiaRepo;
    }

    public List<Servicio> listar() {
        return servicioRepo.findAll();
    }

    public Servicio obtenerPorId(Long id) {
        return servicioRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Servicio no encontrado"));
    }

    public Servicio crear(Servicio servicio, Long barberiaId) {
        Barberia barberia = barberiaRepo.findById(barberiaId)
                .orElseThrow(() -> new RuntimeException("Barbería no encontrada"));

        servicio.setBarberia(barberia);
        return servicioRepo.save(servicio);
    }

    public Servicio actualizar(Long id, Servicio datos) {
        Servicio servicio = obtenerPorId(id);
        servicio.setNombre(datos.getNombre());
        servicio.setPrecio(datos.getPrecio());
        return servicioRepo.save(servicio);
    }

    public void eliminar(Long id) {
        servicioRepo.deleteById(id);
    }
}
