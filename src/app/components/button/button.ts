import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})

export class Button {
  @Input() hidden: boolean = false;
  @Output() isClicked = new EventEmitter<boolean>();

  clickHandler() {
    this.isClicked.emit(true)
  }
}
