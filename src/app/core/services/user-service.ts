import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly api = signal<string>('https://jsonplaceholder.typicode.com/users');
  private readonly http = inject(HttpClient);

  getUser() {
    return this.http.get<any[]>(this.api())
  }

}
