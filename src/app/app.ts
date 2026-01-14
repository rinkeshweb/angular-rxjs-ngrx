import { Component, inject, signal } from '@angular/core';
import { UserService } from './core/services/user-service';
import { ScrollTop } from 'primeng/scrolltop';
import { Components } from './components/components';

@Component({
  selector: 'app-root',
  imports: [Components, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly userService = inject(UserService);
  protected readonly title = signal('Angular RxJS NgRx');

  user$ = this.userService.getUser();

}
