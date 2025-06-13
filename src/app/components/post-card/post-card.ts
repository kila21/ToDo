import { Component, Input } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-post-card',
  imports: [Button],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss'
})
export class PostCard {
  @Input() title: string = ''
  @Input() description: string = ''
  @Input() id!: number;
}
