package com.griffin.springboot.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

import java.math.BigDecimal;

public record ProductRecordDTO(@NotBlank String name, @NotNull BigDecimal value) {
}
