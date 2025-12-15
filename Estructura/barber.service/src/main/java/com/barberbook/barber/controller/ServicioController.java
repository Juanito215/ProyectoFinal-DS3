package com.barberbook.barber.controller;

import com.barberbook.barber.entity.Servicio;
import com.barberbook.barber.service.ServicioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servicios")
public class ServicioController {

    private final ServicioService service;

    public ServicioController(ServicioService service) {
        this.service = service;
    }

    @GetMapping
    public List<Servicio> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public Servicio obtener(@PathVariable Long id) {
        return service.obtenerPorId(id);
    }

    @PostMapping("/barberia/{barberiaId}")
    public Servicio crear(
            @PathVariable Long barberiaId,
            @RequestBody Servicio servicio
    ) {
        return service.crear(servicio, barberiaId);
    }

    @PutMapping("/{id}")
    public Servicio actualizar(@PathVariable Long id, @RequestBody Servicio servicio) {
        return service.actualizar(id, servicio);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}
