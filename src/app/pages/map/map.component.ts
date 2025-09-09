import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
interface Entity {
  name: string;
  hp: number;
  str: number;
  def: number;
  spd: number;
  imageUrl: string;
  image: string;
}
interface Guardian {
  name: string;
  hp: number;
  str: number;
  def: number;
  spd: number;
  imageUrl?: string;
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
biomes = ['forest', 'plains', 'jungle', 'mountains', 'swamp'];
defeatedBosses: string[] = [];
 bosses: Entity[] = [
    { name: 'Fire Dragon', hp: 500, str: 30, def: 20, spd: 15, imageUrl: 'assets/Fire Dragon.webp',image: 'assets/Bimages/dragon.png', },
    { name: 'Ice Titan', hp: 400, str: 25, def: 25, spd: 10, imageUrl: 'assets/Ice Titan.webp' ,image: 'assets/Bimages/ice.png'},
    { name: 'Shadow Behemoth', hp: 450, str: 28, def: 18, spd: 12, imageUrl: 'assets/Shadow Behemoth.webp' ,image: 'assets/Bimages/behomoth.png'},
    { name: 'Thunder Golem', hp: 350, str: 20, def: 30, spd: 10, imageUrl: 'assets/Thunder Golem.gif' ,image: 'assets/Bimages/thunder.png'},
    { name: 'Ancient Hydra', hp: 500, str: 35, def: 15, spd: 20, imageUrl: 'assets/Ancient Hydra.gif' ,image: 'assets/Bimages/hydra.png'},
    { name: 'Earth Colossus', hp: 400, str: 22, def: 28, spd: 10, imageUrl: 'assets/Earth Colossus.gif' ,image: 'assets/Bimages/earth.png'},
    { name: 'Demon Lord', hp: 500, str: 40, def: 25, spd: 20, imageUrl: 'assets/demon-lord.gif',image: 'assets/Bimages/demon.png' },
    { name: 'Titanic Kraken', hp: 500, str: 35, def: 15, spd: 20, imageUrl: 'assets/Titanic Kraken.webp' ,image: 'assets/Bimages/craken.png'},
    { name: 'Celestial Phoenix', hp: 400, str: 28, def: 18, spd: 30, imageUrl: 'assets/Celestial Phoenix.gif',image: 'assets/Bimages/phenix.png' },
    { name: 'Earth Colossus II', hp: 400, str: 22, def: 28, spd: 10, imageUrl: 'assets/Earth Colossus.gif' ,image: 'assets/Bimages/earth.png'},
  ];
   selectedBoss: Entity | null = null;
    showOverlay = false;
    isLoading = false;
  constructor(private router: Router) {}

  @Output() biomeSelected = new EventEmitter<string>();
  @Output() bossSelected = new EventEmitter<string>();

  selectBiome(biome: string) {
  localStorage.setItem('selectedBiome', biome);
  this.biomeSelected.emit(biome);
  this.router.navigate(['/game']); // Adjust route to your main game component
}
get activeBosses() {
  return this.bossPositions.filter(b => !this.defeatedBosses.includes(b.entity.name));
}
selectBoss(boss: string) {
  localStorage.setItem('selectedBoss', boss);
  this.bossSelected.emit(boss);
  this.router.navigate(['/game']); // Adjust route to your main game component
}
 
 
  selectedBiome: string | null = null;

  // Overlay & loading
  showConfirmOverlay: boolean = false;
  showLoading: boolean = false;
  pendingBiome: string | null = null;
 

  // Biome click
  onBiomeClick(biome: string) {
    if (this.selectedBiome === biome) return;
    this.pendingBiome = biome;
    this.showConfirmOverlay = true;
  }

  confirmBiomeChange() {
    console.log("step1")
    if (!this.pendingBiome) return;
    
    this.isLoading = true; 
    console.log("step2")
     
    setTimeout(() => {
      console.log("step3")
      this.selectedBiome = this.pendingBiome!;
      localStorage.setItem('selectedBiome', this.selectedBiome);
      this.biomeSelected.emit(this.selectedBiome);
      this.pendingBiome = null;
      this.isLoading = false;
      this.showConfirmOverlay = false;
      this.router.navigate(['/game']);
    }, 1500);
  }

  cancelBiomeChange() {
    this.showConfirmOverlay = false;
    this.pendingBiome = null;
   
  }

  // Boss click
  confirmBoss(boss: Entity) {
    this.selectedBoss = boss;
    this.showOverlay = true;
  }

  cancelBoss() {
    this.showOverlay = false;
    this.selectedBoss = null;
  }

  fightBoss() {
    if (!this.selectedBoss) return;
    this.isLoading = true;

    setTimeout(() => {
      localStorage.setItem('selectedBoss', this.selectedBoss!.name);
      this.isLoading = false;
      this.showOverlay = false;
      this.router.navigate(['/game']);
    }, 2000);
  } 

biomePositions = [
    { name: 'forest', x: 38, y: 20 },
    { name: 'plains', x: 10, y: 33 },
    { name: 'jungle', x: 19, y: 9 },
    { name: 'mountains', x: 72, y: 13 },
    { name: 'swamp', x: 76, y: 43 }, 
  ];

bossPositions = [
    { entity: this.bosses[0], x: 41, y: 64 },
    { entity: this.bosses[1], x: 74, y: 8 },
    { entity: this.bosses[2], x: 78, y: 95 },
    { entity: this.bosses[3], x: 45, y: 50 },
    { entity: this.bosses[4], x: 77, y: 28 },
    { entity: this.bosses[5], x: 62, y: 74 },
    { entity: this.bosses[6], x: 42, y: 55 },
    { entity: this.bosses[7], x: 36, y: 90 },
    { entity: this.bosses[8], x: 15, y: 43 },
    { entity: this.bosses[9], x: 30, y: 15 }
  ];
    guardian: Guardian | null = null;  // ✅ add this
 ngOnInit() {
  // Load defeated bosses from session
 const savedGuardian = localStorage.getItem('guardian');
    if (savedGuardian) {
      this.guardian = JSON.parse(savedGuardian);
    }
  const defeatedBosses: string[] = JSON.parse(localStorage.getItem('defeatedBosses') || '[]');
  this.defeatedBosses = defeatedBosses;
 
}
getGuardianRealImage(): string {
  if (!this.guardian || !this.guardian.name) {
    return 'assets/default-guardian.png';
  }

  // Build the path dynamically from the guardian name
  return `assets/Gimages/${this.guardian.name}/5.png`;
}

getGuardianTitle(guardian: any): string {
  return guardian?.name || 'Guardian';
}

  
}