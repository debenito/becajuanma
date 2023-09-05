package com.juanma.controller.vo;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Data
@Getter
@Setter
@Builder
public class LoginRequest {
	@NotBlank
  private String username;

	@NotBlank
	private String password;

}
