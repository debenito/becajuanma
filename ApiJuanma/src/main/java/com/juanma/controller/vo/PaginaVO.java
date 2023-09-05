package com.juanma.controller.vo;

import java.util.Set;

import com.juanma.repository.impl.Role;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Builder
public class PaginaVO {
	private String titulo;
	private String contenido;
	private String imagen;
	private int numeroPagina;

}
