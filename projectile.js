export class Projectile {
    constructor(x, y, dirX, dirY, speed = 8, radius = 6, color = "white") {
      this.x = x;
      this.y = y;
      this.dirX = dirX;
      this.dirY = dirY;
      this.speed = speed;
      this.radius = radius;
      this.color = color;
      this.alive = true;
    }
  
    update() {
      this.x += this.dirX * this.speed;
      this.y += this.dirY * this.speed;
  
      // remove off-screen
      if (
        this.x < -this.radius ||
        this.x > window.innerWidth + this.radius ||
        this.y < -this.radius ||
        this.y > window.innerHeight + this.radius
      ) {
        this.alive = false;
      }
    }
  
    draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
}







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
    const px = this.player.x + this.player.width / 2;
    const py = this.player.y + this.player.height / 2;
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