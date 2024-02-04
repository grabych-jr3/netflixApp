import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit{
  signUpGroup!: FormGroup; 
  constructor(){}
  ngOnInit(): void {
    this.signUpGroup = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
  submitForm(){
    console.log(this.signUpGroup.value);
    this.signUpGroup.reset();    
  }
}
