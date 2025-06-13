import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../types/UserResponse';
import { User } from '../../services/user';
import { Button } from '../button/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [CommonModule, Button, RouterModule],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table implements OnInit {
  users: UserResponse[] = []
  hidden: boolean = false
  dataLength: number = 0

  constructor(private userService: User) {}

  async fetchUsers() {
    this.dataLength += 5
    await this.userService.getUsers().subscribe(data => {
      if (data.length <= this.dataLength ) {
          this.hidden = true
      }
      this.users = data.slice(0, this.dataLength)
    })
  }

  ngOnInit(): void {
    this.fetchUsers()
  }
}
