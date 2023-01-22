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
    private static final BigDecimal DIAGNOSTIC_PRICE = new BigDecimal(500);
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
        int ownerOrderSize = order.getCar().getOwner().getOrders().size();
        double goodsDiscount = ownerOrderSize * GOODS_DISCOUNT_PERCENT;
        double serviceDiscount = ownerOrderSize * SERVICE_DISCOUNT_PERCENT;
        BigDecimal goodsPriceAfterDiscount = order.getGoods()
                .stream()
                .map(Goods::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add)
                .multiply(new BigDecimal(1.0 - goodsDiscount));
        BigDecimal price;
        if (order.getServices().size() > 0) {
            BigDecimal servicesPriceAfterDiscount = order.getServices()
                    .stream()
                    .map(ServiceModel::getPrice)
                    .reduce(BigDecimal.ZERO, BigDecimal::add)
                    .multiply(new BigDecimal(1.0 - serviceDiscount));
            price = goodsPriceAfterDiscount.add(servicesPriceAfterDiscount);
        } else {
            price = goodsPriceAfterDiscount.add(DIAGNOSTIC_PRICE);
        }
        order.setPrice(price);
        update(order);
        return price;
    }
}
