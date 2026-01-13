import { Component, computed, effect, input, output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ButtonModule, JsonPipe],
  templateUrl: './child.html',
})
export class Child {
  clearInput = output<void>();
  clearFruitInput = output<void>();

  firstName = input('');
  lastName = input('');
  fruitName = input('');
  getObject = input<{ name: string; age: number } | null>(null);

  fruits = signal<string[]>(['Apple', 'Papaya']);

  constructor() {
    effect(() => {
      const name = this.fruitName().trim();
      if (!name) return;
      this.fruits.update(list => [...list, name]);
      this.clearFruitInput.emit();
    });
  }

  displayName = computed(() => {
    const fullName = `${this.firstName()} ${this.lastName()}`.trim();
    return fullName || 'Guest';
  });

  onReset() {
    this.clearInput.emit();
  }
}
