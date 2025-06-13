import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Table } from './components/table/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, DatePipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'todo';
  today: Date = new Date();

  constructor(public router: Router) {}

}
