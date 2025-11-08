export class Emerald {
    constructor(x, y, type) {
      this.x = x;
      this.y = y;
      this.type = type;
      this.radius = 10; //default size
      this.magnetized = false;
      this.speed = 4;
    }

    update(player) {
        // If magnetized, move towards the player
        if (this.magnetized) {
            this.speed += 1;
            const dx = (player.x + player.width/2) - this.x;
            const dy = (player.y + player.height/2) - this.y;
            const distance = Math.hypot(dx, dy);
            if (distance > 1) {
                this.x += (dx / distance) * this.speed;
                this.y += (dy / distance) * this.speed;
            }
        } else {
            // Check if player is within magnet range
            const dx = (player.x + player.width/2) - this.x;
            const dy = (player.y + player.height/2) - this.y;
            const distance = Math.hypot(dx, dy);
        
            if (distance < player.magnetLevel * 30 + 70) { // 100 px is magnet radius
                this.magnetized = true;
            }
        }
    }
  
    draw(ctx, time) {
      ctx.save();
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
  
      // EMERALD DROP
      if (this.type === "emerald") {
        const size = this.radius * 1.5;
        const gradient = ctx.createRadialGradient(this.x, this.y, size * 0.1, this.x, this.y, size);
  
        // flickering aqua glow
        ctx.shadowColor = "#00E6FF";
  
        // glowing blue-green gradient
        gradient.addColorStop(0, "#66FFFF");
        gradient.addColorStop(0.5, "#00CCFF");
        gradient.addColorStop(1, "#008B8B");
  
        // hexagon-like gem shape
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - size * 0.8);
        ctx.lineTo(this.x + size * 0.6, this.y - size * 0.3);
        ctx.lineTo(this.x + size * 0.4, this.y + size * 0.6);
        ctx.lineTo(this.x - size * 0.4, this.y + size * 0.6);
        ctx.lineTo(this.x - size * 0.6, this.y - size * 0.3);
        ctx.closePath();
  
        ctx.fillStyle = gradient;
        ctx.fill();
  
        // highlight shimmer
        ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x - size * 0.3, this.y - size * 0.2);
        ctx.lineTo(this.x + size * 0.3, this.y - size * 0.4);
        ctx.stroke();
      }
      ctx.restore();
    }
  }  