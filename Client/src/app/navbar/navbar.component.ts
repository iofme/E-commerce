import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Member } from '../models/member';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 accountService = inject(AccountService)
 user?: Member

ngOnInit(): void {
  this.loadUser()
}

loadUser(){
  this.accountService.getUser(this.accountService.currentUser()?.id!).subscribe({
    next: response => this.user = response, 
    error: error => console.log(error)
  })
}
}
