package com.example.tm.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tm.entity.Shipment;

public interface ShipmentRepository extends JpaRepository<Shipment, Long> {

    Page<Shipment> findByNameContainingIgnoreCase(
        String name,
        Pageable pageable
    );
}
