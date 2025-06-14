import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.scss'
})
export class Search{
  @Output() searchText = new EventEmitter<string>()

  EmitSearchText(event: any) {
    this.searchText.emit(event.target.value)
  }

}
