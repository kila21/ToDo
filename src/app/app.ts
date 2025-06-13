import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Table } from './components/table/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'todo';
  today: Date = new Date();
}
