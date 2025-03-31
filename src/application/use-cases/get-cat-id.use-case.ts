import { Injectable } from '@angular/core';
import { CatRepository } from 'src/domain/repositories/cat.repository';
import { Cat } from 'src/domain/entities/cat';

@Injectable({
  providedIn: 'root',
})
export class GetCatIdUseCase {
  constructor(private catRepository: CatRepository) {}

  async execute(id: string): Promise<Cat> {
    return this.catRepository.getCatById(id);
  }
}
