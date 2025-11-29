export class BloodSpike {
    constructor(x, y, angle, strength, player, frosted, frostTime) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.strength = strength;
        this.player = player;
        this.speed = 8;    // pixels per frame (tweak to taste)
        this.size = 18;    // visible size
        this.frosted = frosted;
        this.frostTime = frostTime;
        this.alive = true;
    }

    update(deltaTime, canvas) {
        if (!this.alive) return;
        // movement
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
    
        // --- PLAYER COLLISION (AABB) ---
        // Player rectangle bounds
        const left   = this.player.x - this.player.width  / 2;
        const right  = this.player.x + this.player.width  / 2;
        const top    = this.player.y - this.player.height / 2;
        const bottom = this.player.y + this.player.height / 2;
    
        // Projectile is treated as a point (add radius if needed)
        if (this.x > left && this.x < right && this.y > top && this.y < bottom) {
            this.player.takeDmg(this.strength, this);   // DAMAGE PLAYER
            this.alive = false;
            return;
        }
        // --- END COLLISION ---
    
        // off-screen cleanup
        if (
            this.x < -100 || this.x > canvas.width + 100 ||
            this.y < -100 || this.y > canvas.height + 100
        ) {
            this.alive = false;
        }
    }    

    draw(ctx) {
        if (!this.alive) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle + Math.PI / 2);
        if (this.frosted > 0) {
            ctx.fillStyle = "#0000FF";
        }
        else {
            ctx.fillStyle = "#FF3333";
        }
        ctx.strokeStyle = "#880000";
        ctx.lineWidth = 1;

        ctx.beginPath();
        // TIP at top (0, -size), base below
        ctx.moveTo(0, -this.size);                // tip
        ctx.lineTo(this.size * 0.45, this.size);  // bottom-right
        ctx.lineTo(-this.size * 0.45, this.size); // bottom-left
        ctx.closePath();

        ctx.fill();
        ctx.stroke();

        // small inner highlight to show rotation orientation
        ctx.fillStyle = "rgba(255,255,255,0.12)";
        ctx.beginPath();
        ctx.moveTo(0, -this.size * 0.6);
        ctx.lineTo(this.size * 0.18, this.size * 0.5);
        ctx.lineTo(-this.size * 0.18, this.size * 0.5);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }
}