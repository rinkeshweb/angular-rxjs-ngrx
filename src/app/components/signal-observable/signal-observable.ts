import { Component } from '@angular/core';
import { Counter } from './counter/counter';
import { CounterDisplay } from './counter-display/counter-display';

@Component({
  selector: 'app-signal-observable',
  imports: [Counter, CounterDisplay],
  templateUrl: './signal-observable.html',
  styleUrl: './signal-observable.css',
})
export class SignalObservable {

}
