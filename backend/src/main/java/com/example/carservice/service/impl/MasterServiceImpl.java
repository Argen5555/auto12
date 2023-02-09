package com.example.carservice.service.impl;

import com.example.carservice.model.Master;
import com.example.carservice.model.Order;
import com.example.carservice.model.ServiceModel;
import com.example.carservice.repository.MasterRepository;
import com.example.carservice.service.MasterService;
import com.example.carservice.service.ServiceModelService;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class MasterServiceImpl implements MasterService {
    private static final double SALARY_PERCENT = 0.4;
    private final MasterRepository masterRepository;
    private final ServiceModelService serviceModelService;

    public MasterServiceImpl(MasterRepository masterRepository,
                             ServiceModelService serviceModelService) {
        this.masterRepository = masterRepository;
        this.serviceModelService = serviceModelService;
    }

    @Override
    public Master add(Master master) {
        return masterRepository.save(master);
    }

    @Override
    public Master update(Master master) {
        return masterRepository.save(master);
    }

    @Override
    public List<Order> getOrders(Long id) {
        return masterRepository.getReferenceById(id).getCompletedOrders();
    }

    @Override
    public BigDecimal calculateSalary(Long id) {
        List<ServiceModel> services = serviceModelService
                .getAllByMasterIdAndStatus(id, ServiceModel.ServiceStatus.UNPAID);
        BigDecimal salary = services
                .stream()
                .map(ServiceModel::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add)
                .multiply(new BigDecimal(SALARY_PERCENT));
        services.forEach(service ->
                serviceModelService.updateStatus(service.getId(), ServiceModel.ServiceStatus.PAID));
        return salary;
    }
}
