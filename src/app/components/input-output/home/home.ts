import { afterNextRender, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { Child } from '../child/child';
import { InputTextModule } from 'primeng/inputtext'
import { FormsModule } from '@angular/forms';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-home',
  imports: [Child, InputTextModule, FormsModule, ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  fname = signal('');
  lname = signal('');
  fruit = signal('');
  submittedFruit = signal('');

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  uservalue = signal({
    name: 'Rinkesh Kumar',
    age: 45,
  });

  resetInput() {
    this.fname.set('');
    this.lname.set('');
  }

  resetFruitInput() {
    this.fruit.set('');
    this.submittedFruit.set('');
  }

  addFruit(input: HTMLInputElement) {
    const value = this.fruit().trim()
    if (!value) return;
    this.submittedFruit.set(value);

    // afterNextRender(() => {
    //   this.fruitInput.nativeElement.focus()
    // })

    setTimeout(() => {
      this.fruitInput.nativeElement.focus();
    }, 0);

  }


}
