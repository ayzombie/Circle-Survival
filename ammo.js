export class Ammo {
    constructor(x, y, dir, speed = 10) {
      this.x = x;
      this.y = y;
      this.dir = dir; //{x: dx, y: dy}, normalized
      this.speed = speed;
      this.radius = 6;
      this.alive = true;
      this.damage = 1;
    }
  
    update(canvas) {
      if (!this.alive) return;
  
      // move ammo
      this.x += this.dir.x * this.speed;
      this.y += this.dir.y * this.speed;
  
      // disappear if out of canvas
      if (
        this.x < -this.radius || this.x > canvas.width + this.radius ||
        this.y < -this.radius || this.y > canvas.height + this.radius
      ) {
        this.alive = false;
        return;
      }
    }

    draw(ctx) {
      if (!this.alive) return;
  
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "deepskyblue";
      ctx.fill();
      ctx.closePath();
    }

    checkCollision(enemies) {
        if (!this.alive) return;
        for (const enemy of enemies) {
            // Basic circle collision between ammo and enemy
            const dx = this.x - enemy.x;
            const dy = this.y - enemy.y;
            const dist = Math.hypot(dx, dy);
            // Assumes enemy has a .radius property
            if (dist < this.radius + (enemy.radius || 20)) {
                enemy.takeDmg(this.damage);
                this.alive = false;
                break;
            }
        }
    }
  }

