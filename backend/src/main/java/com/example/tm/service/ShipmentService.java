package com.example.tm.service;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.tm.dto.ShipmentInput;
import com.example.tm.entity.Shipment;
import com.example.tm.repository.ShipmentRepository;

@Service
public class ShipmentService {

    private ShipmentRepository repository;

    public ShipmentService(ShipmentRepository repository) {
        this.repository = repository;
    }

    public Shipment addShipment(ShipmentInput input) {

        Shipment shipment = new Shipment(); // ✅ no-args constructor

        shipment.setName(input.getName());
        shipment.setAge(input.getAge());
        shipment.setShipmentClass(input.getShipmentClass());
        shipment.setSubjects(input.getSubjects());
        shipment.setAttendance(input.getAttendance());

        return repository.save(shipment);
    }


    public List<Shipment> getShipments(
        int page,
        int size,
        String sortBy,
        String direction,
        String name
    ) {
        if (sortBy == null || sortBy.isEmpty()) {
            sortBy = "id";
        }

        if (direction == null || direction.isEmpty()) {
            direction = "ASC";
        }

        Sort sortObj = direction.equalsIgnoreCase("DESC")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable = PageRequest.of(page, size, sortObj);

        if (name != null && !name.isEmpty()) {
            return repository
                .findByNameContainingIgnoreCase(name, pageable)
                .getContent();
        }

        return repository.findAll(pageable).getContent();
    }

    public Shipment getShipment(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Shipment not found"));
    }

    public Shipment updateShipment(Long id, ShipmentInput input) {
        Shipment shipment = getShipment(id);

        shipment.setName(input.getName());
        shipment.setAge(input.getAge());
        shipment.setShipmentClass(input.getShipmentClass());
        shipment.setSubjects(input.getSubjects());
        shipment.setAttendance(input.getAttendance());

        return repository.save(shipment);
    }
}
