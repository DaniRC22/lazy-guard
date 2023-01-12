import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { Usuarios } from '../../module/user.module';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  lastname: string = '';
  email: string = '';

  constructor(private apiS: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  Create(): void{
    const usuario = new Usuarios(this.lastname, this.email);
    this.apiS.guardar(usuario).subscribe(
      data => {
        this.router.navigate([''])
      }, err =>{
        alert("fallo");
      }
    )
  }

}
