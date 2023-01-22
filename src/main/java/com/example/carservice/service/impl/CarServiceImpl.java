package com.example.carservice.service.impl;

import com.example.carservice.model.Car;
import com.example.carservice.repository.CarRepository;
import com.example.carservice.service.CarService;
import org.springframework.stereotype.Service;

@Service
public class CarServiceImpl implements CarService {
    private final CarRepository carRepository;

    public CarServiceImpl(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public Car add(Car car) {
        return carRepository.save(car);
    }

    @Override
    public Car update(Car car) {
        return carRepository.save(car);
    }

    @Override
    public Car get(Long id) {
        return carRepository.getReferenceById(id);
    }
}
