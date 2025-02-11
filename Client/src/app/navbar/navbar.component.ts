import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Member } from '../models/member';

@Component({
  selector: 'app-navbar',
  imports: [],
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
  this.accountService.getUsers().subscribe({
    next: response => this.user = response,
    error:error => console.log(error)
  })
}
}
