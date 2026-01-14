import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonService } from '../../../core/services/common-service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Message } from 'primeng/message';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-display',
  imports: [Message, AsyncPipe],
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css',
})
export class CounterDisplay {
  commonService = inject(CommonService);
  count = signal<number>(0);

  // Computed
  totalUsers = computed(() => this.commonService.users().length + 1);

  // to observable
  _totalUsers$ = toObservable(this.totalUsers);

  // to Signal
  _signalUsers = toSignal(this._totalUsers$);

  constructor() {
    effect(() => {
      this.count = this.commonService.count;
    })
  }

}
