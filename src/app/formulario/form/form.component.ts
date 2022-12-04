import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  nombre = new FormControl('', [Validators.required, Validators.minLength(2)])
  apellido = new FormControl('', [Validators.required, Validators.minLength(2)])
  email = new FormControl('', [Validators.email, Validators.required])
  contra = new FormControl('', [Validators.required, Validators.minLength(6)])
 
  registroformulario = new FormGroup({
    nombre: this.nombre,
    apellido: this.apellido,
    email: this.email,
    contra: this.contra,
    
  }
  )
 
    
  onSubmit() {
    console.log(this.registroformulario.value)
  }
}
