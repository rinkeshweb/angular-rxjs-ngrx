import { Component, inject, signal } from '@angular/core';
import { UserService } from './core/services/user-service';
import { Home } from './components/input-output/home/home';
import { InputOutput } from './components/input-output/input-output';

@Component({
  selector: 'app-root',
  imports: [InputOutput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly userService = inject(UserService);
  protected readonly title = signal('Angular RxJS NgRx');

  user$ = this.userService.getUser();

}
