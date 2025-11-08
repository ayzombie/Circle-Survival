import { MagicBolt } from "./projectile.js";
import { FireBall } from "./projectile.js";
import { SnowBall } from "./projectile.js";
import { OrbitSword } from "./projectile.js";

export class Weapon {
  constructor(player) {
    this.player = player;
    this.projectiles = [];
    this.cooldown = 1000;
    this.lastShot = 0;
    this.damage = 1;
  }

  update(deltaTime, enemies) {
    // Update all projectiles and check for collision
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.update(deltaTime);
  
      this.checkCollision(p, enemies);
  
      if (!p.alive) {
        this.projectiles.splice(i, 1); // remove dead projectile
      }
    }
  }

  draw(ctx) {
    for (const p of this.projectiles) {
      p.draw(ctx);
    }
  }

  checkCollision(projectile, enemies) {
    for (const enemy of enemies) {
      if (!enemy.alive) continue;

      const dx = projectile.x - enemy.x;
      const dy = projectile.y - enemy.y;
      const dist = Math.hypot(dx, dy);

      if (dist < projectile.radius + enemy.radius) {
        // 💥 Hit detected
        enemy.takeDmg(this.damage);
        if (projectile instanceof SnowBall) {
          enemy.applyFrost(projectile.slowness, projectile.slowTime);
        }
  
        // ❄️ AoE explosion damage
        if (projectile.area > 0) {
          for (const aoeEnemy of enemies) {
            if (!aoeEnemy.alive) continue;
            const d = Math.hypot(aoeEnemy.x - projectile.x, aoeEnemy.y - projectile.y);
            if (d <= projectile.area) {
              aoeEnemy.takeDmg(this.damage * 0.7); // 70% splash damage
              aoeEnemy.applyFrost(projectile.slowness, projectile.slowTime);
            }
          }
  
          // optional visual effect
          this.createExplosionEffect(enemy.x - 20, enemy.y - 50, projectile.area);
        }
  
        projectile.alive = false;
        return true;
      }
    }
    return false;
  }

  createExplosionEffect(x, y, radius) {
    const explosion = document.createElement("div");
    explosion.className = "explosion";
    explosion.style.left = `${x}px`;
    explosion.style.top = `${y}px`;
    explosion.style.width = `${radius * 2}px`;
    explosion.style.height = `${radius * 2}px`;
    explosion.style.borderRadius = "50%";
    explosion.style.background = "rgba(173, 216, 230, 0.4)";
    explosion.style.position = "absolute";
    explosion.style.pointerEvents = "none";
    explosion.style.transition = "opacity 0.5s, transform 0.5s";
    document.body.appendChild(explosion);
    setTimeout(() => {
      explosion.style.opacity = "0";
      explosion.style.transform = "scale(1.5)";
    }, 20);
    setTimeout(() => explosion.remove(), 500);
  }
}





export class OrbitBlade extends Weapon {
  constructor(player) {
    super(player);
    this.cooldown = 5000; //
    this.damage = 5;
    this.orbitRadius = 60;
    this.rotationSpeed = -0.002; // radians per ms normal: -0.002. has to be negeative
    this.active = false;
    this.activeTime = 2500;
    this.timer = 0;
    this.swords = 1;
    this.level = 1;
    this.spawnSwords();
  }

  update(deltaTime, enemies) {
    if (this.level == 2) {
      this.activeTime = 3500;
    }
    if (this.level == 3) {
      this.damage = 8;
      this.rotationSpeed = -0.004;
      this.orbitRadius = 80;
    }
    if (this.level == 4) {
      this.cooldown = 3500;
      this.activeTime = 4000
      this.swords = 2;
    }
    if (this.level == 5) {
      this.amount = 2;
      this.damage = 15;
    }
    if (this.level == 6) {
      this.swords = 3;
      this.cooldown = 2000;
      this.speed = 5.5;
      this.damage = 20;
    }
    if (this.level == 7) {
      this.swords = 4;
      this.rotationSpeed = -0.008;
      this.activeTime = 5000;
      this.orbitRadius = 100;
    }
    if (this.level == 8) {
      this.amount = 6;
      this.speed = 7;
      this.damage = 30;
      this.rotationSpeed = -0.01;
    }
    if (this.level == 9) {
      this.amount = 8;
      this.cooldown = 1500;
      this.speed = 8;
      this.damage = 50;
      this.orbitRadius = 120;
    }
    this.timer += deltaTime;
  
    if (this.active) {
      // swords are currently visible
      if (this.timer >= this.activeTime) {
        // ⏳ visible phase ended → vanish
        this.active = false;
        this.timer = 0;
        this.projectiles = []; // remove swords
      } else {
        // 🌀 update sword movement + collisions
        for (const sword of this.projectiles) {
          sword.orbitRadius = this.orbitRadius;
          sword.rotationSpeed = this.rotationSpeed;
          sword.update(deltaTime);
          this.checkCollision(sword, enemies);
        }
      }
    } else {
      // swords currently invisible
      if (this.timer >= this.cooldown) {
        // ✅ cooldown done → spawn swords again
        this.active = true;
        this.timer = 0;
        this.spawnSwords();
      }
    }
  }

  checkCollision(projectile, enemies) {
    for (const enemy of enemies) {
      if (!enemy.alive) continue;

      const dx = projectile.x - enemy.x;
      const dy = projectile.y - enemy.y;
      const dist = Math.hypot(dx, dy);

      if (dist < projectile.radius + enemy.radius) {
        enemy.takeDmg(this.damage);
        return true;
      }
    }
    return false;
  }
  
  spawnSwords() {
    this.projectiles = [];
    for (let i = 0; i < this.swords; i++) {
      const angle = i * (2 * Math.PI / this.swords);
      this.projectiles.push(
        new OrbitSword(this.player, angle, this.orbitRadius, this.rotationSpeed)
      );
    }
  }
  
}


// 🪄 MagicWand — ranged weapon
export class MagicWand extends Weapon {
  constructor(player) {
    super(player);
    this.cooldown = 1000;
    this.damage = 2;
    this.speed = 4;
    this.amount = 1;
    this.level = 1;
  }
  
  update(deltaTime, enemies) {
    if (this.level == 2) {
      this.damage = 5;
    }
    if (this.level == 3) {
      this.damage = 10;
      this.speed = 5;
    }
    if (this.level == 4) {
      this.cooldown = 700;
      this.amount = 2;
    }
    if (this.level == 5) {
      this.amount = 3;
      this.damage = 15;
    }
    if (this.level == 6) {
      this.amount = 4;
      this.cooldown = 600;
      this.speed = 5.5;
      this.damage = 20;
    }
    if (this.level == 7) {
      this.amount = 5;
      this.cooldown = 400;
      this.speed = 6;
      this.damage = 35;
    }
    if (this.level == 8) {
      this.amount = 6;
      this.speed = 7;
    }
    if (this.level == 9) {
      this.amount = 8;
      this.cooldown = 250;
      this.speed = 8;
      this.damage = 30;
    }

    super.update(deltaTime, enemies)

    // 2️⃣ Handle shooting
    if (Date.now() - this.lastShot > this.cooldown) {
      this.lastShot = Date.now();
      
      const x = (this.player.x + this.player.width / 2) - 15;
      const y = (this.player.y + this.player.height / 2) - 15;

      for (let i = 0; i < this.amount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dirX = Math.cos(angle);
        const dirY = Math.sin(angle);

        this.projectiles.push(new MagicBolt(x, y, dirX, dirY, this.speed)); 
      }
    }
  }
}


// FireWand - ranged weapon
export class FireWand extends Weapon {
  constructor(player) {
    super(player);
    this.cooldown = 3000;
    this.damage = 20;
    this.speed = 3;
    this.amount = 1;
    this.maxHits = 1; //how many enemies can it go through
    this.level = 1;
  }

  update(deltaTime, enemies) {
    if (this.level == 2) {
      this.damage = 30;
    }
    if (this.level == 3) {
      this.speed = 3.5;
      this.amount = 2
    }
    if (this.level == 4) {2
      this.cooldown = 2500;
      this.amount = 3;
    }
    if (this.level == 5) {
      this.damage = 40;
      this.maxHits = 2;
    }
    if (this.level == 6) {
      this.amount = 4;
      this.cooldown = 2000;
      this.speed = 4;
    }
    if (this.level == 7) {
      this.cooldown = 1500;
      this.damage = 50;
      this.maxHits = 3;
    }
    if (this.level == 8) {
      this.amount = 5;
      this.speed = 4.5;
      this.damage = 60;
    }
    if (this.level == 9) {
      this.cooldown = 1000;
      this.damage = 70;
      this.maxHits = 6;
    }

    // 2️⃣ Handle shooting
    if (Date.now() - this.lastShot > this.cooldown) {
      this.lastShot = Date.now();
      
      const x = (this.player.x + this.player.width / 2) - 15;
      const y = (this.player.y + this.player.height / 2) - 15;

      for (let i = 0; i < this.amount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dirX = Math.cos(angle);
        const dirY = Math.sin(angle);

        this.projectiles.push(new FireBall(x, y, dirX, dirY, this.speed, this.maxHits)); 
      }
    }

    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.update();
  
      this.checkCollision(p, enemies, this.maxHits);
  
      if (!p.alive) {
        this.projectiles.splice(i, 1); // remove dead projectile
      }
    }
  }

  checkCollision(projectile, enemies, maxHits) {
    for (const enemy of enemies) {
      if (!enemy.alive) continue;

      const dx = projectile.x - enemy.x;
      const dy = projectile.y - enemy.y;
      const dist = Math.hypot(dx, dy);

      if (dist < projectile.radius + enemy.radius) { //💥 hit
        projectile.curHits += 1;
        enemy.takeDmg(this.damage);
        if (projectile.curHits > maxHits) projectile.alive = false;

        return true;
      }
    }
    return false;
  }
}


// Shockwave (melee weapon)
export class ShockWave extends Weapon {
  constructor(player) {
    super(player);
    this.cooldown = 2500;     // attack every 0.8s
    this.damage = 7;
    this.range = 120;        // reach of shockwave
    this.swingTime = 200;    // how long the swing lasts
    this.swinging = false;
    this.swingDir = 1;       // 1 = right, -1 = left
    this.amount = 1;
    this.level = 1;
  }

  update(deltaTime, enemies) {
    // --- Level-based stat updates ---
    if (this.level === 2) {
      this.damage = 10;
    } else if (this.level === 3) {
      this.range = 150;
      this.cooldown = 2000;
    } else if (this.level === 4) {
      this.cooldown = 1700;
      this.damage = 15;
    } else if (this.level === 5) {
      this.cooldown = 1500;
    } else if (this.level === 6) {
      this.cooldown = 1200;
      this.swingTime = 400;
      this.damage = 20;
    } else if (this.level === 7) {
      this.amount = 2;        // Attack both sides
      this.cooldown = 1000;
      this.damage = 25;
    } else if (this.level === 8) {
      this.range = 170;
      this.damage = 35;
    } else if (this.level === 9) {
      this.swingTime = 600;
      this.cooldown = 700;
      this.damage = 50;
    }
  
    // --- Attack logic ---
    const now = Date.now();
    if (now - this.lastShot > this.cooldown && !this.swinging) {
      this.lastShot = now;
      this.swinging = true;
      this.swingStart = now;
  
      // determine which directions to attack
      const directions = this.amount >= 2 ? [-1, 1] : [this.swingDir];
  
      for (const dir of directions) {
        const px = this.player.x + this.player.width / 2;
        const py = this.player.y + this.player.height / 2;
      
        for (const enemy of enemies) {
          if (!enemy.alive) continue;
      
          const dx = enemy.x - px;
          const dy = enemy.y - py;
          const dist = Math.hypot(dx, dy);
          const angle = Math.atan2(dy, dx);
      
          // Define the active swing sector
          const arcAngleStart = dir === 1 ? -Math.PI / 4 : (5 * Math.PI) / 4;
          const arcAngleEnd   = dir === 1 ? Math.PI / 4 : (3 * Math.PI) / 4;
      
          // Normalize angle to [0, 2π)
          const normAngle = (angle + 2 * Math.PI) % (2 * Math.PI);
          const normStart = (arcAngleStart + 2 * Math.PI) % (2 * Math.PI);
          const normEnd   = (arcAngleEnd + 2 * Math.PI) % (2 * Math.PI);
      
          // Check if enemy is within the wave radius
          const insideWave = dist < this.range;
      
          // Check if enemy is touching the "shock line" (edge)
          const onWaveEdge = Math.abs(dist - this.range / 1.5) < enemy.radius * 1.5;
      
          // Check if angle is inside the arc
          const inArc =
            normStart < normEnd
              ? normAngle >= normStart && normAngle <= normEnd
              : normAngle >= normStart || normAngle <= normEnd;
      
          if ((insideWave || onWaveEdge) && inArc) {
            enemy.takeDmg(this.damage);
          }
        }
      }      
  
      // alternate main swing direction for next time (for visuals only)
      this.swingDir *= -1;
    }
  
    // --- End swing timer ---
    if (this.swinging && now - this.swingStart > this.swingTime) {
      this.swinging = false;
    }
  }

  draw(ctx) {
    if (!this.swinging) return;

    ctx.save();
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 5;
    ctx.beginPath();

    const px = this.player.x + this.player.width / 2;
    const py = this.player.y + this.player.height / 2;

    const startAngle = this.swingDir === 1 ? Math.PI / 4 : (3 * Math.PI) / 4;
    const endAngle = this.swingDir === 1 ? -Math.PI / 4 : (5 * Math.PI) / 4;
    const startAngle2 = this.swingDir * -1  === 1 ? Math.PI / 4 : (3 * Math.PI) / 4;
    const endAngle2 = this.swingDir * -1 === 1 ? -Math.PI / 4 : (5 * Math.PI) / 4;

    ctx.arc(px, py, this.range / 1.5, startAngle, endAngle, this.swingDir === -1);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(px, py, this.range / 1.5, startAngle2, endAngle2, this.swingDir === 1);
    ctx.stroke();
    ctx.restore();
  }
}



export class FrostStaff extends Weapon {
  constructor(player) {
    super(player);
    this.cooldown = 1500;   // ms between shots
    this.damage = 2;
    this.speed = 3;
    this.lifeTime = 100;    // how long the projectile lives
    this.slowness = 1;      // how strong the slow is
    this.slowTime = 1000;   // how long enemies stay slowed
    this.level = 1;
    this.area = 1;
  }

  update(deltaTime, enemies) {
    if (this.level == 2) {
      this.damage = 3;
      this.slowTime = 1500;
    }
    if (this.level == 3) {
      this.damage = 4;
      this.slowness = 2;
      this.lifeTime = 150;
    }
    if (this.level == 4) {
      this.cooldown = 1200;
      this.area = 20;
    }
    if (this.level == 5) {
      this.slowTime = 2000;
      this.damage = 5;
    }
    if (this.level == 6) {
      this.area = 50;
      this.speed = 4;
      this.damage = 7;
      this.slowness = 4;
    }
    if (this.level == 7) {
      this.lifeTime = 300;
      this.slowness = 5;
    }
    if (this.level == 8) {
      this.area = 75;
      this.damage = 15;
      this.slowTime = 3500;
      this.lifeTime = 500;
    }
    if (this.level == 9) {
      this.area = 100;
      this.speed = 5;
      this.cooldown = 1000;
      this.slowness = 7;
    }
    super.update(deltaTime, enemies);

    // shooting logic (handled via Weapon's lastShot timer)
    if (Date.now() - this.lastShot > this.cooldown && enemies.length > 0) {
      this.lastShot = Date.now();

      // find the nearest enemy to aim at
      let nearest = null;
      let nearestDist = Infinity;
      for (const e of enemies) {
        if (!e.alive) continue;
        const dx = e.x - this.player.x;
        const dy = e.y - this.player.y;
        const dist = Math.hypot(dx, dy);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = e;
        }
      }

      // spawn a snowball aimed at the nearest enemy
      if (nearest) {
        const angle = Math.atan2(nearest.y - this.player.y, nearest.x - this.player.x);
        this.projectiles.push(
          new SnowBall(
            this.player.x,
            this.player.y,
            angle,
            this.speed,
            this.damage,
            this.lifeTime,
            this.slowness,
            this.slowTime,
            this.area
          )
        );
      }
    }
  }
}


export class LavaEruption extends Weapon {
  constructor(player) {
    super(player);
    this.cooldown = 4000;       // time between eruptions
    this.damage = 10;
    this.radius = 50;
    this.lavaDuration = 1000;   // how long lava lasts
    this.warningTime = 2000;    // flashing before eruption
    this.lavaSpots = [];        // <-- here, now it's per weapon
    this.lastShot = 0;
    this.amount = 1;
    this.level = 1;
  }

  update(deltaTime, enemies, canvas) {
    if (this.level == 2) {
      this.cooldown = 3000;
    }
    if (this.level == 3) {
      this.damage = 15;
      this.radius = 75;
    }
    if (this.level == 4) {
      this.amount = 2;
      this.damage = 25;
    }
    if (this.level == 5) {
      this.damage = 45;
      this.radius = 90;
    }
    if (this.level == 6) {
      this.amount = 3;
      this.cooldown = 2000;
      this.lavaDuration = 2000;
      this.damage = 40;
    }
    if (this.level == 7) {
      this.cooldown = 1800;
      this.warningTime = 1500;
      this.damage = 55;
    }
    if (this.level == 8) {
      this.radius = 100;
      this.lavaDuration = 2500;
    }
    if (this.level == 9) {
      this.amount = 5;
      this.damage = 80;
      this.radius = 125;
    }

    const now = Date.now();
    // Spawn new lava if cooldown passed
    if (now - this.lastShot > this.cooldown) {
      for (let i = 0; i < this.amount; i++) {
        this.lastShot = now;
        const x = Math.random() * (canvas.width - 10);
        const y = Math.random() * (canvas.height - 10);

        this.lavaSpots.push({
          x,
          y,
          radius: this.radius,
          createdAt: now,
          state: "warning"
        });
      }
    }

    // Update each lava spot
    for (let i = this.lavaSpots.length - 1; i >= 0; i--) {
      const lava = this.lavaSpots[i];
      const age = now - lava.createdAt;

      if (lava.state === "warning" && age > this.warningTime) {
        lava.state = "lava";
        lava.createdAt = now; // reset timer for active lava
      } else if (lava.state === "lava" && age > this.lavaDuration) {
        this.lavaSpots.splice(i, 1);
        continue;
      }

      // Damage enemies standing in lava
      if (lava.state === "lava") {
        for (const enemy of enemies) {
          const dx = enemy.x - lava.x;
          const dy = enemy.y - lava.y;
          const dist = Math.hypot(dx, dy);
          if (dist < lava.radius + enemy.radius) {
            enemy.takeDmg(this.damage);
          }
        }
      }
    }

    // Let Weapon class handle projectiles (if any)
    super.update(deltaTime, enemies);
  }

  draw(ctx) {
    const now = Date.now();
    for (const lava of this.lavaSpots) {
      const age = now - lava.createdAt;
      if (lava.state === "warning") {
        const flashAlpha = Math.sin(age / 100) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(255,0,0,${flashAlpha})`;
      } else {
        ctx.fillStyle = "rgba(255,100,0,0.9)";
      }
      ctx.beginPath();
      ctx.arc(lava.x, lava.y, lava.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}