package com.example.carservice.repository;

import com.example.carservice.model.ServiceModel;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<ServiceModel, Long> {
    List<ServiceModel> getAllByMasterIdAndStatus(Long masterId, ServiceModel.ServiceStatus status);
}
