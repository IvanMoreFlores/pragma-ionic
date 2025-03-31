import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatService } from 'src/application/services/cat.service';
import { Cat } from 'src/domain/entities/cat';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false,
})
export class DetailPage implements OnInit {
  cat: Cat | null = null;
  loading = true;

  constructor(private router: Router,private route: ActivatedRoute, private catService: CatService) {}

  async ngOnInit() {
    const catId = this.route.snapshot.paramMap.get('id');
    if (catId) {
      try {
        this.cat = await this.catService.getCatById(catId);
      } catch (error) {
        console.error('Error al obtener los datos del gato:', error);
      } finally {
        this.loading = false;
      }
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
