import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';
import { Usuarios } from 'src/app/module/user.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user: Usuarios[] = [];

  constructor(private apiS: ApiService) { }

  ngOnInit(): void {
    this.cargarUser();
    this.traerId();
  }

  cargarUser(): void {
    this.apiS.lista().subscribe(
      data =>{
        this.user = data
    }
    )
  }
  delete(id?:number){
    if(id != undefined){
      this.apiS.delete(id).subscribe(
        data => {
          this.cargarUser();
        },err => {
          alert("no se pudo eliminar")
        }
      )
    }
  }

  traerId(){
    this.apiS.detalle(3).subscribe(uno =>{
      console.log(uno)
    })
  }
  
}
