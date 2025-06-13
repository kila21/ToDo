import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-popup',
  imports: [],
  templateUrl: './post-popup.html',
  styleUrl: './post-popup.scss'
})
export class PostPopup implements OnInit, OnDestroy {
  @Input() title!: string;
  @Input() description!: string;
  @Output() close = new EventEmitter()

  closePopup() {
    this.close.emit()
  }

  ngOnInit(): void {
    document.body.style.overflow = 'hidden'
  }
  
  ngOnDestroy(): void {
    document.body.style.overflow = 'auto'
  }
}
