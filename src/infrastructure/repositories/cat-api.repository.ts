import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatRepository } from 'src/domain/repositories/cat.repository';
import { Cat } from 'src/domain/entities/cat';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CatApiRepository extends CatRepository {
  private API_URL = 'https://api.thecatapi.com/v1/breeds';
  private API_KEY = 'live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr';

  constructor(private http: HttpClient) {
    super();
  }

  async getCats(): Promise<Cat[]> {
    return lastValueFrom(
      this.http.get<any[]>(`${this.API_URL}?api_key=${this.API_KEY}`).pipe(
        map(data => data.map(this.mapCatData))
      )
    );
  }

  async getCatById(id: string): Promise<Cat> {
    return lastValueFrom(
      this.http.get<any>(`${this.API_URL}/${id}?api_key=${this.API_KEY}`).pipe(
        map(this.mapCatData)
      )
    );
  }

  private mapCatData(item: any): Cat {
    return {
      id: item.id || '',
      name: item.name || 'Unknown',
      temperament: item.temperament || 'Unknown',
      origin: item.origin || 'Unknown',
      description: item.description || 'No description available',
      life_span: item.life_span || 'Unknown',
      adaptability: item.adaptability ?? 0,
      affection_level: item.affection_level ?? 0,
      intelligence: item.intelligence ?? 0,
      imageUrl: item.reference_image_id
        ? `https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`
        : 'https://placehold.co/600x400',
    };
  }
}


