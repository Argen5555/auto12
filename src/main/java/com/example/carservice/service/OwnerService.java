package com.example.carservice.service;

import com.example.carservice.model.Order;
import com.example.carservice.model.Owner;
import java.util.List;

public interface OwnerService {
    Owner add(Owner owner);

    Owner update(Owner owner);

    List<Order> getOrders(Long id);
}
