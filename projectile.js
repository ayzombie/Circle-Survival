export class MagicBolt {
  constructor(x, y, dirX, dirY, speed) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.speed = speed;
    this.radius = 5;
    this.alive = true;
  }

  update() {
    this.x += this.dirX * this.speed;
    this.y += this.dirY * this.speed;

    // mark as dead if offscreen
    if (this.x < 0 || this.x > 1600 || this.y < 0 || this.y > 900) {
      this.alive = false;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
// MagicBolt Evolved!
export class MagicMissile {
  constructor(x, y, dirX, dirY, speed, bounces) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.speed = speed;
    this.radius = 10;
    this.alive = true;
    this.bounces = bounces;
  }
  
  update() {
    this.x += this.dirX * this.speed;
    this.y += this.dirY * this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = "#39C5FF";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}


export class FireBall {
  constructor(x, y, dirX, dirY, speed, maxHits) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.speed = speed;
    this.radius = 15;
    this.curHits = 0;
    this.alive = true;
  }

  update() {
    this.x += this.dirX * this.speed;
    this.y += this.dirY * this.speed;

    // mark as dead if offscreen
    if (this.x < 0 || this.x > 1600 || this.y < 0 || this.y > 900) {
      this.alive = false;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}



export class SnowBall {
  constructor(x, y, angle, speed, damage, life, slowness, slowTime, area) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.speed = speed;
    this.damage = damage;
    this.life = life; // frames or ticks
    this.slowness = slowness;
    this.slowTime = slowTime;
    this.radius = 10;
    this.alive = true;
    this.area = area;
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    this.life--;
    if (this.life <= 0) this.alive = false;
  }

  draw(ctx) {
    if (!this.alive) return;

    ctx.save();
    ctx.shadowColor = "aqua";
    ctx.shadowBlur = 15;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "cyan";
    ctx.fill();

    ctx.strokeStyle = "darkblue";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }
}



export class OrbitSword {
  constructor(player, angle, orbitRadius, rotationSpeed) {
    this.player = player;
    this.angle = angle;
    this.orbitRadius = orbitRadius;
    this.rotationSpeed = rotationSpeed;
    this.alive = true;
    this.radius = 20; // collision size
  }

  update(deltaTime) {
    this.angle += this.rotationSpeed * deltaTime;
    const px = this.player.x + this.player.width / 2 - 13;
    const py = this.player.y + this.player.height / 2 - 13;
    this.x = px + Math.cos(this.angle) * this.orbitRadius;
    this.y = py + Math.sin(this.angle) * this.orbitRadius;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
  
    // 🔩 Sword hilt (dark grip + gold guard)
    ctx.fillStyle = "#3b2f2f"; // handle
    ctx.fillRect(-2, 6, 4, 6);
    ctx.fillStyle = "#d4af37"; // gold guard
    ctx.fillRect(-5, 4, 10, 2);
  
    // ⚔️ Blade (silver gradient)
    const gradient = ctx.createLinearGradient(0, -14, 0, 4);
    gradient.addColorStop(0, "#f0f0f0");  // tip (bright)
    gradient.addColorStop(0.3, "#c0c0c0"); // middle tone
    gradient.addColorStop(1, "#999999");  // base (shadow)
  
    ctx.fillStyle = gradient;
    ctx.fillRect(-2, -14, 4, 18);
  
    // ✨ Optional shine highlight
    ctx.strokeStyle = "rgba(255,255,255,0.4)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -14);
    ctx.lineTo(0, 4);
    ctx.stroke();
  
    ctx.restore();
  }  
}



export class BloodDagger {
  constructor(x, y, dirX, dirY, speed, damage, lifeTime, size, lifeSteal, lifeStealChance) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.speed = speed;
    this.damage = damage;
    this.lifeTime = lifeTime;
    this.lifeSteal = lifeSteal;
    this.lifeStealChance = lifeStealChance;
    this.size = size;
    this.radius = this.size * 2;
    this.alive = true;
  }

  update() {
    this.x += this.dirX * this.speed;
    this.y += this.dirY * this.speed;

    this.lifeTime--;
    if (this.lifeTime <= 0) this.alive = false;
  }

  draw(ctx) {
    if (!this.alive) return;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(Math.atan2(this.dirY, this.dirX) + Math.PI / 2);

    const s = this.size; // short alias

    // glow
    ctx.shadowColor = "red";
    ctx.shadowBlur = 20 * s;

    // blade
    ctx.fillStyle = "crimson";
    ctx.beginPath();
    ctx.moveTo(0, -15 * s);   // tip
    ctx.lineTo(4 * s, 8 * s); // right edge
    ctx.lineTo(-4 * s, 8 * s); // left edge
    ctx.closePath();
    ctx.fill();

    // handle
    ctx.fillStyle = "darkred";
    ctx.fillRect(-3 * s, 8 * s, 6 * s, 6 * s);

    ctx.restore();
  }
}

export class HomingBloodDagger {
  constructor(player, x, y, speed, damage, bounces, size, lifeSteal, lifeStealChance) {
    this.player = player;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.damage = damage;
    this.lifeSteal = lifeSteal;
    this.lifeStealChance = lifeStealChance;
    this.size = size;
    this.radius = this.size * 2;
    this.bounces = bounces;
    this.curHits = 0;
    this.target = null;
    this.lastTarget = null;
    this.alive = true;
  }

  update(enemies) {
    if (!this.alive) return;
  
    // if we hit max bounces, die
    if (this.curHits >= this.bounces) {
      this.alive = false;
      return;
    }
  
    // find target if none or if dead
    if (!this.target || !this.target.alive) {
      if (this.target) this.lastTarget = this.target;
      this.target = this.getStrongestEnemy(enemies);
  
      if (!this.target) {
        this.alive = false;
        return;
      }
    }
  
    // homing logic
    const dx = this.target.x - this.x;
    const dy = this.target.y - this.y;
    const dist = Math.hypot(dx, dy);
  
    if (dist > 0) {
      const dirX = dx / dist;
      const dirY = dy / dist;
  
      this.x += dirX * this.speed;
      this.y += dirY * this.speed;
    }
  }
   
  getStrongestEnemy(enemies) {
    // get only living enemies
    let alive = enemies.filter(e => e.alive);
    if (alive.length === 0) return null;

    // avoid hitting the same enemy twice in a row
    let possible = alive.filter(e => e !== this.lastTarget);
    if (possible.length === 0) possible = alive; // fallback

    // find the strongest enemy among possible
    let strongest = null;
    let maxHP = -Infinity;
    for (const e of possible) {
      if (e.health > maxHP) {
        maxHP = e.health;
        strongest = e;
      }
    }
    return strongest;
  }  

  draw(ctx) {
    if (!this.alive || this.target == null) return;

    ctx.save();
    ctx.translate(this.x, this.y);

    const angle = Math.atan2(this.target.y - this.y, this.target.x - this.x);
    ctx.rotate(angle + Math.PI / 2);

    const s = this.size;

    ctx.shadowColor = "red";
    ctx.shadowBlur = 20 * s;

    ctx.fillStyle = "crimson";
    ctx.beginPath();
    ctx.moveTo(0, -15 * s);
    ctx.lineTo(4 * s, 8 * s);
    ctx.lineTo(-4 * s, 8 * s);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "darkred";
    ctx.fillRect(-3 * s, 8 * s, 6 * s, 6 * s);

    ctx.restore();
  }
}