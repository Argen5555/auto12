package com.example.carservice.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CarResponseDto {
    private Long id;
    private String brand;
    private String model;
    private int year;
    private String number;
    private Long ownerId;
}
