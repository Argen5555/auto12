package com.example.carservice.service;

import com.example.carservice.model.Car;

public interface CarService {
    Car add(Car car);

    Car update(Car car);

    Car get(Long id);
}
