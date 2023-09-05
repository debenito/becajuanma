package com.juanma.service.impl;

import java.util.Base64;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.juanma.controller.vo.JwtResponse;
import com.juanma.controller.vo.LoginRequest;
import com.juanma.controller.vo.MessageResponse;
import com.juanma.controller.vo.Registro;
import com.juanma.repository.RoleRepository;
import com.juanma.repository.UserRepository;
import com.juanma.repository.impl.ERole;
import com.juanma.repository.impl.Role;
import com.juanma.repository.impl.User;
import com.juanma.security.jwt.JwtUtils;
import com.juanma.security.services.UserDetailsImpl;
import com.juanma.service.ILoginService;

@Service
public class LoginServiceImpl implements ILoginService {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@Override
	public JwtResponse login(LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles);
	}

	@Override
	public MessageResponse registro(Registro signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
		      return new MessageResponse("Error: Usuario ya existe!");
		    }

		    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
		      return new MessageResponse("Error: Email ya esta usado!");
		    }

		    // Create new user's account
		    User user = new User(signUpRequest.getUsername(), 
		               signUpRequest.getEmail(),
		               encoder.encode(signUpRequest.getPassword()));

		    Set<String> strRoles = signUpRequest.getRole();
		    Set<Role> roles = new HashSet<>();

		    if (strRoles == null) {
		      Role userRole = roleRepository.findByName(ERole.ROLE_USER)
		          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		      roles.add(userRole);
		    } else {
		    	
		    	
		      strRoles.forEach(role -> {
		        switch (role) {
		        case "admin":
		          Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
		              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		          roles.add(adminRole);

		          break;
		        case "mod":
		          Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
		              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		          roles.add(modRole);

		          break;
		        default:
		          Role userRole = roleRepository.findByName(ERole.ROLE_USER)
		              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		          roles.add(userRole);
		        }
		      });
		    }

		    user.setRoles(roles);
		    userRepository.save(user);

		return new MessageResponse("User registered successfully!");
	}

}