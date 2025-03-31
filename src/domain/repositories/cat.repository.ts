import { Cat } from '../entities/cat';

export abstract class CatRepository {
  abstract getCats(): Promise<Cat[]>;
  abstract getCatById(id: string): Promise<Cat>;

}
