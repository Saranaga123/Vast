
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
  totalBossesToWin: number = 10;
  bossAvailable: boolean = false; // to toggle visual warning
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
    forest: ['Caterpillar', 'Bunny', 'Deer', 'Sloth', 'Goblin Farmer', 'Fox', 'Wolf'],
    plains: ['Mouse', 'Goat', 'Bison', 'Human Warrior', 'Bear', 'Tiger', 'Lion'],
    jungle: ['Panda', 'Gorilla', 'Elf Archer', 'Elf Mage'],
    mountains: ['Moose', 'Rhinoceros', 'Orc Fighter', 'Orc Shaman', 'Elephant'],
    swamp: ['Beetle', 'Goblin Mage', 'Beast People Hunter', 'Crocodile', 'Boar', 'Frog', 'Lizard', 'Owl', 'Snake', 'Hawk']
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
    { name: 'Beetle', hp: 15, str: 4, def: 5, spd: 60 }
  ];
  regenInterval: any;
  guardianRegenInterval: any = null;
  guardianMaxHp: any;

  tribes = [
    { name: 'Humans', population: 250 },
    { name: 'Goblins', population: 100 },
    { name: 'Orcs', population: 200 },
    { name: 'Beast People', population: 250 },
    { name: 'Elves', population: 50 }
  ]; 
guardianNextHealTimeout: any = null;
guardianRegenMessage: string = '';
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
  gameWon = false;
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  // Biomes
  biomes = ['forest', 'plains', 'mountains', 'jungle', 'swamp'];
  selectedBiome = this.biomes[0];

  // Guardian stats


  // Current enemy
  currentEnemy: Entity | null = null;

  // Messages
  messages: string[] = [];
  assignRandomGuardian() {
  const randomIndex = Math.floor(Math.random() * this.guardians.length);
  this.guardian = { ...this.guardians[randomIndex] };
  this.guardianMaxHp = this.guardian.hp; // ✅ ensures max HP is tracked
  this.playerGuardianAssigned = true;
  this.addMessage(`You have been assigned the guardian: ${this.guardian.name}!`);
  this.startGuardianRegen();
  this.updateGuardianEmoji();
  this.saveGame();
}
skillPoints: number = 0;
spendSkillPoint(stat: "str" | "def" | "spd") {
  if (!this.guardian || this.skillPoints <= 0) return;

  switch (stat) {
    case "str":
      this.guardian.str += 1;
      break;
    case "def":
      this.guardian.def += 1;
      break;
    case "spd":
      this.guardian.spd += 1;
      break;
  }

  this.skillPoints--;
  this.addMessage(`⚡ You spent 1 Skill Point on ${stat.toUpperCase()}.`);
  this.saveGame();
}
  gameOver() {
    if (this.guardianRegenInterval) clearInterval(this.guardianRegenInterval);
    this.addMessage("💀 Game Over!");
    this.guardian = null;
  }
  guardianSlain() {
    if (this.guardianRegenInterval) clearInterval(this.guardianRegenInterval);
    this.showGuardianSlainPopup = true;
  }
startGuardianRegen() {
  if (!this.guardian || this.guardian.hp >= this.guardianMaxHp) return;

  // Stop any existing intervals
  this.stopGuardianRegen();

  let secondsRemaining = 60;
  this.guardianRegenMessage = `⏱️ Healing in progress... Next +10 HP in ${secondsRemaining}s`;

  this.guardianNextHealTimeout = setInterval(() => {
    secondsRemaining--;
    if (secondsRemaining > 0) {
      this.guardianRegenMessage = `⏱️ Healing in progress... Next +10 HP in ${secondsRemaining}s`;
    } else {
      if (this.guardian) {
        // Heal but never exceed max HP
        this.guardian.hp = Math.min(this.guardian.hp + 10, this.guardianMaxHp);
      }
      this.guardianRegenMessage = '';

      clearInterval(this.guardianNextHealTimeout);

      // Only restart if still below max
      if (this.guardian && this.guardian.hp < this.guardianMaxHp) {
        this.startGuardianRegen();
      }
    }
  }, 1000);
}

stopGuardianRegen() {
  if (this.guardianRegenInterval) {
    clearInterval(this.guardianRegenInterval);
    this.guardianRegenInterval = null;
  }
  if (this.guardianNextHealTimeout) {
    clearInterval(this.guardianNextHealTimeout);
    this.guardianNextHealTimeout = null;
  }
  this.guardianRegenMessage = '';
}
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
  checkBossAvailability() {
    if (this.guardian && this.guardian.hp >= 100 && this.bossesDefeated < this.totalBossesToWin) {
      this.bossAvailable = true;
    } else {
      this.bossAvailable = false;
    }
  }
   

  ngOnInit() {
    this.loadGame();
  }
  scrollToBottom() {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  addMessage(msg: string) {
    this.messages.push(msg);
    setTimeout(() => this.scrollToBottom(), 0);
  }

 attackEnemy() {
  if (!this.currentEnemy || !this.guardian) return;

  // Stop healing during combat
  this.stopGuardianRegen();

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
      this.bossesDefeated++;
      this.addMessage(`🏆 You defeated boss ${this.currentEnemy.name}!`);
      if (this.bossesDefeated >= this.totalBossesToWin) {
        this.gameWon = true;
        this.addMessage("🎉 Congratulations! You defeated all bosses!");
      }
    } else {
      const animal = this.animals.find(a => a.name === this.currentEnemy!.name);
      if (animal) animal.count = Math.max(0, animal.count - 1);

      // Award skill point instead of adding stats
      this.skillPoints++;
      this.addMessage(`⭐ You earned 1 Skill Point! (Total: ${this.skillPoints})`);

      this.absorbStats(this.currentEnemy); // optional: keep only non-HP stats absorption
      this.addMessage(`🪶 You absorbed ${this.currentEnemy.name}'s strength!`);

      // Restart healing if HP < max
      this.maybeStartRegen();
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
    this.addMessage(`💀 Your Guardian was defeated by ${this.currentEnemy?.name || 'the enemy'}!`);
    this.showGuardianSlainPopup = true;
    this.currentEnemy = null;
    this.playerGuardianAssigned = false;

    this.stopGuardianRegen();
  }

  this.saveGame();
}


  selectNewGuardian() {
    this.showGuardianSlainPopup = false;
    this.assignRandomGuardian();
    this.resetGame()
  }
  showGuardianSlainPopup: boolean = false;

  rollDodge(attacker: any, defender: any): boolean {
    const dodgeChance = defender.spd / (attacker.spd + defender.spd);
    return Math.random() < dodgeChance;
  }
  absorbStats(enemy: Entity) {
    if (!this.guardian) return;

    const originalHp = (enemy.hpBeforeFight ?? enemy.hp) / 3; // full original HP
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

maybeStartRegen() {
  if (this.guardian && this.guardian.hp > 0 && this.guardian.hp < this.guardianMaxHp) {
    this.startGuardianRegen();
  }
}
escape() {
  if (!this.currentEnemy || !this.guardian) return;

  // Stop healing during combat
  this.stopGuardianRegen();

  const escapeSuccess = Math.random() < (this.guardian.spd / (this.guardian.spd + this.currentEnemy.spd));

  if (escapeSuccess) {
    this.addMessage('🏃 You escaped safely!');
    this.currentEnemy = null;

    // Restart healing if needed
    this.maybeStartRegen();

  } else {
    // Enemy attacks because escape failed
    const dmg = this.calculateDamage(this.currentEnemy, this.guardian);
    this.guardian.hp -= dmg;
    this.addMessage(`❌ Escape failed! ${this.currentEnemy.name} hit you for ${dmg} damage!`);

    // --- Check if Guardian is defeated ---
    if (this.guardian.hp <= 0) {
      this.guardian.hp = 0;
      this.addMessage(`💀 Your Guardian has been defeated by ${this.currentEnemy.name}!`);
      this.showGuardianSlainPopup = true;
      this.currentEnemy = null;
      this.playerGuardianAssigned = false;

      // Stop regen while dead
      this.stopGuardianRegen();
    }
  }

  this.saveGame();
}
isFullscreen: boolean = false;

toggleFullscreen() {
  if (!this.isFullscreen) {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) {
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) {
      (elem as any).msRequestFullscreen();
    }
    this.isFullscreen = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
    this.isFullscreen = false;
  }
}
  confirmReset() {
    const confirmRewind = confirm("⚠️ Are you sure you want to rewind time? All progress will be lost.");
    if (confirmRewind) {
      this.resetGame();
    }
  }
  guardian: Entity | null = null;
  resetGame() {
  localStorage.removeItem('gameState');

  this.guardian = null;
  this.playerGuardianAssigned = false;
  this.currentEnemy = null;
  this.messages = [];
  this.selectedBiome = this.biomes[0];

  // restore default populations if you want a fresh world
  this.tribes.forEach(t => t.population = t.population || 100);
  this.animals.forEach(a => a.count = a.count || 50);

  this.bossesDefeated = 0;
  this.gameWon = false;

  this.updateGuardianEmoji();
  this.updateEnemyEmoji();
  this.checkBossAvailability();
  this.checkBossPhase();
}

  autoAttackEnemy() {
  if (!this.guardian || !this.currentEnemy) return;

  // Clear any existing loop
  if (this.autoAttackInterval) {
    clearInterval(this.autoAttackInterval);
  }

  this.autoAttackInterval = setInterval(() => {
    // Stop if no guardian or enemy
    if (!this.guardian || !this.currentEnemy) {
      clearInterval(this.autoAttackInterval);
      this.autoAttackInterval = null;
      return;
    }

    // Run one attack round
    this.attackEnemy();

    // Stop if someone is dead
    if (this.guardian.hp <= 0 || this.currentEnemy.hp <= 0) {
      clearInterval(this.autoAttackInterval);
      this.autoAttackInterval = null;
    }
  }, 500); // 0.5 seconds
}
autoAttackInterval: any = null;
  searchEnemy() {
    if (!this.guardian) return;
this.stopGuardianRegen();
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
  const state = {
    guardian: this.guardian,                 // includes current HP
    guardianMaxHp: this.guardianMaxHp,
    bossesDefeated: this.bossesDefeated,
    gameWon: this.gameWon,
    animals: this.animals,
    tribes: this.tribes,
    selectedBiome: this.selectedBiome,
    currentEnemy: this.currentEnemy,         // persist ongoing fight (if any)
    messages: this.messages,
    lastSaved: Date.now()
  };
  localStorage.setItem('gameState', JSON.stringify(state));
}
loadGame() {
  const saved = localStorage.getItem("gameState");
  if (!saved) return;

  try {
    const state = JSON.parse(saved);

    this.guardian = state.guardian ?? null;
    this.guardianMaxHp = state.guardianMaxHp ?? (this.guardian?.hp ?? 0);
    this.bossesDefeated = state.bossesDefeated ?? 0;
    this.gameWon = !!state.gameWon;

    // Collections / UI state
    this.animals = state.animals ?? this.animals;
    this.tribes = state.tribes ?? this.tribes;
    this.selectedBiome = state.selectedBiome ?? this.selectedBiome;
    this.currentEnemy = state.currentEnemy ?? null;
    this.messages = state.messages ?? [];

    // Guardian assignment flag
    this.playerGuardianAssigned = !!this.guardian;

    // Off-time healing (10 HP / min, never above max)
    if (this.guardian) {
      const now = Date.now();
      const lastSaved = state.lastSaved ?? now;
      const elapsedMs = Math.max(0, now - lastSaved);
      const minutesAway = Math.floor(elapsedMs / 60000);

      if (minutesAway > 0 && this.guardian.hp < this.guardianMaxHp) {
        const hpRecovered = minutesAway * 10;
        const before = this.guardian.hp;
        this.guardian.hp = Math.min(this.guardian.hp + hpRecovered, this.guardianMaxHp);
        const gained = this.guardian.hp - before;
        if (gained > 0) {
          this.addMessage(`🌿 While you were away (${minutesAway} min), your Guardian recovered ${gained} HP!`);
        }
      }
    }

    // Recompute derived UI state
    this.updateGuardianEmoji();
    this.updateEnemyEmoji();
    this.checkBossAvailability();
    this.checkBossPhase();

    // Only (re)start regen if we have a guardian, not in combat, and not full HP
    if (this.guardian && !this.currentEnemy && this.guardian.hp < this.guardianMaxHp) {
      this.maybeStartRegen();
    }
  } catch (e) {
    console.error("Failed to parse saved game", e);
    localStorage.removeItem("gameState"); // prevent getting stuck on a bad save
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
