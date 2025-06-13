import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { PostResponse } from '../../types/PostResponse';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';
import { UserResponse } from '../../types/UserResponse';
import { PostPopup } from '../post-popup/post-popup';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, Button, PostPopup],
  templateUrl: './posts.html',
  styleUrl: './posts.scss'
})

export class Posts implements OnInit {
  posts: PostResponse[] = []
  users: {name: string, id: number}[] = []
  postsLength: number = 0
  hidden: boolean = false
  popup: Boolean = false
  selectedPost: {title: string, body: string} | undefined;

  constructor(private service: User) {}

  togglePopup() {
    this.popup = !this.popup
  }

  getSelectedPost(title: string, body: string) {
    this.selectedPost = {title: title, body: body}
    this.togglePopup()
  }

  async fetchPosts() {
    this.postsLength += 10
    await this.service.getPosts().subscribe(data => {
      if (data.length <= this.postsLength) {
        this.hidden = true
      }
      this.posts = data.slice(0, this.postsLength)
    })
  }

  async fetchUsers() {
    await this.service.getUsers().subscribe((data: UserResponse[]) => {
      data.forEach((user: UserResponse) => {
        this.users.push({name: user.name, id: user.id})
      })
    })
  }

  ngOnInit(): void {
    this.fetchPosts()
    this.fetchUsers()
  }

}
