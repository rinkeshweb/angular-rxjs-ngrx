import { Component, effect, inject, signal } from '@angular/core';
import { CommonService } from '../../../core/services/common-service';

@Component({
  selector: 'app-counter-display',
  imports: [],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css',
})
export class CounterDisplay {
  commonService = inject(CommonService);
  count = signal<number>(0);

  constructor() {
    effect(() => {
      this.count = this.commonService.count;
    })
  }

}
