import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = new FormControl('', [Validators.email, Validators.required])
  contra = new FormControl('', [Validators.required, Validators.minLength(6)])

loginform = new FormGroup({
  email : this.email,
  contra: this.contra,
})

constructor(private activatedRoute:ActivatedRoute, private router:Router){}


onSubmit() {
  console.log(this.loginform.value);

}
ingreso(){
  this.router.navigate([''])
}

}
