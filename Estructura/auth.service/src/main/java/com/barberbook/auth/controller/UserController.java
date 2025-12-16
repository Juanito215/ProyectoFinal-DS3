package com.barberbook.auth.controller;

import com.barberbook.auth.entity.User;
import com.barberbook.auth.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // ✅ REGISTRO DE USUARIO
    @PostMapping
    public User create(@RequestBody User user) {
        return userService.create(user);
    }

    // ✅ LOGIN
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User user) {
        return userService.login(user.getEmail(), user.getPassword());
    }

    // ✅ LISTAR USUARIOS
    @GetMapping
    public List<User> getAll() {
        return userService.findAll();
    }

    // ✅ OBTENER USUARIO POR ID
    @GetMapping("/{id}")
    public User getById(@PathVariable Long id) {
        return userService.findById(id);
    }
}
