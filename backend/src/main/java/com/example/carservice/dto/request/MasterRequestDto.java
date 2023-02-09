package com.example.carservice.dto.request;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MasterRequestDto {
    private String name;
    private List<Long> completeOrderIds;
}
