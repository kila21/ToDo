import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../types/UserResponse';
import { User } from '../../services/user';
import { RouterModule } from '@angular/router';
import { Search } from '../search/search';

@Component({
  selector: 'app-table',
  imports: [CommonModule, RouterModule, Search],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table implements OnInit {
  users: UserResponse[] = []
  usersCopy: UserResponse[] = []

  constructor(private userService: User) {}

  async FilteredUsers(event: string) {
    if(!event) {
      this.users = this.usersCopy
      return;
    }

    await this.userService.getUsers().subscribe((response: UserResponse[]) => {
      const data = response.filter((user: UserResponse) => {
        return user.name.toLowerCase().includes(event)
        || user.phone.toLowerCase().includes(event) 
        || user.email.toLocaleLowerCase().includes(event) 
      })
      this.users = data
    })
  }

  async fetchUsers() {
    await this.userService.getUsers().subscribe(data => {
      this.users = data
      this.usersCopy = data
    })
  }

  ngOnInit(): void {
    this.fetchUsers()
  }
}
