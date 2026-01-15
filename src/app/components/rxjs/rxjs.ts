import { Component } from '@angular/core';
import { ObservableDemoComponent } from './observable/observable';

@Component({
  selector: 'app-rxjs',
  imports: [ObservableDemoComponent],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css',
})
export class Rxjs {

}
