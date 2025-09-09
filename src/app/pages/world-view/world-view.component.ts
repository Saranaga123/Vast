// world-view.component.ts
import { Component, Input } from '@angular/core'; 
interface EvolutionTitle {
  hp: number;
  title: string;
  bonus: any;
}
interface Entity {
  name: string;
  hp: number;
  str: number;
  def: number;
  spd: number;
  imageUrl?: string;
}
interface AnimalPopulation {
  name: string;
  count: number;     // current count
  originalCount: number; // original count
  biome: string;
}
@Component({
  selector: 'app-world-view',
  templateUrl: './world-view.component.html',
  styleUrls: ['./world-view.component.scss']
})
export class WorldViewComponent {
   @Input() enemies: Entity[] = [];
  @Input() animals: AnimalPopulation[] = [];
selectedBiome: string = 'forest'; // default biome

  getBiomes(): string[] {
    return Array.from(new Set(this.animals.map(a => a.biome)));
  }

  getEnemiesForBiome(biome: string) {
    const animalsInBiome = this.animals.filter(a => a.biome === biome);
    return animalsInBiome.map(a => {
      const entity = this.enemies.find(e => e.name === a.name);
      return { entity: entity!, currentCount: a.count, originalCount: a.originalCount };
    });
  }
  ngOnInit() {
    // Load selected biome from localStorage if available
    const savedBiome = localStorage.getItem('selectedBiome');
    if (savedBiome) {
      this.selectedBiome = savedBiome;
    }
  }
}