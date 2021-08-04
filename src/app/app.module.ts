import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from '../components/layout/layout.component';
import { PoolService } from 'src/shared/pool.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
