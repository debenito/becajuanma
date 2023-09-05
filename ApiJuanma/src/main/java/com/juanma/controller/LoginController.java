package com.juanma.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.juanma.controller.vo.LoginRequest;
import com.juanma.controller.vo.MessageResponse;
import com.juanma.controller.vo.Registro;
import com.juanma.service.ILoginService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class LoginController {

	@Autowired
	ILoginService loginService;

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		return ResponseEntity.ok(loginService.login(loginRequest));
	}

	@PostMapping("/registro")
	  public ResponseEntity<?> registerUser(@Valid @RequestBody Registro signUpRequest) {
		  MessageResponse mensage = loginService.registro(signUpRequest);
		  	if(mensage.getMessage().contains("Error"))
			 return  ResponseEntity
	          .badRequest()
	          .body(mensage);
	          else
		    return ResponseEntity.ok(mensage);
	  }

}
