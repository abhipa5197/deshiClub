import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  onSendEmailCode(fullName: string, email: string, password: string) {
    console.log('Send email code', { fullName, email, password });
    // TODO: Implement sign-up flow
  }

  onContinueWithGoogle() {
    console.log('Continue with Google');
    // TODO: Integrate Google OAuth
  }

}
