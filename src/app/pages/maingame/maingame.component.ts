import { Component, ViewChild, ElementRef } from '@angular/core';
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
  hpBeforeFight?: number;
  isBoss?: boolean;
  imageUrl?: any;
  image?: any;
  evolutionLevel?: number;
  path?: string;
  titles?: EvolutionTitle[];
}
interface AnimalPopulation {
  name: string;
  originalCount: number;
  count: number;
  biome: string;
}
@Component({
  selector: 'app-maingame',
  templateUrl: './maingame.component.html',
  styleUrls: ['./maingame.component.scss']
})
export class MaingameComponent {
showPopulation = false;
  playerGuardianAssigned = false;
  bosses: Entity[] = [
    { name: 'Fire Dragon', hp: 500, str: 30, def: 20, spd: 15, imageUrl: 'assets/Fire Dragon.webp',image: 'assets/Bimages/dragon.png', },
    { name: 'Ice Titan', hp: 400, str: 25, def: 25, spd: 10, imageUrl: 'assets/Ice Titan.webp' ,image: 'assets/Bimages/ice.png'},
    { name: 'Shadow Behemoth', hp: 450, str: 28, def: 18, spd: 12, imageUrl: 'assets/Shadow Behemoth.webp' ,image: 'assets/Bimages/behomoth.png'},
    { name: 'Thunder Golem', hp: 350, str: 20, def: 30, spd: 10, imageUrl: 'assets/Thunder Golem.gif' ,image: 'assets/Bimages/thunder.png'},
    { name: 'Ancient Hydra', hp: 500, str: 35, def: 15, spd: 20, imageUrl: 'assets/Ancient Hydra.gif' ,image: 'assets/Bimages/hydra.png'},
    { name: 'Earth Colossus', hp: 400, str: 22, def: 28, spd: 10, imageUrl: 'assets/Earth Colossus.gif' ,image: 'assets/Bimages/earth.png'},
    { name: 'Demon Lord', hp: 500, str: 40, def: 25, spd: 20, imageUrl: 'assets/demon-lord.gif',image: 'assets/Bimages/demon.png' },
    { name: 'Titanic Kraken', hp: 500, str: 35, def: 15, spd: 20, imageUrl: 'assets/Titanic Kraken.webp' ,image: 'assets/Bimages/craken.png'},
    { name: 'Celestial Phoenix', hp: 400, str: 28, def: 18, spd: 30, imageUrl: 'assets/Celestial Phoenix.gif',image: 'assets/Bimages/phenix.png' }
  ];
  bossesDefeated = 0;
  totalBossesToWin: number = 10;
  bossAvailable: boolean = false;
   enemies = [
  { name: 'Caterpillar', hp: 15, str: 3, def: 4, spd: 10, imageUrl: 'assets/Caterpillar.gif' },
  { name: 'Mouse', hp: 18, str: 4, def: 3, spd: 55, imageUrl: 'assets/Mouse.gif' },
  { name: 'Bunny', hp: 22, str: 6, def: 5, spd: 35, imageUrl: 'assets/Bunny.gif' },
  { name: 'Deer', hp: 35, str: 9, def: 6, spd: 30, imageUrl: 'assets/Deer.webp' },
  { name: 'Sloth', hp: 28, str: 7, def: 10, spd: 8, imageUrl: 'assets/Sloth.gif' },
  { name: 'Goat', hp: 30, str: 10, def: 8, spd: 20, imageUrl: 'assets/Goat.gif' },
  { name: 'Panda', hp: 40, str: 12, def: 12, spd: 12, imageUrl: 'assets/Panda.gif' },
  { name: 'Bison', hp: 45, str: 14, def: 12, spd: 15, imageUrl: 'assets/Bison.gif' },
  { name: 'Gorilla', hp: 50, str: 20, def: 12, spd: 18, imageUrl: 'assets/Gorilla.gif' },
  { name: 'Beetle', hp: 18, str: 5, def: 12, spd: 12, imageUrl: 'assets/Beetle.gif' },
  { name: 'Fox', hp: 25, str: 9, def: 5, spd: 40, imageUrl: 'assets/Fox.gif' },
  { name: 'Wolf', hp: 35, str: 14, def: 9, spd: 32, imageUrl: 'assets/Wolf.gif' },
  { name: 'Bear', hp: 55, str: 20, def: 15, spd: 15, imageUrl: 'assets/Bear.gif' },
  { name: 'Tiger', hp: 45, str: 18, def: 12, spd: 38, imageUrl: 'assets/Tiger.gif' },
  { name: 'Lion', hp: 50, str: 20, def: 14, spd: 34, imageUrl: 'assets/Lion.gif' },
  { name: 'Elephant', hp: 80, str: 25, def: 22, spd: 8, imageUrl: 'assets/Elephant.gif' },
  { name: 'Hawk', hp: 18, str: 8, def: 4, spd: 60, imageUrl: 'assets/Hawk.gif' },
  { name: 'Snake', hp: 20, str: 12, def: 5, spd: 45, imageUrl: 'assets/Snake.gif' },
  { name: 'Crocodile', hp: 55, str: 18, def: 18, spd: 12, imageUrl: 'assets/Crocodile.gif' },
  { name: 'Boar', hp: 35, str: 13, def: 10, spd: 22, imageUrl: 'assets/Boar.gif' },
  { name: 'Owl', hp: 20, str: 7, def: 4, spd: 40, imageUrl: 'assets/Owl.gif' },
  { name: 'Frog', hp: 20, str: 6, def: 4, spd: 30, imageUrl: 'assets/Frog.gif' },
  { name: 'Lizard', hp: 22, str: 7, def: 5, spd: 28, imageUrl: 'assets/Lizard.gif' },
  { name: 'Goblin Farmer', hp: 35, str: 12, def: 9, spd: 22, imageUrl: 'assets/Goblin Farmer.gif' },
  { name: 'Goblin Mage', hp: 28, str: 18, def: 7, spd: 28, imageUrl: 'assets/Goblin Mage.gif' },
  { name: 'Human Warrior', hp: 45, str: 18, def: 14, spd: 22, imageUrl: 'assets/Human Warrior.gif' },
  { name: 'Human Knight', hp: 55, str: 22, def: 20, spd: 16, imageUrl: 'assets/Human Knight.gif' },
  { name: 'Elf Archer', hp: 30, str: 14, def: 8, spd: 42, imageUrl: 'assets/Elf Archer.gif' },
  { name: 'Elf Mage', hp: 28, str: 20, def: 7, spd: 35, imageUrl: 'assets/Elf Mage.webp' },
  { name: 'Orc Fighter', hp: 65, str: 25, def: 20, spd: 14, imageUrl: 'assets/Orc Fighter.gif' },
  { name: 'Orc Shaman', hp: 55, str: 22, def: 15, spd: 18, imageUrl: 'assets/Orc Shaman.gif' },
  { name: 'Beast People Hunter', hp: 45, str: 16, def: 12, spd: 30, imageUrl: 'assets/Beast People Hunter.gif' },
  { name: 'Beast People Warrior', hp: 55, str: 20, def: 18, spd: 20, imageUrl: 'assets/Beast People Warrior.gif' }
];
   
  biomeEnemies: any = {
    forest: ['Caterpillar', 'Bunny', 'Deer', 'Sloth', 'Goblin Farmer', 'Fox', 'Wolf'],
    plains: ['Mouse', 'Goat', 'Bison', 'Human Warrior', 'Human Knight', 'Bear', 'Tiger', 'Lion'],
    jungle: ['Panda', 'Gorilla', 'Elf Archer', 'Elf Mage'],
    mountains: ['Orc Fighter', 'Orc Shaman', 'Elephant'],
    swamp: ['Beetle', 'Goblin Mage', 'Beast People Hunter', 'Beast People Warrior', 'Crocodile', 'Boar', 'Frog', 'Lizard', 'Owl', 'Snake', 'Hawk']
  };
  guardians: Entity[] = [
    {
      name: 'Rabbit',
      hp: 25,
      str: 10,
      def: 10,
      spd: 16,
      imageUrl: 'assets/Bunny.gif',
      image: 'assets/Gimages/Rabbit/1.png',
      path: 'Speed-based',
      titles: [
        { hp: 0, title: 'Wild Rabbit', bonus: { str: 0, def: 0, spd: 0 } },
        { hp: 150, title: 'Swift Runner Hare', bonus: { str: 2, def: 0, spd: 5 } },
        { hp: 300, title: 'Moonlit Sage Hare', bonus: { str: 3, def: 1, spd: 7 } },
        { hp: 500, title: 'Starborn Hare', bonus: { str: 5, def: 3, spd: 10 } },
        { hp: 750, title: 'Eternal Spirit Hare', bonus: { str: 7, def: 5, spd: 15 } }
      ]
    },
    {
      name: 'Frog',
      hp: 25,
      str: 12,
      def: 12,
      spd: 12,
      imageUrl: 'assets/Frog.gif',
      image: 'assets/Gimages/Frog/1.png',
      path: 'Balanced',
      titles: [
        { hp: 0, title: 'Common Frog', bonus: { str: 0, def: 0, spd: 0 } },
        { hp: 150, title: 'Agile Jumper', bonus: { str: 1, def: 1, spd: 3 } },
        { hp: 300, title: 'Mystic Leaper', bonus: { str: 2, def: 2, spd: 5 } },
        { hp: 500, title: 'Moonlit Croaker', bonus: { str: 3, def: 3, spd: 7 } },
        { hp: 750, title: 'Eternal Sage Frog', bonus: { str: 5, def: 4, spd: 10 } }
      ]
    },
    {
      name: 'Goat',
      hp: 35,
      str: 16,
      def: 10,
      spd: 10,
      imageUrl: 'assets/Goat.gif',
      image: 'assets/Gimages/Goat/1.png',
      path: 'Strength-based',
      titles: [
        { hp: 0, title: 'Mountain Goat', bonus: { str: 0, def: 0, spd: 0 } },
        { hp: 150, title: 'Strong Hoof', bonus: { str: 3, def: 1, spd: 1 } },
        { hp: 300, title: 'Battle Ram', bonus: { str: 5, def: 2, spd: 2 } },
        { hp: 500, title: 'Thunder Horn', bonus: { str: 7, def: 3, spd: 3 } },
        { hp: 750, title: 'Eternal Mountain Goat', bonus: { str: 10, def: 5, spd: 4 } }
      ]
    },
    {
      name: 'Beetle',
      hp: 35,
      str: 10,
      def: 16,
      spd: 10,
      imageUrl: 'assets/Beetle.gif',
      image: 'assets/Gimages/Beetle/1.png',
      path: 'Defense-based',
      titles: [
        { hp: 0, title: 'Sturdy Beetle', bonus: { str: 0, def: 0, spd: 0 } },
        { hp: 150, title: 'Shielded Beetle', bonus: { str: 1, def: 5, spd: 1 } },
        { hp: 300, title: 'Ironcarapace Beetle', bonus: { str: 2, def: 5, spd: 2 } },
        { hp: 500, title: 'Armored Titan Beetle', bonus: { str: 3, def: 7, spd: 3 } },
        { hp: 750, title: 'Invincible Colossus', bonus: { str: 5, def: 10, spd: 4 } }
      ]
    }
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
animals: AnimalPopulation[] = [
  // 🌳 Forest
  { name: 'Caterpillar', originalCount: 30, count: 30, biome: 'forest' },
  { name: 'Bunny', originalCount: 20, count: 20, biome: 'forest' },
  { name: 'Deer', originalCount: 20, count: 20, biome: 'forest' },
  { name: 'Wolf', originalCount: 20, count: 20, biome: 'forest' },
  { name: 'Bear', originalCount: 10, count: 10, biome: 'forest' },
  { name: 'Tiger', originalCount: 8, count: 8, biome: 'forest' },
  { name: 'Lion', originalCount: 5, count: 5, biome: 'forest' },
  { name: 'Fox', originalCount: 20, count: 20, biome: 'forest' },
  { name: 'Owl', originalCount: 15, count: 15, biome: 'forest' },
  { name: 'Sloth', originalCount: 15, count: 15, biome: 'forest' },
  { name: 'Boar', originalCount: 10, count: 10, biome: 'forest' },

  // 🌾 Plains
  { name: 'Mouse', originalCount: 30, count: 30, biome: 'plains' },
  { name: 'Goat', originalCount: 30, count: 30, biome: 'plains' },
  { name: 'Bison', originalCount: 12, count: 12, biome: 'plains' },
  { name: 'Human Warrior', originalCount: 15, count: 15, biome: 'plains' },
  { name: 'Human Knight', originalCount: 10, count: 10, biome: 'plains' },
  { name: 'Elephant', originalCount: 4, count: 4, biome: 'plains' },
  { name: 'Hawk', originalCount: 20, count: 20, biome: 'plains' },
  { name: 'Snake', originalCount: 15, count: 15, biome: 'plains' },

  // 🌴 Jungle
  { name: 'Panda', originalCount: 20, count: 20, biome: 'jungle' },
  { name: 'Gorilla', originalCount: 10, count: 10, biome: 'jungle' },
  { name: 'Elf Archer', originalCount: 8, count: 8, biome: 'jungle' },
  { name: 'Elf Mage', originalCount: 6, count: 6, biome: 'jungle' },
  { name: 'Orc Shaman', originalCount: 10, count: 10, biome: 'jungle' },
  { name: 'Beast People Hunter', originalCount: 20, count: 20, biome: 'jungle' },
  { name: 'Beast People Warrior', originalCount: 10, count: 10, biome: 'jungle' },

  // ⛰️ Mountains
  { name: 'Orc Fighter', originalCount: 20, count: 20, biome: 'mountains' },
  { name: 'Elephant', originalCount: 3, count: 3, biome: 'mountains' },
  { name: 'Goat', originalCount: 20, count: 20, biome: 'mountains' },
  { name: 'Tiger', originalCount: 5, count: 5, biome: 'mountains' },

  // 🌿 Swamp
  { name: 'Beetle', originalCount: 30, count: 30, biome: 'swamp' },
  { name: 'Goblin Mage', originalCount: 10, count: 10, biome: 'swamp' },
  { name: 'Frog', originalCount: 25, count: 25, biome: 'swamp' },
  { name: 'Lizard', originalCount: 20, count: 20, biome: 'swamp' },
  { name: 'Crocodile', originalCount: 6, count: 6, biome: 'swamp' },
  { name: 'Boar', originalCount: 10, count: 10, biome: 'swamp' },
  { name: 'Owl', originalCount: 12, count: 12, biome: 'swamp' },
  { name: 'Hawk', originalCount: 15, count: 15, biome: 'swamp' },
  { name: 'Snake', originalCount: 12, count: 12, biome: 'swamp' }
];

  enemyEmojis: { [key: string]: string } = {
    "Caterpillar": "🐛",
    "Mouse": "🐁",
    "Bunny": "🐇",
    "Deer": "🦌",
    "Sloth": "🦥",
    "Goat": "🐐",
    "Panda": "🐼",
    "Bison": "🐃",
    "Gorilla": "🦍",
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
  biomes = ['forest', 'plains', 'mountains', 'jungle', 'swamp'];
  selectedBiome = this.biomes[0];
  currentEnemy: Entity | null = null;
  selectedGuardian?: Entity;
  guardian: Entity | null = null;
  messages: string[] = [];
  skillPoints: number = 0;
  isFullscreen: boolean = false;
  showGuardianSlainPopup: boolean = false;
  autoAttackInterval: any = null;
  bgMusic: HTMLAudioElement | null = null;
  attackSounds = [
    'assets/sounds/attack1.mp3',
    'assets/sounds/attack2.mp3',
    'assets/sounds/attack3.mp3'
  ];
  attacke1: boolean = false;
  attacke2: boolean = false;
  attacke3: boolean = false;
  attacke4: boolean = false;

  finalBossDefeated = false;
  finalBossAvailable = false;
  finalBoss: Entity = {
    name: 'World Devourer',
    hp: 100000,
    str: 100,
    def: 100,
    spd: 100,
    isBoss: true,
    imageUrl: 'assets/Bimages/FinalBoss.png'
  };
  showEvolutionPopup: boolean = false;
  evolutionImageSrc: string = '';
  evolutionTitle: string = '';

  // New variables for the pre-fight screen
  isPreBossFightScreen: boolean = false;
  preFightEnemy: Entity | null = null;

  selectGuardian(guardian: Entity, index: number) {
    this.selectedGuardian = guardian;
    this.assignRandomGuardian(index);
  }

  getGuardianTitle(guardian: Entity): string {
  if (!guardian.titles) return guardian.name;
  const level = guardian.evolutionLevel ?? 0;   // use stored evolutionLevel
  return guardian.titles[level]?.title || guardian.name;
}

scaleEnemiesWithPlayer(playerHp: number) {
  if (playerHp <= 500) return;

  // Scale regular enemies
  this.enemies.forEach(enemy => {
    const animal = this.animals.find(a => a.name === enemy.name);
    if (animal && animal.count > 0) {
      const randomBonus = Math.floor(Math.random() * 90) + 1; // 1-100
      const randomBonus2 = Math.floor(Math.random() * 50) + 1; // 1-100
      const randomBonus3 = Math.floor(Math.random() * 20) + 1; // 1-100

      enemy.hp = playerHp + randomBonus;
      enemy.def = 30 + randomBonus2 ;
      enemy.spd = 30 + randomBonus3
      enemy.str = enemy.str + randomBonus
    }
  });

  // Scale bosses dynamically too
  this.bosses.forEach(boss => {
    const randomBonus = Math.floor(Math.random() * 500) + 200; // 1-100
    boss.hp = playerHp + randomBonus;
  });
}
popupEvolutionLevel?: number; 
 // Returns the guardian's permanent evolution level
getEvolutionLevel(guardian: Entity): number {
  return guardian.evolutionLevel ?? 0; // DO NOT use HP here
}

// Returns the correct image for the guardian
getGuardianImage(guardian: Entity): string {
  if (!guardian || !guardian.titles) return guardian.image;
  const level = guardian.evolutionLevel ?? 0; // use evolutionLevel, not HP
  return `assets/Gimages/${guardian.name}/${level + 1}.png`;
}

// Check and evolve only forward
checkEvolution() {
  if (!this.guardian || !this.guardian.titles) return;

  const titles = this.guardian.titles;
  let currentLevel = this.guardian.evolutionLevel ?? 0;
  this.scaleEnemiesWithPlayer(this.guardian.hp);
  // Find the highest stage that qualifies
  for (let i = titles.length - 1; i >= 0; i--) {
    if (this.guardian.hp >= titles[i].hp) {
      if (i > currentLevel) { // only evolve forward
        this.guardian.evolutionLevel = i;
        const stage = titles[i];

        // Apply bonuses
        this.guardian.str += stage.bonus.str;
        this.guardian.def += stage.bonus.def;
        this.guardian.spd += stage.bonus.spd;

        // Set popup
        this.evolutionTitle = stage.title;
        this.evolutionImageSrc = `assets/Gimages/${this.guardian.name}/${i+1}.png`;
        this.showEvolutionPopup = true;

        this.addMessage(`${this.guardian.name} evolved into ${stage.title}!`);
      }
      break;
    }
  }
}




 





  assignRandomGuardian(index: number) {
  this.playclick();
  this.playselected();
  if (!this.bgMusic) this.playBackgroundMusic();

  this.skillPoints = 0;
  // Copy guardian and set evolution level to 0
  this.guardian = { ...this.guardians[index], evolutionLevel: 0 };
  this.guardianMaxHp = this.guardian.hp;
  this.playerGuardianAssigned = true;

  this.addMessage(`You have been assigned the guardian: ${this.guardian.name}!`);
  this.startGuardianRegen();
  this.checkEvolution(); // Check if already qualifies for evolution
  this.saveGame();
}

  getNextEvolution(guardian: Entity) {
    if (!guardian.titles) return null;
    return guardian.titles.find(t => guardian.hp < t.hp) || null;
  }

  spendSkillPoint(stat: "str" | "def" | "spd") {
    this.playclick();
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
regenProgress: number = 0;
  startGuardianRegen() {
  if (!this.guardian || this.guardian.hp >= this.guardianMaxHp) return;

  this.stopGuardianRegen();

  let secondsRemaining = 10;
  this.regenProgress = 0;
  this.guardianRegenMessage = `⏱️ Healing in progress... Next +10 HP in ${secondsRemaining}s`;

  this.guardianNextHealTimeout = setInterval(() => {
    secondsRemaining--;

    // Update progress bar (fill from 0 to 100%)
    this.regenProgress = ((10 - secondsRemaining) / 10) * 100;

    if (secondsRemaining > 0) {
      this.guardianRegenMessage = `⏱️ Healing in progress... Next +10 HP in ${secondsRemaining}s`;
    } else {
      if (this.guardian) {
        this.guardian.hp = Math.min(this.guardian.hp + 10, this.guardianMaxHp);
      }

      this.guardianRegenMessage = '';
      this.regenProgress = 0;

      clearInterval(this.guardianNextHealTimeout);

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

  ngOnInit() {
    this.loadGame();
    this.playBackgroundMusic();
  }

  playBackgroundMusic() {
    this.bgMusic = new Audio('assets/sounds/bg-music.mp3');
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.1;
    this.bgMusic.play().catch(err => {
      console.warn("Autoplay blocked by browser, will play on first interaction", err);
    });
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

  playRandomAttackSound() {
    const randomIndex = Math.floor(Math.random() * this.attackSounds.length);
    const audio = new Audio(this.attackSounds[randomIndex]);
    audio.play();
  }

  playclick() {
    const audio = new Audio("assets/sounds/btn.mp3");
    audio.play();
  }

  playgameover() {
    const audio = new Audio("assets/sounds/gameover.mp3");
    audio.play();
  }

  playselected() {
    const audio = new Audio("assets/sounds/selected.mp3");
    audio.play();
  }

  playwalk() {
    const audio = new Audio("assets/sounds/walk.mp3");
    audio.play();
  }

  showeffect() {
    const randomIndex = Math.floor(Math.random() * 4) + 1;
    this.attacke1 = this.attacke2 = this.attacke3 = this.attacke4 = false;
    if (randomIndex === 1) this.attacke1 = true;
    if (randomIndex === 2) this.attacke2 = true;
    if (randomIndex === 3) this.attacke3 = true;
    if (randomIndex === 4) this.attacke4 = true;
    setTimeout(() => {
      this.attacke1 = this.attacke2 = this.attacke3 = this.attacke4 = false;
    }, 500);
  }

  attackEnemy() {
    if (!this.bgMusic) {
      this.playBackgroundMusic();
    }
    if (!this.currentEnemy || !this.guardian) return;
    this.showeffect();
    this.playRandomAttackSound();
    this.stopGuardianRegen();
    if (!this.rollDodge(this.guardian, this.currentEnemy)) {
      const dmg = this.calculateDamage(this.guardian, this.currentEnemy);
      this.currentEnemy.hp -= dmg;
      this.addMessage(`You hit ${this.currentEnemy.name} for ${dmg} damage!`);
    } else {
      this.addMessage(`${this.currentEnemy.name} dodged your attack!`);
    }

    if (this.currentEnemy.hp <= 0) {
      if (this.currentEnemy.name === this.finalBoss.name) {
        this.finalBossDefeated = true; // Set the flag to trigger the win screen
        this.addMessage("🎉 You have defeated the World Devourer! The world is safe!");
      } else if (this.currentEnemy.isBoss) {
        this.bossesDefeated++;
        this.addMessage(`🏆 You defeated boss ${this.currentEnemy.name}!`);
      } else {
        const animal = this.animals.find(a => a.name === this.currentEnemy!.name);
        if (animal && animal.count !== undefined) animal.count = Math.max(0, animal.count - 1);
        this.skillPoints++;
        this.addMessage(`⭐ You earned 1 Skill Point! (Total: ${this.skillPoints})`);
        this.absorbStats(this.currentEnemy);
      }
      this.currentEnemy = null;
      this.maybeStartRegen();
      this.saveGame();
      return;
    }

    if (!this.rollDodge(this.currentEnemy, this.guardian)) {
      const dmg = this.calculateDamage(this.currentEnemy, this.guardian);
      this.guardian.hp -= dmg;
      this.addMessage(`${this.currentEnemy.name} hit you for ${dmg} damage!`);
    } else {
      this.addMessage(`You dodged ${this.currentEnemy.name}'s attack!`);
    }
    if (this.guardian.hp <= 0) {
      this.guardian.hp = 0;
      this.addMessage(`💀 Your Guardian was defeated by ${this.currentEnemy?.name || 'the enemy'}!`);
      this.showGuardianSlainPopup = true;
      this.playgameover();
      this.currentEnemy = null;
      this.playerGuardianAssigned = false;
      this.stopGuardianRegen();
    }
    this.saveGame();
  }

  selectNewGuardian() {
    this.showGuardianSlainPopup = false;
    this.resetGame();
  }

  rollDodge(attacker: any, defender: any): boolean {
    const dodgeChance = defender.spd / (attacker.spd + defender.spd);
    return Math.random() < dodgeChance;
  }

  absorbStats(enemy: Entity) {
    if (!this.guardian) return;
    const originalHp = (enemy.hpBeforeFight ?? enemy.hp) / 4;
    this.guardian.hp += originalHp;
    this.addMessage(`✨ You absorbed ${enemy.name}!`);
    this.addMessage(`❤️ HP +${originalHp.toFixed(2)}`);
    this.addMessage(`⚡ You gained +1 Skill Point! (Total: ${this.skillPoints})`);
    this.checkEvolution();
    this.saveGame();
  }

  maybeStartRegen() {
    if (this.guardian && this.guardian.hp > 0 && this.guardian.hp < this.guardianMaxHp) {
      this.startGuardianRegen();
    }
  }

  escape() {
    this.playwalk();
    if (!this.currentEnemy || !this.guardian) return;
    this.stopGuardianRegen();
    const escapeSuccess = Math.random() < (this.guardian.spd / (this.guardian.spd + this.currentEnemy.spd));
    if (escapeSuccess) {
      this.addMessage('🏃 You escaped safely!');
      this.currentEnemy = null;
      this.maybeStartRegen();
    } else {
      const dmg = this.calculateDamage(this.currentEnemy, this.guardian);
      this.guardian.hp -= dmg;
      this.addMessage(`❌ Escape failed! ${this.currentEnemy.name} hit you for ${dmg} damage!`);
      if (this.guardian.hp <= 0) {
        this.guardian.hp = 0;
        this.addMessage(`💀 Your Guardian has been defeated by ${this.currentEnemy.name}!`);
        this.playgameover();
        this.showGuardianSlainPopup = true;
        this.currentEnemy = null;
        this.playerGuardianAssigned = false;
        this.stopGuardianRegen();
      }
    }
    this.saveGame();
  }

  toggleFullscreen() {
    this.playclick();
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

  resetGame() {
    localStorage.removeItem('gameState');
    this.guardian = null;
    this.playerGuardianAssigned = false;
    this.currentEnemy = null;
    this.messages = [];
    this.selectedBiome = this.biomes[0];
    this.tribes.forEach(t => t.population = t.population || 100);
    this.animals.forEach(a => a.count = a.count || 50);
    this.bossesDefeated = 0;
    this.finalBossDefeated = false;
    this.finalBossAvailable = false;
    this.gameWon = false;
  }

  autoAttackEnemy() {
    if (!this.guardian || !this.currentEnemy) return;
    if (this.autoAttackInterval) {
      clearInterval(this.autoAttackInterval);
    }
    this.autoAttackInterval = setInterval(() => {
      if (!this.guardian || !this.currentEnemy) {
        clearInterval(this.autoAttackInterval);
        this.autoAttackInterval = null;
        return;
      }
      this.attackEnemy();
      if (this.guardian.hp <= 0 || this.currentEnemy.hp <= 0) {
        clearInterval(this.autoAttackInterval);
        this.autoAttackInterval = null;
      }
    }, 500);
  }

  searchEnemy() {
    this.playclick();
    if (!this.guardian) return;
    this.stopGuardianRegen();

    if (this.bossesDefeated >= this.totalBossesToWin) {
      this.finalBossAvailable = true;
      this.addMessage("⚠️ You are ready to face the World Devourer!");
      return;
    }

    const possibleEnemies = this.biomeEnemies[this.selectedBiome] || [];
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
    (enemy as any).hpBeforeFight = enemy.hp;
    this.currentEnemy = enemy;
    this.addMessage(`You encountered a ${this.currentEnemy.name}!`);
  }
  
  // New function to display the pre-fight screen
 searchBoss() {
  this.playclick();
  this.stopGuardianRegen();
  const bossTemplate = this.bosses[Math.floor(Math.random() * this.bosses.length)];
  const randomHP = Math.floor(Math.random() * 1000) + 500;  
  const boss: Entity = {
    name: bossTemplate.name,
    hp: randomHP,
    str: Math.floor(25 + Math.random() * 90),
    def: Math.floor(15 + Math.random() * 80),
    spd: Math.floor(15 + Math.random() * 75),
    isBoss: true,
    imageUrl: bossTemplate.imageUrl, // Kept for the battle screen
    image: bossTemplate.image        // New property for the pre-fight screen
  };
  this.preFightEnemy = boss;
  this.isPreBossFightScreen = true;
}
  
  // New function to start the actual fight
  startBossFight() {
    this.playclick();
    if (this.preFightEnemy) {
      this.currentEnemy = this.preFightEnemy;
      this.addMessage(`⚠️ Boss Appeared: ${this.currentEnemy.name}!`);
      this.preFightEnemy = null;
      this.isPreBossFightScreen = false; // Hide the pre-fight screen and start the battle
    }
  }

  searchFinalBoss() {
    this.playclick();
    this.stopGuardianRegen();
    this.currentEnemy = { ...this.finalBoss };
    this.addMessage(`The ${this.finalBoss.name} appears! Prepare for the final battle!`);
  }

  calculateDamage(attacker: any, defender: any): number {
    let dmg = attacker.str - defender.def * 0.5;
    return Math.max(1, Math.floor(dmg));
  }

  calculateDodgeChance(attacker: any, defender: any): number {
    const dodgeChance = defender.spd / (attacker.spd + defender.spd);
    return Math.floor(dodgeChance * 100);
  }

  saveGame() {
    const state = {
      guardian: this.guardian,
      guardianMaxHp: this.guardianMaxHp,
      bossesDefeated: this.bossesDefeated,
      finalBossDefeated: this.finalBossDefeated,
      finalBossAvailable: this.finalBossAvailable,
      gameWon: this.gameWon,
      animals: this.animals,
      tribes: this.tribes,
      selectedBiome: this.selectedBiome,
      currentEnemy: this.currentEnemy,
      messages: this.messages,
      skillPoints: this.skillPoints,
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
      this.finalBossDefeated = state.finalBossDefeated ?? false;
      this.finalBossAvailable = state.finalBossAvailable ?? false;
      this.gameWon = !!state.gameWon;
      this.skillPoints = state.skillPoints ?? 0;
      this.animals = state.animals ?? this.animals;
      this.tribes = state.tribes ?? this.tribes;
      this.selectedBiome = state.selectedBiome ?? this.selectedBiome;
      this.currentEnemy = state.currentEnemy ?? null;
      this.messages = state.messages ?? [];
      this.playerGuardianAssigned = !!this.guardian;
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
            this.checkEvolution();
          }
        }
      }
      if (this.guardian && !this.currentEnemy && this.guardian.hp < this.guardianMaxHp) {
        this.maybeStartRegen();
      }
    } catch (e) {
      console.error("Failed to parse saved game", e);
      localStorage.removeItem("gameState");
    }
  }

  closeEvolutionPopup() {
    this.playclick();
    this.showEvolutionPopup = false;
  }
}