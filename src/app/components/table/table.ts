import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../types/UserResponse';
import { User } from '../../services/user';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table implements OnInit {
  users: UserResponse[] = []

  constructor(private userService: User) {}

  async fetchUsers() {
    await this.userService.getUsers().subscribe(data => {
      this.users = data
    })
  }

  ngOnInit(): void {
    this.fetchUsers()
  }
}
