export class Usuarios { 
  id?: number;
  lastname: string;
  email: string;

  constructor(lastname: string, email: string){
    this.lastname = lastname;
    this.email = email;
  }

}
