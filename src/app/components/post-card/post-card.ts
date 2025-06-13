import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Button } from '../button/button';
import { PostPopup } from '../post-popup/post-popup';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  imports: [CommonModule, Button, PostPopup],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss'
})
export class PostCard{
  @Input() title: string = ''
  @Input() description: string = ''
  @Input() id!: number;

  popup: boolean = false;

  togglePopup() {
    this.popup = !this.popup
  }
}
