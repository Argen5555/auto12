package com.example.carservice.service;

import com.example.carservice.model.Master;
import com.example.carservice.model.Order;
import java.math.BigDecimal;
import java.util.List;

public interface MasterService {
    List<Master> getAll();

    Master get(Long id);

    Master add(Master master);

    Master update(Master master);

    List<Master> update(Iterable<Master> masters);

    List<Order> getOrders(Long id);

    BigDecimal calculateSalary(Long id);
}
