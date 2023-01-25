package com.example.carservice.service.impl;

import com.example.carservice.model.Goods;
import com.example.carservice.model.Order;
import com.example.carservice.model.ServiceModel;
import com.example.carservice.repository.OrderRepository;
import com.example.carservice.service.OrderService;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
    private static final double GOODS_DISCOUNT_PERCENT = 0.01;
    private static final double SERVICE_DISCOUNT_PERCENT = 0.02;
    private static final Long DIAGNOSTIC_ID = 1L;
    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Order add(Order order) {
        order.setOrderTime(LocalDateTime.now());
        return orderRepository.save(order);
    }

    @Override
    public Order addGoods(Long id, Goods goods) {
        Order order = orderRepository.getReferenceById(id);
        order.getGoods().add(goods);
        return update(order);
    }

    @Override
    public Order update(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order updateStatus(Long id, Order.OrderStatus status) {
        Order order = orderRepository.getReferenceById(id);
        if (status == Order.OrderStatus.COMPLETED_SUCCESSFULLY
                || status == Order.OrderStatus.COMPLETED_UNSUCCESSFULLY) {
            order.setCompletionTime(LocalDateTime.now());
        }
        order.setStatus(status);
        return update(order);
    }

    @Override
    public BigDecimal calculatePrice(Long id) {
        Order order = orderRepository.getReferenceById(id);
        BigDecimal price = calculateGoodsPriceAfterDiscount(order)
                .add(calculateServicesPriceAfterDiscount(order));
        order.setPrice(price);
        update(order);
        return price;
    }

    private BigDecimal calculateServicesPriceAfterDiscount(Order order) {
        int ownerOrderSize = order.getCar().getOwner().getOrders().size();
        double discount = ownerOrderSize * GOODS_DISCOUNT_PERCENT;
        return order.getGoods()
                .stream()
                .map(Goods::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add)
                .multiply(new BigDecimal(1.0 - discount));
    }

    private BigDecimal calculateGoodsPriceAfterDiscount(Order order) {
        int ownerOrderSize = order.getCar().getOwner().getOrders().size();
        double discount = ownerOrderSize * SERVICE_DISCOUNT_PERCENT;
        if (order.getServices().stream().anyMatch(s -> s.getId().equals(DIAGNOSTIC_ID))) {
            if (order.getServices().size() > 1) {
                return order.getServices()
                        .stream()
                        .filter(s -> !s.getId().equals(DIAGNOSTIC_ID))
                        .map(ServiceModel::getPrice)
                        .reduce(BigDecimal.ZERO, BigDecimal::add)
                        .multiply(new BigDecimal(1.0 - discount));
            } else {
                return order.getServices().get(0).getPrice();
            }
        }
        return new BigDecimal(0);
    }
}
