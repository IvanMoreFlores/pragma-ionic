import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SearchComponent } from 'src/presentation/components/search/search.component';
import { CardComponent } from 'src/presentation/components/card/card.component';

@NgModule({
  declarations: [HomePage, SearchComponent, CardComponent], // Aquí van los componentes
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Se mantiene IonicModule
    HomePageRoutingModule
  ],
  exports: [SearchComponent, CardComponent] // Exportarlo si se usará en otro módulo
})
export class HomePageModule {}

