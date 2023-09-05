package com.juanma.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.juanma.controller.vo.PaginaVO;
import com.juanma.service.IHomeService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class HomeController {

	@Autowired
	IHomeService homeService;

	@GetMapping("/home")
	public ResponseEntity<Mono<Page<PaginaVO>>> getAllPaginas(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size) {
		try {

			Mono<Page<PaginaVO>> mono = homeService.getAllPaginas(PageRequest.of(page, size));

			if (mono.empty() != null) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(mono, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/home/{id}")
	public ResponseEntity<Mono<PaginaVO>> getPagina(@PathVariable int id) {
		try {
			Mono<PaginaVO> mono = homeService.getPagina(id);

			if (mono.blockOptional().isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(mono, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/home/paginas")
	public ResponseEntity<Flux<PaginaVO>> obtenerPaginas() {
		try {
			Flux<PaginaVO> flux = homeService.obtenerPaginas();

			if (flux.blockFirst() == null) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(flux, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/home")
	public ResponseEntity<Mono<PaginaVO>> createPagina(@RequestBody PaginaVO pagina) {
		try {
			Mono<PaginaVO> mono = homeService.createPagina(pagina);

			return new ResponseEntity<>(mono, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/home/{id}")
	public ResponseEntity<Mono<PaginaVO>> updatePagina(@PathVariable("id") int id, @RequestBody PaginaVO pagina) {
		Mono<PaginaVO> motoData = homeService.getPagina(id);

		if (motoData.blockOptional().isPresent()) {

			return new ResponseEntity<>(homeService.updatePagina(id,pagina), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/home/{id}")
	public ResponseEntity<Mono<Void>> deletePagina(@PathVariable("id") int id) {
		try {
			homeService.deletePagina(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
