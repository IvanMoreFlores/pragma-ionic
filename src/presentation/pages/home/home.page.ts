import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from 'src/application/services/cat.service';
import { Cat } from 'src/domain/entities/cat';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  cats: Cat[] = [];
  filteredCats: Cat[] = []; // ✅ Lista filtrada
  loading = true;

  constructor(private catService: CatService, private router: Router) {}

  async ngOnInit() {
    try {
      this.cats = await this.catService.getCats();
      this.filteredCats = [...this.cats]; // ✅ Inicializar con todos los gatos
    } catch (error) {
      console.error('Error al obtener los gatos:', error);
    } finally {
      this.loading = false;
    }
  }

  handleSearch(text: string) {
    console.log('Texto buscado:', text);
    const searchText = text.toLowerCase();

    this.filteredCats = this.cats.filter(
      (cat) =>
        cat.name.toLowerCase().includes(searchText) ||
        cat.origin.toLowerCase().includes(searchText) ||
        cat.temperament.toLowerCase().includes(searchText)
    );
  }

  handleMore(id: string) {
    this.router.navigate([`/detail/${id}`]);
  }
}
