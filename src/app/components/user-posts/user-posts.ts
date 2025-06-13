import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostCard } from '../post-card/post-card';
import { User } from '../../services/user';
import { PostResponse } from '../../types/PostResponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  imports: [CommonModule, PostCard],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.scss'
})
export class UserPosts implements OnInit {
  constructor(private service: User, private route: ActivatedRoute) {}

  posts: PostResponse[] = []
  name: string = ''
  userId!: string;


  async fetchUserPosts(userId: number) {
    await this.service.getUserPosts(userId).subscribe(data =>{ 
      this.posts = data
    })
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(data => {
      this.name = data.get('name')!
    })
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.fetchUserPosts(+this.userId)
  }
}
