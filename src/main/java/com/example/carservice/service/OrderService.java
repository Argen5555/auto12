package com.example.carservice.service;

import com.example.carservice.model.Goods;
import com.example.carservice.model.Order;
import java.math.BigDecimal;

public interface OrderService {
    Order add(Order order);

    Order addGoods(Long id, Goods goods);

    Order update(Order order);

    Order updateStatus(Long id, Order.OrderStatus status);

    BigDecimal calculatePrice(Long id);
}
