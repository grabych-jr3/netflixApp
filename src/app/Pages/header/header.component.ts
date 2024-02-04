import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router){}
  goToSearch(){
    this.router.navigate(['search']);
  }
  goToSignIn(){
    this.router.navigate(['signIn']);
  }
  goToSignUp(){
    this.router.navigate(['signUp']);
  }
}
