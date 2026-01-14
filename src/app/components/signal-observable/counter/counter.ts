import { Component, computed, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonService } from '../../../core/services/common-service';
import { InputText } from "primeng/inputtext";
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-counter',
  imports: [ButtonModule, InputText, InputGroupModule, InputGroupAddonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  private commonService = inject(CommonService);
  counter$ = this.commonService.count;
  isDecreaseValue = computed(() => this.counter$() <= 0);

  username = signal<string>('');
  isAddDisabled = computed(() => this.username().trim().length === 0);
  @ViewChild('usernameInput') usernameInput!: ElementRef<HTMLInputElement>

  increase() {
    this.commonService.count.update(v => v + 1);
  }

  decrease() {
    this.commonService.count.update(v => v - 1);
  }

  reset() {
    this.commonService.count.set(0);
  }

  addUser() {
    const name = this.username().trim();
    if (!name) return;
    const id = this.commonService.users().length + 1;
    const finalData = { id, name }
    this.commonService.users.update(val => [...val, finalData]);
    this.username.set('');
    queueMicrotask(() => {
      this.usernameInput.nativeElement.focus();
    })
  }

}
