package com.example.carservice.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CarRequestDto {
    private String brand;
    private String model;
    private int year;
    private String number;
    private Long ownerId;
}
