package com.juanma.service;

import com.juanma.controller.vo.JwtResponse;
import com.juanma.controller.vo.LoginRequest;
import com.juanma.controller.vo.MessageResponse;
import com.juanma.controller.vo.Registro;

public interface ILoginService {

	JwtResponse login(LoginRequest loginRequest);
	MessageResponse registro(Registro signUpRequest);

	
}
