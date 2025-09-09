import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private router: Router) {}
    onSignIn(identifier: string, password: string) {
    console.log('Attempt login', { identifier, password });
    // TODO: integrate with auth service
  }

  onForgotPassword() {
    console.log('Forgot password clicked');
    // TODO: navigate to forgot password flow
  }

  onCreateAccount() {
    this.router.navigate(['/sign-up']);
  }

}
