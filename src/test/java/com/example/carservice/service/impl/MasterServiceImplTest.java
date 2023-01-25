package com.example.carservice.service.impl;

import com.example.carservice.model.ServiceModel;
import com.example.carservice.service.ServiceModelService;
import java.math.BigDecimal;
import java.math.MathContext;
import java.util.List;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class MasterServiceImplTest {
    @InjectMocks
    private MasterServiceImpl masterService;

    @Mock
    private ServiceModelService serviceModelService;

    @Test
    void calculateSalary() {
        Long masterId = 1L;
        ServiceModel.ServiceStatus serviceStatus = ServiceModel.ServiceStatus.UNPAID;
        ServiceModel firstService = new ServiceModel();
        firstService.setPrice(new BigDecimal(600));
        ServiceModel secondService = new ServiceModel();
        secondService.setPrice(new BigDecimal(400));
        Mockito.when(serviceModelService.getAllByMasterIdAndStatus(masterId, serviceStatus))
                .thenReturn(List.of(firstService, secondService));

        BigDecimal expected = new BigDecimal("400.00");
        BigDecimal actual = masterService.calculateSalary(masterId);
        Assertions.assertEquals(expected, actual.round(new MathContext(5)));
    }
}