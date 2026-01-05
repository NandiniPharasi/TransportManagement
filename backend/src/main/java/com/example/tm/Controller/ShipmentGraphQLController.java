package com.example.tm.Controller;

import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;

import com.example.tm.dto.ShipmentInput;
import com.example.tm.entity.Shipment;
import com.example.tm.service.ShipmentService;

@Controller
public class ShipmentGraphQLController {

    private ShipmentService shipmentService;

    public ShipmentGraphQLController(ShipmentService shipmentService) {
        this.shipmentService = shipmentService;
    }

    @QueryMapping
    public List<Shipment> shipments(
        @Argument Integer page,
        @Argument Integer size,
        @Argument String sortBy,
        @Argument String direction,
        @Argument String name
    ) {
        return shipmentService.getShipments(
            page != null ? page : 0,
            size != null ? size : 10,
            sortBy,
            direction,
            name
        );
    }

    @QueryMapping
    public Shipment shipment(@Argument Long id) {
        return shipmentService.getShipment(id);
    }

    @MutationMapping
    @PreAuthorize("hasRole('ADMIN')")
    public Shipment addShipment(@Argument("input") ShipmentInput input) {
        return shipmentService.addShipment(input);
    }
  
    @MutationMapping
    @PreAuthorize("hasRole('ADMIN')")
    public Shipment updateShipment(
        @Argument Long id,
        @Argument("input") ShipmentInput input
    ) {
        return shipmentService.updateShipment(id, input);
    }
}
