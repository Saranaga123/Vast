import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EvolutionComponent } from './pages/evolution/evolution.component';
import { MaingameComponent } from './pages/maingame/maingame.component';
import { WorldViewComponent } from './pages/world-view/world-view.component';
@NgModule({
  declarations: [
    AppComponent,
    EvolutionComponent,
    MaingameComponent,
    WorldViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
