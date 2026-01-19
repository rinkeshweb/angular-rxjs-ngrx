import { Component } from '@angular/core';
import { NgrxHome } from "./ngrx-home/ngrx-home";
import { Parent } from './parent/parent';
import { Child } from './parent/child/child';

@Component({
  selector: 'app-ngrx-demo',
  imports: [NgrxHome, Parent, Child],
  templateUrl: './ngrx-demo.html',
  styleUrl: './ngrx-demo.css',
})
export class NgrxDemo {

}
