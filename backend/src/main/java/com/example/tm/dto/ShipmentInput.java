package com.example.tm.dto;

import java.util.List;

public class ShipmentInput {

    private String name;
    private Integer age;
    private String shipmentClass;
    private List<String> subjects;
    private Double attendance;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getShipmentClass() {
		return shipmentClass;
	}
	public void setShipmentClass(String shipmentClass) {
		this.shipmentClass = shipmentClass;
	}
	public List<String> getSubjects() {
		return subjects;
	}
	public void setSubjects(List<String> subjects) {
		this.subjects = subjects;
	}
	public Double getAttendance() {
		return attendance;
	}
	public void setAttendance(Double attendance) {
		this.attendance = attendance;
	}

   
}
