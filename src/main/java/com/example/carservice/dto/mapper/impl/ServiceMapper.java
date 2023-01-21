package com.example.carservice.dto.mapper.impl;

import com.example.carservice.dto.mapper.RequestDtoMapper;
import com.example.carservice.dto.mapper.ResponseDtoMapper;
import com.example.carservice.dto.request.ServiceRequestDto;
import com.example.carservice.dto.response.ServiceResponseDto;
import com.example.carservice.model.ServiceModel;
import com.example.carservice.repository.MasterRepository;
import com.example.carservice.repository.OrderRepository;
import org.springframework.stereotype.Component;

@Component
public class ServiceMapper implements RequestDtoMapper<ServiceRequestDto, ServiceModel>,
        ResponseDtoMapper<ServiceResponseDto, ServiceModel> {
    private final OrderRepository orderRepository;
    private final MasterRepository masterRepository;

    public ServiceMapper(OrderRepository orderRepository,
                         MasterRepository masterRepository) {
        this.orderRepository = orderRepository;
        this.masterRepository = masterRepository;
    }

    @Override
    public ServiceModel mapToModel(ServiceRequestDto dto) {
        ServiceModel service = new ServiceModel();
        service.setOrder(orderRepository.getReferenceById(dto.getOrderId()));
        service.setMaster(masterRepository.getReferenceById(dto.getMasterId()));
        service.setPrice(dto.getPrice());
        service.setStatus(dto.getStatus());
        return service;
    }

    @Override
    public ServiceResponseDto mapToDto(ServiceModel service) {
        ServiceResponseDto dto = new ServiceResponseDto();
        dto.setId(service.getId());
        dto.setOrderId(service.getOrder().getId());
        dto.setMasterId(service.getMaster().getId());
        dto.setPrice(service.getPrice());
        dto.setStatus(service.getStatus());
        return dto;
    }
}
