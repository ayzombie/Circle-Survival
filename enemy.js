import { Emerald } from "./drops.js";
import { Ruby } from "./drops.js";

export class Enemy {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength) {
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.baseSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.speed = this.baseSpeed;
        this.health = health;
        this.alive = true;
        this.player = player;
        this.frosted = 0;   // level of frost effect (e.g., 1 = slight, 2 = heavy)
        this.frostTime = 0; // how long frost lasts (ms)
        this.strength = Math.random() * ((strength + 2) - (strength - 2)) + (strength - 2);
    }

    update(player, deltaTime) { // pass deltaTime if you have it
        if (!this.alive) return;

        // handle frost duration
        if (this.frostTime > 0) {
            this.frostTime -= deltaTime;
            // slow down depending on frosted level (cap at 90% slow)
            const slowFactor = Math.min(this.frosted * 0.3, 0.9);
            this.speed = this.baseSpeed * (1 - slowFactor);
        } else {
            this.frosted = 0;
            this.speed = this.baseSpeed;
        }

        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 0) {
            this.x += (dx / distance) * this.speed;
            this.y += (dy / distance) * this.speed;
        }

        if (this.health <= 0) {
            this.alive = false;
            return;
        }
    }

    draw(ctx) {
        if (!this.alive) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        // visually indicate frost
        if (this.frosted > 0) {
            ctx.fillStyle = "lightblue";
        } else {
            ctx.fillStyle = "red";
        }

        ctx.fill();
        ctx.closePath();
    }

    takeDmg(dmg) {
        const totalDmg = dmg * (this.player.spinach * 0.1 + 1) * (this.player.level * 0.02 + 1) * this.player.dmgMulti;
        this.health -= totalDmg;
        this.showDamageNumber(totalDmg);
        if (Math.round(this.health) <= 0) this.alive = false;
    }

    applyFrost(level, duration) {
        // if new frost is stronger or lasts longer, override
        if (level > this.frosted || duration > this.frostTime) {
            this.frosted = level;
            this.frostTime = duration;
        }
    }

    showDamageNumber(dmg) {
        const dmgText = document.createElement("div");
        dmgText.className = "damage-number";
        dmgText.textContent = Math.floor(dmg);

        dmgText.style.left = `${this.x}px`;
        dmgText.style.top = `${this.y}px`;
        document.body.appendChild(dmgText);

        setTimeout(() => {
            dmgText.style.opacity = "0";
            dmgText.style.transform = "translateY(-30px)";
        }, 50);

        setTimeout(() => dmgText.remove(), 1000);
    }

    showHealth(ctx) {
        if (!this.alive) return;
        ctx.fillStyle = "red";
        ctx.font = "15px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`Health: ${Math.round(this.health)}`, this.x, this.y - 25);
    }

    spawnDrops(drops) {
        for (let i = 0; i < 1; i++) drops.push(new Emerald(this.x, this.y));
    }
}

export class Boss1 {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength) {
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.baseSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.speed = this.baseSpeed;
        this.health = health;
        this.alive = true;
        this.player = player;
        this.frosted = 0;   // level of frost effect (e.g., 1 = slight, 2 = heavy)
        this.frostTime = 0; // how long frost lasts (ms)
        this.strength = Math.random() * ((strength + 2) - (strength - 2)) + (strength - 2);
    }

    update(player, deltaTime) { // pass deltaTime if you have it
        if (!this.alive) return;
        if (Math.random() < 0.3) this.strength = Math.random() * ((this.strength + 2) - (this.strength - 2)) + (this.strength - 2); //randomize strength

        // handle frost duration
        if (this.frostTime > 0) {
            this.frostTime -= deltaTime;
            // slow down depending on frosted level (cap at 90% slow)
            const slowFactor = Math.min(this.frosted * 0.3, 0.9);
            this.speed = this.baseSpeed * (1 - slowFactor);
        } else {
            this.frosted = 0;
            this.speed = this.baseSpeed;
        }

        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 0) {
            this.x += (dx / distance) * this.speed;
            this.y += (dy / distance) * this.speed;
        }

        if (this.health <= 0) {
            this.alive = false;
            return;
        }
    }

    draw(ctx) {
        if (!this.alive) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // fill color (frosted or normal)
        if (this.frosted > 0) {
            ctx.fillStyle = "lightblue";
        } else {
            ctx.fillStyle = "red";
        }
        ctx.fill();
        // white outline
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.stroke();
    
        ctx.closePath();
    }    

    takeDmg(dmg) {
        const totalDmg = dmg * (this.player.spinach * 0.1 + 1) * (this.player.level * 0.02 + 1) * this.player.dmgMulti;
        this.health -= totalDmg;
        this.showDamageNumber(totalDmg);
        if (Math.round(this.health) <= 0) this.alive = false;
    }

    applyFrost(level, duration) {
        // if new frost is stronger or lasts longer, override
        if (level > this.frosted || duration > this.frostTime) {
            this.frosted = level;
            this.frostTime = duration;
        }
    }

    showDamageNumber(dmg) {
        const dmgText = document.createElement("div");
        dmgText.className = "damage-number";
        dmgText.textContent = Math.floor(dmg);

        dmgText.style.left = `${this.x}px`;
        dmgText.style.top = `${this.y}px`;
        document.body.appendChild(dmgText);

        setTimeout(() => {
            dmgText.style.opacity = "0";
            dmgText.style.transform = "translateY(-30px)";
        }, 50);

        setTimeout(() => dmgText.remove(), 1000);
    }

    showHealth(ctx) {
        if (!this.alive) return;
        ctx.fillStyle = "red";
        ctx.font = "15px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`Health: ${Math.round(this.health)}`, this.x, this.y - 25);
    }

    spawnDrops(drops) {
        for (let i = 0; i < 1; i++) drops.push(new Ruby(this.x, this.y));
    }
}