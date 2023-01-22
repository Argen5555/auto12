package com.example.carservice.controller;

import com.example.carservice.dto.mapper.RequestDtoMapper;
import com.example.carservice.dto.mapper.ResponseDtoMapper;
import com.example.carservice.dto.request.ServiceRequestDto;
import com.example.carservice.dto.response.ServiceResponseDto;
import com.example.carservice.model.ServiceModel;
import com.example.carservice.service.ServiceModelService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/services")
public class ServiceController {
    private final ServiceModelService serviceModelService;
    private final RequestDtoMapper<ServiceRequestDto, ServiceModel> requestDtoMapper;
    private final ResponseDtoMapper<ServiceResponseDto, ServiceModel> responseDtoMapper;

    public ServiceController(ServiceModelService serviceModelService,
            RequestDtoMapper<ServiceRequestDto, ServiceModel> requestDtoMapper,
            ResponseDtoMapper<ServiceResponseDto, ServiceModel> responseDtoMapper) {
        this.serviceModelService = serviceModelService;
        this.requestDtoMapper = requestDtoMapper;
        this.responseDtoMapper = responseDtoMapper;
    }

    @PostMapping
    @ApiOperation("Add a new service")
    public ServiceResponseDto create(@RequestBody ServiceRequestDto requestDto) {
        ServiceModel service = requestDtoMapper.mapToModel(requestDto);
        return responseDtoMapper.mapToDto(serviceModelService.add(service));
    }

    @PostMapping("/{id}")
    @ApiOperation("Update service by id")
    public ServiceResponseDto update(@PathVariable Long id,
                                     @RequestBody ServiceRequestDto requestDto) {
        ServiceModel service = requestDtoMapper.mapToModel(requestDto);
        service.setId(id);
        return responseDtoMapper.mapToDto(serviceModelService.update(service));
    }

    @GetMapping("/{id}/status")
    @ApiOperation("Update status by service id")
    public ServiceResponseDto updateStatus(@PathVariable Long id,
                                           @ApiParam("Status name") @RequestParam String name) {
        ServiceModel.ServiceStatus status = ServiceModel.ServiceStatus.valueOf(name);
        return responseDtoMapper.mapToDto(serviceModelService.updateStatus(id, status));
    }
}
