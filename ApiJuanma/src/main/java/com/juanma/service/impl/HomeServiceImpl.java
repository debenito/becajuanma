package com.juanma.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.juanma.controller.vo.PaginaVO;
import com.juanma.repository.PaginaRepository;
import com.juanma.repository.model.Pagina;
import com.juanma.service.IHomeService;
import com.juanma.service.mapper.Conversor;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class HomeServiceImpl implements IHomeService {

	@Autowired
	PaginaRepository paginaRepository;

	@Autowired
	Conversor conversor;

	@Override
	public Mono<Page<PaginaVO>> getAllPaginas(PageRequest pageRequest) {

		return Mono.just(paginaRepository.findAll(pageRequest).map(pagina -> conversor.dataPaginaToPaginaVO(pagina)));
	}

	@SuppressWarnings("deprecation")
	@Override
	public Mono<PaginaVO> getPagina(int id) {
		// TODO Auto-generated method stub
		return Mono.just(paginaRepository.findById(id).map(pagina -> conversor.dataPaginaToPaginaVO(pagina)).get());
	}

	@Override
	public Flux<PaginaVO> obtenerPaginas() {
		return Flux.fromIterable(paginaRepository.findAll()).map(pagina -> conversor.dataPaginaToPaginaVO(pagina));

	}

	@Override
	public Mono<PaginaVO> createPagina(PaginaVO pagina) {
		// TODO Auto-generated method stub
		return Mono.just(conversor.dataPaginaToPaginaVO(paginaRepository.save(conversor.dataPaginaVOToPagina(pagina))));
	}

	@Override
	public Mono<PaginaVO> updatePagina(int id, PaginaVO paginaVO) {
		Pagina pagina = conversor.dataPaginaVOToPagina(paginaVO);
		if (id != 0)
			pagina.setId(id);
		return Mono.just(conversor.dataPaginaToPaginaVO(paginaRepository.save(pagina)));
		
	}

	@Override
	public Mono<Void> deletePagina(int id) {
		paginaRepository.deleteById(id);
		return Mono.empty();
	}

}
