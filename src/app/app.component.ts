 
import { Component, ViewChild, ElementRef } from '@angular/core';
interface Entity {
  name: string;
  hp: number;
  str: number;
  def: number;
  spd: number;
  hpBeforeFight?: number; // optional property
  isBoss?: boolean; 
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showPopulation = false;
playerGuardianAssigned = false;
bosses: Entity[] = [
  { name: 'Fire Dragon', hp: 500, str: 30, def: 20, spd: 15 },
  { name: 'Ice Titan', hp: 400, str: 25, def: 25, spd: 10 },
  { name: 'Shadow Behemoth', hp: 450, str: 28, def: 18, spd: 12 },
  { name: 'Thunder Golem', hp: 350, str: 20, def: 30, spd: 10 },
  { name: 'Ancient Hydra', hp: 500, str: 35, def: 15, spd: 20 },
  { name: 'Earth Colossus', hp: 400, str: 22, def: 28, spd: 10 },
  { name: 'Demon Lord', hp: 500, str: 40, def: 25, spd: 20 },
  { name: 'Lava Serpent', hp: 450, str: 30, def: 20, spd: 25 },
  { name: 'Titanic Kraken', hp: 500, str: 35, def: 15, spd: 20 },
  { name: 'Celestial Phoenix', hp: 400, str: 28, def: 18, spd: 30 }
];

bossesDefeated = 0;
checkBossPhase() {
  if (!this.guardian) return;

  if (this.guardian.hp >= 100 && this.bossesDefeated < 10) {
    document.body.style.background = "linear-gradient(to bottom, #2c3e50, #8B0000)"; // dark red overlay
    this.addMessage("🔥 Boss fights are now available! Defeat 10 bosses to win the game!");
  } else {
    document.body.style.background = "linear-gradient(to bottom, #2c3e50, #3498db)";
  }
}
// Boss search function
searchBoss() {
  if (!this.guardian || this.guardian.hp < 100) return;

  // Generate a boss
  const bossNames = [
    "Fire Dragon", "Ice Titan", "Dark Knight", "Ancient Hydra", "Shadow Beast"
  ];

  const randomIndex = Math.floor(Math.random() * bossNames.length);
  const bossName = bossNames[randomIndex];

  // Boss stats: high HP (300-500) and higher attack
  const boss: Entity = {
  name: bossName,
  hp: Math.floor(300 + Math.random() * 200),
  str: Math.floor(25 + Math.random() * 90),
  def: Math.floor(15 + Math.random() * 80),
  spd: Math.floor(15 + Math.random() * 75),
  isBoss: true
};

  this.currentEnemy = boss;
  this.addMessage(`⚠️ Boss Appeared: ${boss.name} with ${boss.hp} HP!`);
  this.updateEnemyEmoji();
}
 
totalBossesToWin: number = 10;
bossAvailable: boolean = false; // to toggle visual warning
checkBossAvailability() {
  if (this.guardian && this.guardian.hp >= 100 && this.bossesDefeated < this.totalBossesToWin) {
    this.bossAvailable = true;
  } else {
    this.bossAvailable = false;
  }
}
enemies = [
  { name: 'Caterpillar', hp: 20, str: 5, def: 5, spd: 15 },
  { name: 'Mouse', hp: 15, str: 5, def: 3, spd: 50 },
  { name: 'Bunny', hp: 25, str: 7, def: 5, spd: 30 },
  { name: 'Deer', hp: 30, str: 10, def: 7, spd: 25 },
  { name: 'Sloth', hp: 20, str: 8, def: 12, spd: 10 },
  { name: 'Goat', hp: 25, str: 8, def: 8, spd: 20 },
  { name: 'Panda', hp: 25, str: 10, def: 10, spd: 15 },
  { name: 'Moose', hp: 35, str: 12, def: 10, spd: 20 },
  { name: 'Bison', hp: 30, str: 12, def: 10, spd: 15 },
  { name: 'Gorilla', hp: 30, str: 12, def: 10, spd: 20 },
  { name: 'Rhinoceros', hp: 40, str: 15, def: 12, spd: 15 },
  { name: 'Beetle', hp: 15, str: 4, def: 5, spd: 20 },
  { name: 'Fox', hp: 25, str: 10, def: 6, spd: 35 },
  { name: 'Wolf', hp: 35, str: 15, def: 10, spd: 30 },
  { name: 'Bear', hp: 50, str: 20, def: 15, spd: 20 },
  { name: 'Tiger', hp: 45, str: 20, def: 12, spd: 35 },
  { name: 'Lion', hp: 45, str: 22, def: 15, spd: 30 },
  { name: 'Elephant', hp: 60, str: 25, def: 20, spd: 10 },
  { name: 'Hawk', hp: 20, str: 10, def: 5, spd: 50 },
  { name: 'Snake', hp: 25, str: 12, def: 5, spd: 40 },
  { name: 'Crocodile', hp: 45, str: 18, def: 15, spd: 15 },
  { name: 'Boar', hp: 35, str: 15, def: 10, spd: 20 },
  { name: 'Owl', hp: 20, str: 8, def: 5, spd: 35 },
  { name: 'Frog', hp: 15, str: 5, def: 3, spd: 25 },
  { name: 'Lizard', hp: 20, str: 6, def: 4, spd: 30 },
  { name: 'Goblin Farmer', hp: 40, str: 15, def: 10, spd: 25 },
  { name: 'Goblin Mage', hp: 30, str: 20, def: 8, spd: 30 },
  { name: 'Human Warrior', hp: 50, str: 20, def: 15, spd: 20 },
  { name: 'Human Knight', hp: 55, str: 25, def: 20, spd: 15 },
  { name: 'Elf Archer', hp: 35, str: 15, def: 10, spd: 40 },
  { name: 'Elf Mage', hp: 30, str: 18, def: 8, spd: 35 },
  { name: 'Orc Fighter', hp: 60, str: 25, def: 20, spd: 15 },
  { name: 'Orc Shaman', hp: 50, str: 20, def: 15, spd: 20 },
  { name: 'Beast People Hunter', hp: 45, str: 18, def: 15, spd: 25 },
  { name: 'Beast People Warrior', hp: 50, str: 20, def: 18, spd: 20 }
];
biomeEnemies: any = {
  forest: ['Caterpillar','Bunny','Deer','Sloth','Goblin Farmer','Fox','Wolf'],
  plains: ['Mouse','Goat','Bison','Human Warrior','Bear','Tiger','Lion'],
  jungle: ['Panda','Gorilla','Elf Archer','Elf Mage'],
  mountains: ['Moose','Rhinoceros','Orc Fighter','Orc Shaman','Elephant'],
  swamp: ['Beetle','Goblin Mage','Beast People Hunter','Crocodile','Boar','Frog','Lizard','Owl','Snake','Hawk']
};
guardians = [
  { name: 'Caterpillar', hp: 20, str: 5, def: 5, spd: 15 },
  { name: 'Mouse', hp: 15, str: 5, def: 3, spd: 50 },
  { name: 'Bunny', hp: 25, str: 7, def: 5, spd: 30 },
  { name: 'Deer', hp: 30, str: 10, def: 7, spd: 25 },
  { name: 'Sloth', hp: 20, str: 8, def: 12, spd: 10 },
  { name: 'Goat', hp: 25, str: 8, def: 8, spd: 20 },
  { name: 'Panda', hp: 25, str: 10, def: 10, spd: 15 },
  { name: 'Moose', hp: 35, str: 12, def: 10, spd: 20 },
  { name: 'Bison', hp: 30, str: 12, def: 10, spd: 15 },
  { name: 'Gorilla', hp: 30, str: 12, def: 10, spd: 20 },
  { name: 'Rhinoceros', hp: 40, str: 15, def: 12, spd: 15 },
  { name: 'Beetle', hp: 15, str: 4, def: 5, spd: 20 }
];

assignRandomGuardian() {
  const randomIndex = Math.floor(Math.random() * this.guardians.length);
  this.guardian = { ...this.guardians[randomIndex] };
  this.playerGuardianAssigned = true;
  this.addMessage(`You have been assigned the guardian: ${this.guardian.name}!`);

  this.updateGuardianEmoji();  // ✅ Add this
  this.saveGame();
}

tribes = [
  { name: 'Humans', population: 250 },
  { name: 'Goblins', population: 100 },
  { name: 'Orcs', population: 200 },
  { name: 'Beast People', population: 250 },
  { name: 'Elves', population: 50 }
];

animals = [
  { name: 'Caterpillar', count: 50, biome: 'forest' },
  { name: 'Mouse', count: 100, biome: 'plains' },
  { name: 'Bunny', count: 40, biome: 'forest' },
  { name: 'Deer', count: 30, biome: 'forest' },
  { name: 'Sloth', count: 15, biome: 'forest' },
  { name: 'Goat', count: 25, biome: 'plains' },
  { name: 'Panda', count: 10, biome: 'jungle' },
  { name: 'Moose', count: 5, biome: 'mountains' },
  { name: 'Bison', count: 10, biome: 'plains' },
  { name: 'Gorilla', count: 5, biome: 'jungle' },
  { name: 'Rhinoceros', count: 3, biome: 'mountains' },
  { name: 'Beetle', count: 100, biome: 'swamp' },
  { name: 'Fox', count: 20, biome: 'forest' },
  { name: 'Wolf', count: 15, biome: 'forest' },
  { name: 'Bear', count: 10, biome: 'forest' },
  { name: 'Tiger', count: 8, biome: 'forest' },
  { name: 'Lion', count: 7, biome: 'forest' },
  { name: 'Elephant', count: 5, biome: 'plains' },
  { name: 'Hawk', count: 15, biome: 'plains' },
  { name: 'Snake', count: 12, biome: 'plains' },
  { name: 'Crocodile', count: 5, biome: 'swamp' },
  { name: 'Boar', count: 8, biome: 'forest' },
  { name: 'Owl', count: 10, biome: 'forest' },
  { name: 'Frog', count: 20, biome: 'swamp' },
  { name: 'Lizard', count: 15, biome: 'forest' },
  { name: 'Goblin Farmer', count: 10, biome: 'forest' },
  { name: 'Goblin Mage', count: 8, biome: 'swamp' },
  { name: 'Human Warrior', count: 12, biome: 'plains' },
  { name: 'Human Knight', count: 10, biome: 'plains' },
  { name: 'Elf Archer', count: 5, biome: 'jungle' },
  { name: 'Elf Mage', count: 4, biome: 'jungle' },
  { name: 'Orc Fighter', count: 6, biome: 'mountains' },
  { name: 'Orc Shaman', count: 5, biome: 'jungle' },
  { name: 'Beast People Hunter', count: 3, biome: 'jungle' },
  { name: 'Beast People Warrior', count: 3, biome: 'jungle' }
];

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  // Biomes
  biomes = ['forest', 'plains', 'mountains', 'jungle', 'swamp'];
  selectedBiome = this.biomes[0];

  // Guardian stats
 

  // Current enemy
  currentEnemy: Entity | null = null;

  // Messages
  messages: string[] = [];
  ngOnInit() {
  this.loadGame();
}
scrollToBottom() {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) {}
  }

  addMessage(msg: string) {
    this.messages.push(msg);
    setTimeout(() => this.scrollToBottom(), 0);
  }  
gameWon = false;

attackEnemy() {
  if (!this.currentEnemy || !this.guardian) return;

  // --- Player attacks enemy ---
  if (!this.rollDodge(this.guardian, this.currentEnemy)) {
    const dmg = this.calculateDamage(this.guardian, this.currentEnemy);
    this.currentEnemy.hp -= dmg;
    this.addMessage(`You hit ${this.currentEnemy.name} for ${dmg} damage!`);
  } else {
    this.addMessage(`${this.currentEnemy.name} dodged your attack!`);
  }

  // --- Check if enemy is defeated ---
  if (this.currentEnemy.hp <= 0) {

    if (this.currentEnemy.isBoss) {
      // Boss defeated
      this.bossesDefeated++;
      this.addMessage(`🏆 You defeated boss ${this.currentEnemy.name}!`);

      if (this.bossesDefeated >= this.totalBossesToWin) {
        this.gameWon = true;
        this.addMessage("🎉 Congratulations! You defeated all bosses!");
      }

    } else {
      // Normal enemy defeated: reduce population and absorb stats
      const animal = this.animals.find(a => a.name === this.currentEnemy!.name);
      if (animal) {
        animal.count = Math.max(0, animal.count - 1);
      }

      this.absorbStats(this.currentEnemy);
      this.addMessage(`🪶 You absorbed ${this.currentEnemy.name}'s strength!`);
    }

    this.currentEnemy = null;
    this.checkBossAvailability();
    return;
  }

  // --- Enemy attacks player ---
  if (!this.rollDodge(this.currentEnemy, this.guardian)) {
    const dmg = this.calculateDamage(this.currentEnemy, this.guardian);
    this.guardian.hp -= dmg;
    this.addMessage(`${this.currentEnemy.name} hit you for ${dmg} damage!`);
  } else {
    this.addMessage(`You dodged ${this.currentEnemy.name}'s attack!`);
  }

  // --- Check if Guardian is defeated ---
  if (this.guardian.hp <= 0) {
    this.guardian.hp = 0;
    this.addMessage(`💀 Your Guardian was defeated by ${this.currentEnemy?.name}!`);
    this.showGuardianSlainPopup = true; // trigger popup
    this.currentEnemy = null;
    this.playerGuardianAssigned = false; // allow selecting new guardian
  }

  this.checkBossAvailability();
}
selectNewGuardian() {
  this.showGuardianSlainPopup = false;
  this.assignRandomGuardian();
}
showGuardianSlainPopup: boolean = false;







 

rollDodge(attacker: any, defender: any): boolean {
  const dodgeChance = defender.spd / (attacker.spd + defender.spd);
  return Math.random() < dodgeChance;
} 
absorbStats(enemy: Entity) {
  if (!this.guardian) return;

  const originalHp = (enemy.hpBeforeFight ?? enemy.hp)/4; // full original HP
  this.guardian.hp += originalHp;
  this.guardian.str += enemy.str * 0.01;
  this.guardian.def += enemy.def * 0.01;
  this.guardian.spd += enemy.spd * 0.01;

  // Show absorbed stats in messages
  this.addMessage(`✨ You absorbed ${enemy.name}'s strength!`);
  this.addMessage(`❤️ HP +${originalHp}`);
  this.addMessage(`⚔️ STR +${(enemy.str * 0.01).toFixed(2)}`);
  this.addMessage(`🛡️ DEF +${(enemy.def * 0.01).toFixed(2)}`);
  this.addMessage(`💨 SPD +${(enemy.spd * 0.01).toFixed(2)}`);
}


  escape() {
  if (!this.currentEnemy || !this.guardian) return;

  const escapeSuccess = Math.random() < (this.guardian.spd / (this.guardian.spd + this.currentEnemy.spd));

  if (escapeSuccess) {
    this.addMessage('🏃 You escaped safely!');
    this.currentEnemy = null;
  } else {
    // Enemy attacks because escape failed
    const dmg = this.calculateDamage(this.currentEnemy, this.guardian);
    this.guardian.hp -= dmg;
    this.addMessage(`❌ Escape failed! ${this.currentEnemy.name} hit you for ${dmg} damage!`);

    if (this.guardian.hp <= 0) {
      this.addMessage(`💀 Your Guardian has fallen... Game Over!`);
      this.currentEnemy = null;
    }
  }

  this.saveGame();
}
  confirmReset() {
  const confirmRewind = confirm("⚠️ Are you sure you want to rewind time? All progress will be lost.");
  if (confirmRewind) {
    this.resetGame();
  }
}
guardian: Entity | null = null;
resetGame() {
  sessionStorage.removeItem('lastGuardianSave');

  // Reset local variables
  this.guardian = null;
  this.playerGuardianAssigned = false;
  this.tribes.forEach(t => t.population = t.population || 100); 
  this.animals.forEach(a => a.count = a.count || 50);
  this.messages = [];
  this.currentEnemy = null;
  this.selectedBiome = this.biomes[0];

  // Reset boss-related state
  this.bossesDefeated = 0;
  this.gameWon = false;
}
enemyEmojis: { [key: string]: string } = {
  // Animals
  "Caterpillar": "🐛",
  "Mouse": "🐁",
  "Bunny": "🐇",
  "Deer": "🦌",
  "Sloth": "🦥",
  "Goat": "🐐",
  "Panda": "🐼",
  "Moose": "🦌",
  "Bison": "🐃",
  "Gorilla": "🦍",
  "Rhinoceros": "🦏",
  "Beetle": "🐞",
  "Fox": "🦊",
  "Wolf": "🐺",
  "Bear": "🐻",
  "Tiger": "🐯",
  "Lion": "🦁",
  "Elephant": "🐘",
  "Hawk": "🦅",
  "Snake": "🐍",
  "Crocodile": "🐊",
  "Boar": "🐗",
  "Owl": "🦉",
  "Frog": "🐸",
  "Lizard": "🦎",

  // Weak Tribe Units / Humanoids
  "Goblin Farmer": "👨‍🌾",
  "Goblin Mage": "🧙‍♂️",
  "Human Warrior": "🧔‍♂️",
  "Human Knight": "🤺",
  "Elf Archer": "🏹",
  "Elf Mage": "🧝‍♂️",
  "Orc Fighter": "🪓",
  "Orc Shaman": "🔮",
  "Beast People Hunter": "🏹",
  "Beast People Warrior": "⚔️"
};

searchEnemy() {
  if (!this.guardian) return;

  const possibleEnemies = this.biomeEnemies[this.selectedBiome] || [];

  // Only include enemies with population > 0
  const enemiesInBiome = this.enemies.filter(
    e => possibleEnemies.includes(e.name) &&
         (this.animals.find(a => a.name === e.name)?.count ?? 0) > 0
  );

  if (enemiesInBiome.length === 0) {
    this.addMessage(`🏞️ The ${this.selectedBiome} biome is completely cleared!`);
    this.currentEnemy = null;
    return;
  }

  const randomIndex = Math.floor(Math.random() * enemiesInBiome.length);
  const enemy: Entity = { ...enemiesInBiome[randomIndex] };

  // Save original HP for absorption
  (enemy as any).hpBeforeFight = enemy.hp;

  this.currentEnemy = enemy;
  this.addMessage(`You encountered a ${this.currentEnemy.name}!`);
  this.updateEnemyEmoji();
}





calculateDamage(attacker: any, defender: any): number {
  let dmg = attacker.str - defender.def * 0.5;
  return Math.max(1, Math.floor(dmg));
}

calculateDodgeChance(attacker: any, defender: any): number {
  const dodgeChance = defender.spd / (attacker.spd + defender.spd);
  return Math.floor(dodgeChance * 100); // convert to %
}
saveGame() {
  const gameState = {
    guardian: this.guardian,
    playerGuardianAssigned: this.playerGuardianAssigned,
    tribes: this.tribes,
    animals: this.animals,
    messages: this.messages,
    selectedBiome: this.selectedBiome,
    currentEnemy: this.currentEnemy
  };

  sessionStorage.setItem('lastGuardianSave', JSON.stringify(gameState));
}
loadGame() {
  const saved = sessionStorage.getItem('lastGuardianSave');
  if (saved) {
    const data = JSON.parse(saved);
    this.guardian = data.guardian;
    this.playerGuardianAssigned = data.playerGuardianAssigned;
    this.tribes = data.tribes;
    this.animals = data.animals;
    this.messages = data.messages || [];
    this.selectedBiome = data.selectedBiome;
    this.currentEnemy = data.currentEnemy;

    this.updateGuardianEmoji();  // ✅ Add this
    this.updateEnemyEmoji();     // ✅ Also update enemy emoji if there was a saved enemy
  }
}
guardianEmoji: string = "🛡️";        // default emoji for Guardian
  currentEnemyEmoji: string = "👹";    // default emoji for Enemy
updateGuardianEmoji() {
  if (this.guardian) {
    this.guardianEmoji = this.enemyEmojis[this.guardian.name] || "🛡️";
  } else {
    this.guardianEmoji = "🛡️"; // fallback
  }
}

updateEnemyEmoji() {
  if (this.currentEnemy) {
    this.currentEnemyEmoji = this.enemyEmojis[this.currentEnemy.name] || "👹";
  } else {
    this.currentEnemyEmoji = "👹"; // fallback when no enemy
  }
}
}
