import { User } from './../models/users';
import { Component, inject } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router, RouterLinkActive, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private accountService = inject(AccountService)
  user : any = {}
  private routes = inject(Router)

  login() {
    this.accountService.login(this.user).subscribe({
      next: _ => {
      this.routes.navigateByUrl('')
      },
      error: error => alert(error.error)
    })
  }

  logout(){
    this.accountService.logout();
  }
}
