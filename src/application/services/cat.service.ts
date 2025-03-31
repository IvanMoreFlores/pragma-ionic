import { Injectable } from '@angular/core';
import { GetCatsUseCase } from '../use-cases/get-cats.use-case';
import { Cat } from 'src/domain/entities/cat';
import { GetCatIdUseCase } from '../use-cases/get-cat-id.use-case';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(
    private getCatsUseCase: GetCatsUseCase,
    private getCatIdUseCase: GetCatIdUseCase
  ) {}

  getCats(): Promise<Cat[]> {
    return this.getCatsUseCase.execute();
  }

  getCatById(id: string): Promise<Cat> {
    return this.getCatIdUseCase.execute(id);
  }
}
