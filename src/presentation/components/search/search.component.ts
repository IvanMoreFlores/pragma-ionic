import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: false,

})
export class SearchComponent {
  @Output() onChangeText = new EventEmitter<string>();

  onTextChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.onChangeText.emit(inputElement.value);
  }
}
