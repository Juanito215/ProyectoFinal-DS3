package com.barberbook.barber.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.barberbook.barber.entity.Barberia;
import com.barberbook.barber.service.BarberiaService;

@RestController
@RequestMapping("/barberias")
public class BarberiaController {

    private final BarberiaService service;

    public BarberiaController(BarberiaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Barberia> listar() {
        return service.listar();
    }

    @PostMapping
    public Barberia crear(@RequestBody Barberia barberia) {
        return service.guardar(barberia);
    }
}
