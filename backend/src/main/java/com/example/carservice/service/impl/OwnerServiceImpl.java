package com.example.carservice.service.impl;

import com.example.carservice.model.Order;
import com.example.carservice.model.Owner;
import com.example.carservice.repository.OwnerRepository;
import com.example.carservice.service.OwnerService;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class OwnerServiceImpl implements OwnerService {
    private final OwnerRepository ownerRepository;

    public OwnerServiceImpl(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    @Override
    public List<Owner> getAll() {
        return ownerRepository.findAll();
    }

    @Override
    public Owner get(Long id) {
        return ownerRepository.getReferenceById(id);
    }

    @Override
    public Owner add(Owner owner) {
        return ownerRepository.save(owner);
    }

    @Override
    public Owner update(Owner owner) {
        return ownerRepository.save(owner);
    }

    @Override
    public List<Order> getOrders(Long id) {
        return ownerRepository.getReferenceById(id).getOrders();
    }
}
