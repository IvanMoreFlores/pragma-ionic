import { Injectable } from '@angular/core';
import { CatRepository } from 'src/domain/repositories/cat.repository';
import { Cat } from 'src/domain/entities/cat';

@Injectable({
  providedIn: 'root',
})
export class GetCatsUseCase {
  constructor(private catRepository: CatRepository) {}

  async execute(): Promise<Cat[]> {
    return this.catRepository.getCats();
  }
}
