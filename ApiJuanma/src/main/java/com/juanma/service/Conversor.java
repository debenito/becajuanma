package com.juanma.service;

import org.springframework.stereotype.Component;

import com.juanma.controller.vo.PaginaVO;
import com.juanma.repository.impl.Pagina;

@Component
public class Conversor {

	
	public PaginaVO  dataPaginaToPaginaVO(Pagina pagina) {
		return PaginaVO.builder().contenido(pagina.getContenido())
		.imagen(pagina.getImagen()).numeroPagina(pagina.getId())
		.titulo(pagina.getTitulo()).build();
	}
	
	public Pagina  dataPaginaVOToPagina(PaginaVO pagina) {
		return Pagina.builder().contenido(pagina.getContenido())
		.imagen(pagina.getImagen()).id(pagina.getNumeroPagina())
		.titulo(pagina.getTitulo()).build();
	}
}
