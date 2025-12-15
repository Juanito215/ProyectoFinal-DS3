package com.barberbook.barber.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.barberbook.barber.entity.Barbero;
import com.barberbook.barber.service.BarberoService;

@RestController
@RequestMapping("/barberos")
public class BarberoController {

    private final BarberoService service;

    public BarberoController(BarberoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Barbero> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public Barbero obtener(@PathVariable Long id) {
        return service.obtenerPorId(id);
    }

    @PostMapping("/barberia/{barberiaId}")
    public Barbero crear(
            @PathVariable Long barberiaId,
            @RequestBody Barbero barbero
    ) {
        return service.crear(barbero, barberiaId);
    }

    @PutMapping("/{id}")
    public Barbero actualizar(@PathVariable Long id, @RequestBody Barbero barbero) {
        return service.actualizar(id, barbero);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}
