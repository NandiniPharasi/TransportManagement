package com.example.tm.entity;

import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Shipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Integer age;
    private String shipmentClass;

    @ElementCollection
    private List<String> subjects;

    private Double attendance;

    // ✅ REQUIRED by Hibernate
    public Shipment() {
    }

    // getters & setters (generate via STS or write manually)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }

    public String getShipmentClass() { return shipmentClass; }
    public void setShipmentClass(String shipmentClass) {
        this.shipmentClass = shipmentClass;
    }

    public List<String> getSubjects() { return subjects; }
    public void setSubjects(List<String> subjects) {
        this.subjects = subjects;
    }

    public Double getAttendance() { return attendance; }
    public void setAttendance(Double attendance) {
        this.attendance = attendance;
    }
}
