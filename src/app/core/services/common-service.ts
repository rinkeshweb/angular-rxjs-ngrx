import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { bindCallback, concatAll, defer, exhaustAll, from, fromEvent, fromEventPattern, generate, iif, interval, map, mergeAll, Observable, of, range, switchAll, take, throwError, timer, } from 'rxjs';
import { ajax } from 'rxjs/ajax'

interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private readonly base_url = 'https://dummyjson.com/users';

  // Signal
  private readonly _count = signal<number>(0);
  private readonly _users = signal<User[]>([]);
  readonly count = this._count;
  readonly users = this._users;

  constructor(private http: HttpClient) { }

  // Http Request
  getAllUser() {
    return this.http.get(this.base_url).pipe(
      map((user: any) => user.users),
      // concatAll(),
      // mergeAll(),
      // switchAll()
      // exhaustAll()
    )
  }

  // Rxjs
  // Observable
  readonly number$ = new Observable((subs) => {
    subs.next(1)
    subs.next(2)
    subs.next(3)
    setTimeout(() => {
      subs.complete();
      subs.next(4)
    }, 1000)
    subs.next(5)
  })

  readonly nums1$ = of([1, 2, 3, 4, 5, 6, 7]); // emit as it is data;
  readonly nums2$ = from([1, 2, 3, 4, 5, 6, 7]); // converts arrays, promises, and iterables into individual observable emissions.

  // readonly creationsObs = timer(2000, 1000);
  // readonly creationsObs = range(1, 10);
  // readonly creationsObs = ajax(this.base_url); // replace by http
  // readonly creationsObs = fromEvent(document, 'click');
  // readonly creationsObs = defer(() => {
  //   return Math.random() > 0.5
  //     ? fromEvent(document, 'click')
  //     : interval(1000);
  // });
  // readonly creationsObs = throwError(() => 'Something is fishing');
  private readonly isLoggedIn = false;
  readonly creationsObs = iif(() => this.isLoggedIn, of('User logged in'), of('Guest user'));



  readonly observable = new Observable(function subscribe(subscriber) {
    const id = setInterval(() => {
      subscriber.next('hi');
    }, 1000);
  });

  // Observer
  observerData = {
    next: (x: any) => console.log('Observer got a next value: ' + x),
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  }

  // readonly intervalData = interval(1000)



}
