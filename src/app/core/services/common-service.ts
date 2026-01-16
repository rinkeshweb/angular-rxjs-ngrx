import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { bindCallback, bufferCount, bufferTime, bufferWhen, combineLatest, concat, concatAll, concatMap, concatMapTo, defer, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, exhaustAll, exhaustMap, expand, filter, first, forkJoin, from, fromEvent, fromEventPattern, generate, groupBy, iif, interval, last, map, mapTo, merge, mergeAll, mergeMap, mergeMapTo, mergeScan, Observable, of, pairwise, partition, pipe, pluck, race, range, scan, single, skip, skipLast, skipUntil, skipWhile, switchAll, switchMap, switchMapTo, switchScan, take, takeLast, takeUntil, takeWhile, throwError, timer, toArray, windowCount, windowTime, zip, } from 'rxjs';
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

  constructor(private http: HttpClient) {
    // [this.creationsEven$, this.creationsOdd$] = partition(
    //   this.source$,
    //   x => x % 2 === 0
    // );
  }

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
  // private readonly isLoggedIn = false;
  // readonly creationsObs = iif(() => this.isLoggedIn, of('User logged in'), of('Guest user'));

  // readonly $a = interval(2000);
  // readonly $b = interval(1000);
  // readonly $c = interval(1000);
  // readonly creationsObs = combineLatest([this.$a, this.$b, this.$b])


  // readonly creationsObs = concat(of(1, 2, 3), of(3, 2, 1))
  // readonly creationsObs = forkJoin({ user: of(['a', 'b']), orders: of([1, 2, 3]) })
  // readonly creationsObs = merge(interval(1000), interval(1500))

  // readonly source$ = from([1, 2, 3, 4, 5])
  // readonly creationsEven$: any;
  // readonly creationsOdd$: any;

  // readonly creationsObs = race(
  //   timer(1000).pipe(mapTo('Fast')),
  //   timer(3000).pipe(mapTo('Slow')),
  // )

  // readonly creationsObs = zip(
  //   from([1, 2, 3]),
  //   from(['a', 'b', 'c']).pipe(map(v => v.toUpperCase()))
  // )


  // Transformations
  // readonly trans = from([...new Set([1, 2, 3, 3, 4, 29, 14, 16, 17, 4, 4, 5])]); // Filter Unique
  // readonly trans = from([1, 2, 3, 3, 4, 29, 14, 16, 17, 4, 4, 5]).pipe(distinct()); // Filter Unique
  // readonly trans = from([1, 2, 3, 3, 4, 29, 14, 16, 17, 4, 4, 5]).pipe(distinctUntilChanged());

  // readonly trans = interval(1000).pipe(mapTo('Tick')); // Add fixed output
  // readonly trans = of({ user: { name: 'Rinkesh Kumar', age: 40 } }).pipe(pluck('user', 'age')); // Pick nested property
  // readonly trans = from([1, 2, 3, 4, 5, 6]).pipe(pairwise()); // Previus Current
  // readonly trans = from([1, 2, 3, 4, 5, 6]).pipe(scan((acc, val) => acc + val, 0)); // Scan Like reduce
  // readonly trans = from([1, 2, 3, 4, 5, 6]).pipe(mergeScan((acc, val) => of(acc + val), 0)); // async scan
  // readonly trans = interval(1000).pipe(switchScan((acc, val) => of(acc + val), 0)); // scan but cancels previous

  // Higher Order Maping
  // readonly trans = of(1, 2, 3).pipe(mergeMap(v => of(v * 5)))
  // readonly trans = of(1, 2, 3).pipe(concatMap(v => of(v * 5)))
  // readonly trans = interval(1000).pipe(switchMap(v => of(v * 5)))

  // readonly trans = of(1, 2, 3).pipe(concatMapTo(of('Hello')));
  // readonly trans = of(1, 2, 3).pipe(mergeMapTo(of('Hello')));
  // readonly trans = of(1, 2, 3).pipe(switchMapTo(of('Hello')));


  // grouping
  // readonly trans = from([
  //   { type: 'A', value: 1 },
  //   { type: 'B', value: 2 },
  //   { type: 'A', value: 3 }
  // ]).pipe(
  //   groupBy(x => x.type),
  //   mergeMap(group$ => group$.pipe(toArray()))
  // )

  // readonly trans = of(1).pipe(expand(x => x < 8 ? of(x * 2) : [])) // 1,2,4,8
  // readonly trans = from([1, 2, 3, 4]).pipe(bufferCount(2))
  // readonly trans = interval(500).pipe(bufferTime(2000))
  // readonly trans = interval(500).pipe(bufferWhen(() => timer(2000)))
  // readonly trans = from([1, 3, 4, 5]).pipe(windowCount(2), mergeAll())
  // readonly trans = interval(500).pipe(windowTime(2000), mergeAll())

  // Filtring Operators
  // readonly filOpr = from([1, 2, 3, 4]).pipe(filter(v => v % 2 === 0))
  // readonly filOpr = from([1, 2, 3, 4]).pipe(elementAt(1))
  // readonly filOpr = from([1, 2, 3, 4]).pipe(first(x => x > 2)) // 3
  // readonly filOpr = from([1, 2, 3, 4]).pipe(last(x => x > 2)) // 4
  // readonly filOpr = of(5).pipe(single()) // 5
  // readonly filOpr = from([1, 1, 2, 2, 1]).pipe(distinct()) // 1 2
  // readonly filOpr = from([1, 1, 2, 2, 1]).pipe(distinctUntilChanged()) // 1 2 1 ➡️ Operator only compares with the immediately previous value
  // readonly filOpr = from([{ id: 1 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 2 }]).pipe(distinctUntilKeyChanged('id')) // 1 2 3 2 ➡️ Again, only checks the previous emission
  // readonly filOpr = from([1, 2, 3, 4, 5]).pipe(skip(2)) // 3 4, 5
  // readonly filOpr = from([1, 2, 3, 4, 5]).pipe(skipLast(2)) // 1, 2, 3 // hide 2 date from last array
  // readonly filOpr = from([1, 2, 3, 1, 2, 4, 5]).pipe(skipWhile(x => x < 3))  // 3,1,2,5,5
  // readonly filOpr = from([1, 2, 3, 1, 2, 4, 5]).pipe(skipWhile(x => x < 3))  // 3,1,2,5,5

  // TAKE OPERATORS
  // readonly takeOpr = from([1, 2, 3, 4, 5]).pipe(take(2)) // 1,2
  // readonly takeOpr = from([1, 2, 3, 4, 5]).pipe(takeLast(2)) // 4,5
  // readonly takeOpr = from([1, 2, 3, 4, 5]).pipe(takeWhile(x => x < 3)) // 1,2
  // readonly takeOpr = interval(1000).pipe(takeUntil(timer(8000)))

  // Join Operators
  // readonly joinOpr = of(interval(1000), interval(1500)).pipe(mergeAll())
  // readonly joinOpr = of(
  //   interval(1000).pipe(take(3)),
  //   interval(1500).pipe(take(2))
  // ).pipe(concatAll())

  // discardOddDoubleEven() {
  //   return pipe(
  //     filter((v: number) => v % 2 === 0),
  //     map((v: number) => v * 2)
  //   )
  // }

  // finalData = from([1, 2, 3, 4, 5, 6, 7, 86, 9, 9]).pipe(this.discardOddDoubleEven())


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
