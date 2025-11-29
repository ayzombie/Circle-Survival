export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.dir = 1;
    this.baseSpeed = 5;
    this.speed = this.baseSpeed;
    this.maxHealth = 500;
    this.health = this.maxHealth;
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
    this.frosted = 0;
    this.frostTime = 0;
    this.lifeSteal = 0;
    this.hasVampireCloak = false;
    this.magnetLevel = 0;
    this.armor = 0;
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

    if (this.frostTime > 0) {
        this.frostTime -= deltaTime;
        // slow down depending on frosted level (cap at 90% slow)
        const slowFactor = Math.min(this.frosted * 0.3, 0.9);
        this.speed = this.baseSpeed * (1 - slowFactor);
    } else {
        this.frosted = 0;
        this.speed = this.baseSpeed;
    }
  }

  draw(ctx) {
    ctx.save();               // save canvas state
    ctx.translate(this.x, this.y);
    ctx.scale(this.dir, 1);   // flip horizontally if dir = -1
    ctx.fillStyle = "black";

    if (this.frosted > 7) {
      ctx.fillStyle = "darkcyan";
    } 
    else if (this.frosted > 3) {
      ctx.fillStyle = "blue";
    } 
    else if (this.frosted > 0) {
      ctx.fillStyle = "darkblue";
    }
    ctx.beginPath();
    ctx.moveTo(-15, -15);
    ctx.lineTo(this.width - 15, -15);
    const bottomY = this.height + 15;

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
    ctx.fillStyle = "blue";
  
    // Draw player body AFTER cloak
    if (this.frosted > 4) {
      ctx.fillStyle = "cyan";
    }
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
      this.xp = this.xp - this.requirement;
      this.previousLevel += 1;
      let l = this.level;
      let multi = 1.5;
      if (l <= 10) {
        multi = 1.4;
      }
      else if (l <= 20) {
        multi = 1.1;
      }
      else if (l <= 30) {
        multi = 1.05;
      }
      else if (l <= 40) {
        multi = 1.01;
      }
      else {
        multi = 1.005;
      }
      this.requirement *= multi;
      this.requirement = this.requirement.toFixed(5);
    }
  }
  
  takeDamage(amount) {  //normal
    const now = Date.now()
    if (now - this.lastHitTime < 300) return;
    let hit = Math.ceil(amount);
    this.health -= Math.min(hit, this.maxHealth);
    this.lastHitTime = Date.now()

    if (this.health <= 0) {
      this.health = 0;
      this.alive = false;
    }
    this.heal(Math.floor(this.lifeSteal), this);
  }

  takeDmg(amount, proj) { //for projectiles
    if (proj.frosted && proj.frostTime) { //for slow stuff
      if (proj.frosted > 0) {
        this.applyFrost(proj.frosted, proj.frostTime);
      }
    }
    let hit = Math.ceil(amount);
    this.health -= Math.min(hit, this.maxHealth);
    if (this.health <= 0) {
      this.health = 0;
      this.alive = false;
    }
    this.heal(Math.floor(this.lifeSteal), this);
  }

  applyFrost(level, frostTime) {
    this.frosted = level;
    this.frostTime = frostTime;  
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