import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})

export class Button {
  @Input() hidden: boolean = false;
  @Input() name: string = 'Load More'
  @Output() isClicked = new EventEmitter<boolean>();

  clickHandler() {
    this.isClicked.emit(true)
  }
}
