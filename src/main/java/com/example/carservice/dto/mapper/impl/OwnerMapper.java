package com.example.carservice.dto.mapper.impl;

import com.example.carservice.dto.mapper.RequestDtoMapper;
import com.example.carservice.dto.mapper.ResponseDtoMapper;
import com.example.carservice.dto.request.OwnerRequestDto;
import com.example.carservice.dto.response.OwnerResponseDto;
import com.example.carservice.model.Car;
import com.example.carservice.model.Order;
import com.example.carservice.model.Owner;
import com.example.carservice.repository.CarRepository;
import com.example.carservice.repository.OrderRepository;
import org.springframework.stereotype.Component;

@Component
public class OwnerMapper implements RequestDtoMapper<OwnerRequestDto, Owner>,
        ResponseDtoMapper<OwnerResponseDto, Owner> {
    private final CarRepository carRepository;
    private final OrderRepository orderRepository;

    public OwnerMapper(CarRepository carRepository,
                       OrderRepository orderRepository) {
        this.carRepository = carRepository;
        this.orderRepository = orderRepository;
    }

    @Override
    public Owner mapToModel(OwnerRequestDto dto) {
        Owner owner = new Owner();
        owner.setCars(dto.getCarIds()
                .stream()
                .map(carRepository::getReferenceById)
                .toList());
        owner.setOrders(dto.getOrderIds()
                .stream()
                .map(orderRepository::getReferenceById)
                .toList());
        return owner;
    }

    @Override
    public OwnerResponseDto mapToDto(Owner owner) {
        OwnerResponseDto dto = new OwnerResponseDto();
        dto.setId(owner.getId());
        dto.setCarIds(owner.getCars()
                .stream()
                .map(Car::getId)
                .toList());
        dto.setOrderIds(owner.getOrders()
                .stream()
                .map(Order::getId)
                .toList());
        return dto;
    }
}
