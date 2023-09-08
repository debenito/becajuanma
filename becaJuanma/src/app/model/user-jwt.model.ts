export class UserJWT {
    token: string = '';
    type: string = "Bearer";
    id: number = 0;
    username: string = '';
    email: string = '';
    roles: string[] = [];
    constructor(id: any, token: any, username: any, email: any, roles: any, type: any) {
        this.token = token;
        this.email = email;
        this.id = id;
        this.roles = roles;
        this.type = type;
    }

}
