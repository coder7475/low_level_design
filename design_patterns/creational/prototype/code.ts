// Prototype Interface
interface EnemyPrototype {
  clone(): EnemyPrototype;
}

// Concrete Prototype: Enemy
class Enemy implements EnemyPrototype {
  private type: string = "";
  private health: number = 0;
  private speed: number = 0;
  private armored: boolean = false;
  private weapon: string = "";

  constructor(
    type: string,
    health: number,
    speed: number,
    armored: boolean,
    weapon: string
  ) {
    this.type = type;
    this.health = health;
    this.speed = speed;
    this.armored = armored;
    this.weapon = weapon;
  }

  // Shallow copy clone method
  clone(): EnemyPrototype {
    return new Enemy(
      this.type,
      this.health,
      this.speed,
      this.armored,
      this.weapon
    );
  }

  setHealth(health: number): void {
    this.health = health;
  }

  setSpeed(speed: number): void {
    this.speed = speed;
  }

  printStats(): void {
    console.log(
      `Type: ${this.type}, Health: ${this.health}, Speed: ${this.speed}, Armored: ${this.armored}, Weapon: ${this.weapon}`
    );
  }
}

// Prototype Registry (EnemyRegistry)
class EnemyRegistry {
  private readonly prototypes: Map<string, EnemyPrototype> = new Map();

  registerPrototype(key: string, prototype: EnemyPrototype): void {
    this.prototypes.set(key, prototype);
  }

  getPrototype(key: string): EnemyPrototype | null {
    return this.prototypes.get(key) || null;
  }
}

// Client Code
class Game {
  static main(): void {
    const registry = new EnemyRegistry();

    // Register prototype enemies
    registry.registerPrototype(
      "flying",
      new Enemy("FlyingEnemy", 100, 12, false, "Laser")
    );
    registry.registerPrototype(
      "armored",
      new Enemy("ArmoredEnemy", 300, 6, true, "Cannon")
    );

    // Clone from registry
    const e1 = registry.getPrototype("flying");
    const e2 = registry.getPrototype("flying");

    e2.setHealth(80); // maybe this one was spawned with less HP

    const e3 = registry.getPrototype("armored");

    // Print stats to verify
    e1.printStats();
    e2.printStats();
    e3.printStats();
  }
}

Game.main();
