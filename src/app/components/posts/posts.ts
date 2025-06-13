import { Component, OnInit } from '@angular/core';
import { PostCard } from '../post-card/post-card';
import { HttpClient } from '@angular/common/http';
import { User } from '../../services/user';
import { PostResponse } from '../../types/PostResponse';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-posts',
  imports: [PostCard, CommonModule, Button],
  templateUrl: './posts.html',
  styleUrl: './posts.scss'
})

export class Posts implements OnInit {
  posts: PostResponse[] = []
  postsLength: number = 0
  hidden: boolean = false

  constructor(private service: User) {}

  async fetchPosts() {
    this.postsLength += 10
    await this.service.getPosts().subscribe(data => {
      if (data.length <= this.postsLength) {
        this.hidden = true
      }
      this.posts = data.slice(0, this.postsLength)
    })
  }

  ngOnInit(): void {
    this.fetchPosts()
  }

}
