package com.example.carservice.service;

import com.example.carservice.model.Master;
import com.example.carservice.model.Order;
import java.math.BigDecimal;
import java.util.List;

public interface MasterService {
    Master add(Master master);

    Master update(Master master);

    List<Order> getOrders(Long id);

    BigDecimal calculateSalary(Long id);
}
