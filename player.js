export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.dir = 1;
    this.speed = 5;
    this.health = 1000;
    this.alive = true;
    this.keys = { w: false, a: false, s: false, d: false };
    this.lastHitTime = Date.now();
    this.previousLevel = 0;
    this.level = 0;
    this.xp = 0;
    this.requirement = 1;
    this.xpMulti = 1;
    this.spinach = 0;
    this.dmgMulti = 1;
    this.lifeSteal = 0;
    this.hasVampireCloak = false;
    this.magnetLevel = 0;
    this.inventory = [];

    // key listeners
  window.addEventListener("keydown", e => {
      const k = e.key.toLowerCase();
      if (this.keys.hasOwnProperty(k)) this.keys[k] = true;
    });
  window.addEventListener("keyup", e => {
      const k = e.key.toLowerCase();
      if (this.keys.hasOwnProperty(k)) this.keys[k] = false;
    });
  }

  update(canvas, deltaTime, enemies) {
    if (this.alive == false) return;
    if (this.keys.w) this.y -= this.speed;
    if (this.keys.s) this.y += this.speed;
    if (this.keys.a) {
      this.dir = -1;
      this.x -= this.speed;
    }
    if (this.keys.d) {
      this.dir = 1;
      this.x += this.speed;
    }
  
    // clamp to keep player inside canvas
    this.x = Math.max(0, Math.min(this.x, canvas.width - this.width));
    this.y = Math.max(0, Math.min(this.y, canvas.height - this.height));
  }

  draw(ctx) {
    ctx.save();               // save canvas state
    ctx.translate(this.x, this.y);
    ctx.scale(this.dir, 1);   // flip horizontally if dir = -1
  
    // Draw cloak relative to player center
    ctx.fillStyle = "black";
    ctx.beginPath();
  
    // Top of cloak (anchored behind player)
    ctx.moveTo(-15, -15);
    ctx.lineTo(this.width - 15, -15);
  
    const bottomY = this.height + 15;
  
    // Right side curve
    ctx.quadraticCurveTo(
      this.width + 10,
      this.height,
      0,
      bottomY
    );
  
    // Left side curve
    ctx.quadraticCurveTo(
      -this.width - 10,
      this.height,
      -15,
      -15
    );
  
    ctx.closePath();
    ctx.fill();
  
    // Draw player body AFTER cloak
    ctx.fillStyle = "blue";
    ctx.fillRect(-15, -15, this.width, this.height);
  
    ctx.restore(); // restore canvas so only the player is flipped
  }   
  

  showStats(ctx, canvas) {
    // === Health Text ===
    ctx.fillStyle = "blue";
    ctx.font = "24px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(`Health: ${this.health}`, 20, 35);

    // === XP Bar ===
    const barWidth = canvas.width - 40;
    const barHeight = 15;
    const x = 20;
    const y = 10;

    const progress = this.xp / this.requirement;
    const clamped = Math.min(progress, 1); // avoid overflow

    // background
    ctx.fillStyle = "#333";
    ctx.fillRect(x, y, barWidth, barHeight);

    // fill
    const gradient = ctx.createLinearGradient(x, y, x + barWidth, y);
    gradient.addColorStop(0, "#00FFFF");
    gradient.addColorStop(1, "#0077FF");
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, barWidth * clamped, barHeight);

    // border
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, barWidth, barHeight);

    // Level Counter
    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText(`Level: ${this.level}`, canvas.width - 60, 60);
  }

  checkCollision(enemies, drops) {
    for (const enemy of enemies) {
      if (!enemy.alive) continue;
  
      // Find closest point on player's rectangle to enemy center
      const closestX = Math.max(this.x, Math.min(enemy.x, this.x + this.width));
      const closestY = Math.max(this.y, Math.min(enemy.y, this.y + this.height));
  
      // Distance from enemy center to closest point
      const dx = enemy.x - closestX;
      const dy = enemy.y - closestY;
  
      if (Math.hypot(dx, dy) < enemy.radius) {
        this.takeDamage(enemy.strength);
      }
    }
    this.checkPickup(drops)
  }

  checkPickup(drops) {
    for (let i = drops.length - 1; i >= 0; i--) {
      const drop = drops[i];
      const dx = this.x + this.width/2 - drop.x;
      const dy = this.y + this.height/2 - drop.y;
      const dist = Math.hypot(dx, dy);

      if (dist < drop.radius + Math.max(this.width, this.height)/2) { //collected!
        console.log(`Picked up a ${drop.type}!`);
        if (drop.type == "emerald") {
          this.xp += 1 * this.xpMulti;
        }
        if (drop.type == "ruby") {
          this.xp += 3 * this.xpMulti * this.level;
        }
        drops.splice(i, 1);
      }
    }
    if (this.xp >= this.requirement) {
      this.previousLevel += 1;
      this.xp = this.xp - this.requirement;
      if (this.level < 20) {
        this.requirement *= 1.5 - (this.level - 1) * 0.02;
      }
      else if (this.level <= 40) {
        this.requirement *= 1.5 - (this.level - 1) * 0.03;
      }
      else {
        this.requirement *= 1.5 - (this.level - 1) * 0.04;
      }
      if (this.requirement <= 1) {
        this.requirement *= 1.01;
      }
    }
  }
  
  takeDamage(amount) {
    const now = Date.now()
    if (now - this.lastHitTime < 300) return;
    this.health -= Math.ceil(amount);
    this.lastHitTime = Date.now()

    if (this.health <= 0) {
      this.health = 0;
      this.alive = false;
    }
    this.heal(Math.floor(this.lifeSteal), this);
  }

  heal(amount, enemy) {
    this.health += amount;
    this.showHealNumber(amount, enemy);
  }

  showHealNumber(amount, enemy) {
    if (amount <= 0) return;
    const healText = document.createElement("div");
    healText.className = "heal-number";
    healText.textContent = Math.floor(amount);

    healText.style.left = `${enemy.x}px`;
    healText.style.top = `${enemy.y}px`;
    document.body.appendChild(healText);

    setTimeout(() => {
        healText.style.opacity = "0";
        healText.style.transform = "translateY(-30px)";
    }, 50);

    setTimeout(() => healText.remove(), 1000);
  }
}