import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // ✅ Importar HttpClientModule

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// ✅ Importar los repositorios
import { CatRepository } from 'src/domain/repositories/cat.repository';
import { CatApiRepository } from 'src/infrastructure/repositories/cat-api.repository';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule, // ✅ Importar módulo HTTP
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: CatRepository, useClass: CatApiRepository }, // ✅ Proveer la implementación de CatRepository
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

