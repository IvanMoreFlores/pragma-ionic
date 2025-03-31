import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from 'src/domain/entities/cat';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false,
})
export class CardComponent {
  @Input() cat!: Cat;
  @Output() onMoreClick = new EventEmitter<string>();

  handleMoreClick() {
    this.onMoreClick.emit(this.cat.id);
  }

  getImageUrl(): string {
    return this.cat.imageUrl;
  }

  createArray(length: number): number[] {
    return Array(length).fill(0);
  }
}
