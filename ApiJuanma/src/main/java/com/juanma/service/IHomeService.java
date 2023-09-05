package com.juanma.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.PathVariable;

import com.juanma.controller.vo.PaginaVO;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IHomeService {

	Mono<Page<PaginaVO>> getAllPaginas(PageRequest pageRequest);

	Mono<PaginaVO> getPagina(int id);

	Flux<PaginaVO> obtenerPaginas();

	Mono<PaginaVO> createPagina(PaginaVO moto);

	Mono<PaginaVO> updatePagina( int id,PaginaVO pagina);
	
	Mono<Void> deletePagina( int id) ;
}
