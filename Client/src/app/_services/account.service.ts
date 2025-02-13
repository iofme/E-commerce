import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { User } from '../models/users';
import { map } from 'rxjs';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class AccountService { 
  private http = inject(HttpClient)
  baseUrl = environment.apiUrl
  currentUser = signal<User | null>(null)
  roles = computed(() => {
    const user = this.currentUser();
    if (user && user.token) {
      const role = JSON.parse(atob(user.token.split('.')[1])).role;
      return Array.isArray(role) ? role : [role];
    }
    return [];
  })

  login(user: User) {
    return this.http.post<User>(this.baseUrl + 'users/login', user).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user)
        }
      })
    )
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }


  getUser(id: number){
    return this.http.get<Member>(this.baseUrl + `users/${id}`)
  }
}
