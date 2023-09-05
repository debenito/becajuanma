package com.juanma.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juanma.repository.impl.Pagina;

public interface PaginaRepository extends JpaRepository<Pagina, Integer> {

}
