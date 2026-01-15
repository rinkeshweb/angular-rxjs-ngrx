import { afterNextRender, Component, effect, signal } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { InputOutput } from './input-output/input-output';
import { SignalObservable } from './signal-observable/signal-observable';
import { Rxjs } from "./rxjs/rxjs";

@Component({
  selector: 'app-components',
  imports: [AccordionModule, InputOutput, SignalObservable, Rxjs],
  templateUrl: './components.html',
  styleUrl: './components.css',
})
export class Components {

}
