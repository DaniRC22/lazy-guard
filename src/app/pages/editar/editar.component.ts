import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from '../../module/user.module';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  user: Usuarios = null;

  constructor(private apiS:ApiService, private activateRouter: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.apiS.update(id, this.user).subscribe(
      data => {
        this.user = data;
  }
  )
}

  Editar(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.apiS.update(id, this.user).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }

}
