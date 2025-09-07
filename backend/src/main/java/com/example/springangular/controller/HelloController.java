package com.example.springangular.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of(
            "message", "Hello World from Spring Boot!",
            "status", "success",
            "timestamp", String.valueOf(System.currentTimeMillis())
        );
    }

    @GetMapping("/status")
    public Map<String, String> status() {
        return Map.of(
            "status", "Spring Boot backend is running",
            "version", "1.0.0"
        );
    }
}