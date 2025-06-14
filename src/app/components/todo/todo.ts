import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../services/user';
import { TodoResponse } from '../../types/TodoResponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss'
})
export class Todo implements OnInit {
  constructor(private route: ActivatedRoute, private service: User, private router: Router) {}

  userId: string | null = null
  name: string | null = null
  todos: TodoResponse[] = []

  async fetchTodo() {
    await this.service.getUserTodo(+this.userId!).subscribe((data: TodoResponse[]) => {
      this.todos = data
    })
  }

  ngOnInit(): void {
    // get userId or return /users
    if(!this.route.snapshot.paramMap.get) {
        this.router.navigateByUrl('/users')
    }else {
      this.userId = this.route.snapshot.paramMap.get('id');
    }
    
    // get user name
    this.route.queryParamMap.subscribe(data => {
      this.name = data.get('name')!
    })
    
    this.fetchTodo()
  }
}
