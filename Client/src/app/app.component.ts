import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 accountService = inject(AccountService)

ngOnInit(): void {
  this.setCurrent()
}
  setCurrent(){
    const userString = localStorage.getItem('user')
    if(!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user)
  }
}
