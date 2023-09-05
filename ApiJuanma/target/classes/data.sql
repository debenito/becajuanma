INSERT INTO users (id,username, email, password) VALUES (0,'jose','jose@prueba.com','$2a$10$WKrESNbSEFNiQt70Fnpsk.TyykDLK0I0y/K8GyzgVpUoJNC/I28Cm');
INSERT INTO roles (id , name) VALUES (0,'ROLE_ADMIN');
INSERT INTO roles (id , name) VALUES (1,'ROLE_MODERATOR');
INSERT INTO roles (id , name) VALUES (2,'ROLE_USER');
INSERT INTO user_roles  (user_id,role_id ) VALUES (0,0);
