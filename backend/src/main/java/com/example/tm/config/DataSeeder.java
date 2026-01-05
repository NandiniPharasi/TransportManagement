package com.example.tm.config;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.tm.entity.Shipment;
import com.example.tm.repository.ShipmentRepository;

@Component 
public class DataSeeder implements CommandLineRunner {

    private final ShipmentRepository shipmentRepository;

    public DataSeeder(ShipmentRepository shipmentRepository) {
        this.shipmentRepository = shipmentRepository;
    }

    @Override
    public void run(String... args) {

        if (shipmentRepository.count() == 0) {

            Shipment shipment = new Shipment();
            shipment.setName("Seed Shipment");
            shipment.setShipmentClass("Express");
            shipment.setAge(3);
            shipment.setAttendance(92.5);
            shipment.setSubjects(List.of("Delhi", "Mumbai"));

            shipmentRepository.save(shipment);

            System.out.println("✅ Seed shipment inserted");
        }
    }
}
