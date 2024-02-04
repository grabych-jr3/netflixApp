import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Shared/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit{
  signInGroup!: FormGroup;
  constructor(private auth: AuthService){}
  ngOnInit(): void {
    this.signInGroup = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
    })
  }
  submitForm(){
    this.auth.login(this.signInGroup.value).subscribe(
      () => console.log('Login success'),
      error => {
        console.warn(error);
      }
    )
    console.log(this.signInGroup.value);
    this.signInGroup.reset();
  }
}
