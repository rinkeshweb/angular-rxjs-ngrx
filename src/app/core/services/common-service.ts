import { Injectable, signal } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private readonly _count = signal<number>(0);
  private readonly _users = signal<User[]>([
    { id: 1, name: 'Rinkesh Kumar' }
  ]);
  readonly count = this._count;
  readonly users = this._users;
}
