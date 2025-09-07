// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvolutionComponent } from './pages/evolution/evolution.component';
import { MaingameComponent } from './pages/maingame/maingame.component';

// Example: later you can add real components here
const routes: Routes = [
  { path: 'evolution', component: EvolutionComponent },
  { path: 'game', component: MaingameComponent },
  { path: '', redirectTo: '/game', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
