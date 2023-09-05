package com.juanma.controller.vo;

import java.util.Set;

import com.juanma.repository.impl.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@Builder
public class MessageResponse {
  private String message;

}
