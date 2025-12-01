import { Diamond } from "./drops.js";
import { Emerald } from "./drops.js";
import { Ruby } from "./drops.js";
import { BloodSpike } from "./enemyProj.js";

//Blood Path
export class Shard {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength, weatherMulti) {
        this.x = x;
        this.y = y;
        this.lastX = x;
        this.radius = 15;
        this.baseSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.speed = this.baseSpeed;
        this.health = health * weatherMulti;
        this.alive = true;
        this.player = player;
        this.lastHit = Date.now()
        this.frosted = 0;   // level of frost effect (e.g., 1 = slight, 2 = heavy)
        this.frostTime = 0; // how long frost lasts (ms)
        this.strength = Math.max(0.5, Math.random() * ((strength + 2) - (strength - 2)) + (strength - 2) * weatherMulti);
        this.dir = 1;
        this.weatherMulti = weatherMulti;
    }

    update(deltaTime) { // pass deltaTime if you have it
        if (!this.alive) return;
        if (this.health <= 0) this.alive = false;

        if (this.strength <= 0) console.log(this.strength)

        const dirX = this.x - this.lastX;

        if (dirX > 0) {
            this.dir = 1;
        } else if (dirX < 0) {
            this.dir = -1;
        }
        this.lastX = this.x;        

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

        const dx = this.player.x - this.x;
        const dy = this.player.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 0) {
            this.x += (dx / distance) * this.speed * this.weatherMulti;
            this.y += (dy / distance) * this.speed * this.weatherMulti;
        }

        if (this.health <= 0) {
            this.alive = false;
            return;
        }
    }

    draw(ctx) {
        if (!this.alive) return;
    
        const size = this.radius * 1.4;  // slightly larger than circle
        const angle = this.dir;          // direction enemy is facing
    
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(angle);
    
        // Determine color (frosted or normal)
        let c1, c2;
        if (this.frosted > 0) {
            c1 = "#CCEEFF"; // light icy
            c2 = "#66BBFF"; // deeper ice
        } else {
            c1 = "#FF7777"; // bright red
            c2 = "#AA0000"; // darker red
        }
    
        // Gradient for the shard
        const gradient = ctx.createLinearGradient(-size, -size, size, size);
        gradient.addColorStop(0, c1);
        gradient.addColorStop(1, c2);
    
        // Begin crystal shard shape (5-point jagged spike)
        ctx.beginPath();
        ctx.moveTo(0, -size);            // top spike
        ctx.lineTo(size * 0.6, -size*0.2);
        ctx.lineTo(size * 0.4,  size*0.8);
        ctx.lineTo(-size*0.4,   size*0.8);
        ctx.lineTo(-size*0.6,  -size*0.2);
        ctx.closePath();
    
        ctx.fillStyle = gradient;
        ctx.fill();
    
        // Add minimal highlight (cheap)
        ctx.strokeStyle = "rgba(255,255,255,0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-size * 0.3, -size * 0.2);
        ctx.lineTo(size * 0.3, -size * 0.4);
        ctx.stroke();
    
        ctx.restore();
    }    

    takeDmg(dmg) {
        if (Date.now() - this.lastHit < 50) return;
        this.lastHit = Date.now();
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
        for (let i = 0; i < 1; i++) drops.push(new Diamond(this.x, this.y));
    }
}

export class BloodEye {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength, weatherMulti) {
        this.x = x;
        this.y = y;
        this.lastX = x;
        this.radius = 15;
        this.baseSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.speed = this.baseSpeed;
        this.health = health * Math.floor(Math.random() * 2) + 1;
        this.alive = true;
        this.lastHit = Date.now()
        this.player = player;
        this.frosted = 0;
        this.frostTime = 0;
        this.strength = Math.round((Math.random() * ((strength + 2) - (strength - 2)) + (strength - 2)) * 1.5 * weatherMulti);
        this.dir = 1;
        this.weatherMulti = weatherMulti;
    }

    update(deltaTime) { // pass deltaTime if you have it
        if (!this.alive) return;
        if (this.health <= 0) this.alive = false;

        const dirX = this.x - this.lastX;
        if (dirX > 0) {
            this.dir = 1;
        } else if (dirX < 0) {
            this.dir = -1;
        }
        this.lastX = this.x;        

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

        const dx = this.player.x - this.x;
        const dy = this.player.y - this.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 0) {
            this.x += (dx / distance) * this.speed * this.weatherMulti;
            this.y += (dy / distance) * this.speed * this.weatherMulti;
        }

        if (this.health <= 0) {
            this.alive = false;
            return;
        }
    }

    draw(ctx) {
        if (!this.alive) return;
    
        const size = this.radius * 1.5;
    
        ctx.save();
        ctx.translate(this.x, this.y);
    
        // --- Binary flip only affects slime shape ---
        ctx.scale(this.dir === 1 ? 1 : -1, 1);
    
        // Frosted vs normal colors
        let outer1, outer2, coreColor;
        if (this.frosted > 0) {
            outer1 = "#DDF4FF";
            outer2 = "#88CCEE";
            coreColor = "#113355";
        } else {
            outer1 = "#FF5555";
            outer2 = "#AA0000";
            coreColor = "#330000";
        }
    
        // --- OUTER BLOOD SLIME BODY ---
        const gradient = ctx.createRadialGradient(0, 0, size * 0.2, 0, 0, size);
        gradient.addColorStop(0, outer1);
        gradient.addColorStop(1, outer2);
    
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
    
        ctx.restore(); // remove flip for eye calculations
    
        // --- EYE TRACKING (independent of flip) ---
        const dx = this.player.x - this.x;
        const dy = this.player.y - this.y;
        const maxEyeOffset = size * 0.55;
        const dist = Math.hypot(dx, dy);
    
        let ex = 0, ey = 0;
        if (dist > 0.001) {
            const scale = Math.min(maxEyeOffset / dist, 1);
            ex = dx * scale;
            ey = dy * scale;
        }
    
        ctx.save();
        ctx.translate(this.x, this.y);
    
        // --- INNER EYE ---
        ctx.beginPath();
        ctx.arc(ex, ey, size * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = coreColor;
        ctx.fill();
    
        // --- PUPIL ---
        ctx.beginPath();
        ctx.arc(ex, ey, size * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
    
        // --- HIGHLIGHT ---
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.arc(ex - size * 0.15, ey - size * 0.15, size * 0.15, 0, Math.PI * 2);
        ctx.fill();
    
        ctx.restore();
    }
    
    takeDmg(dmg) {
        if (Date.now() - this.lastHit < 50) return;
        this.lastHit = Date.now();
        const totalDmg = dmg * (this.player.spinach * 0.1 + 1) * (this.player.level * 0.02 + 1) * this.player.dmgMulti;
        this.health -= totalDmg;
        this.showDamageNumber(totalDmg);
        if (Math.round(this.health) <= 0) this.alive = false;
    }

    applyFrost(level, duration) {
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
        for (let i = 0; i < 1; i++) drops.push(new Diamond(this.x, this.y));
    }
}

export class BloodTurret {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength, weatherMulti) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.baseSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.speed = this.baseSpeed;
        this.health = weatherMulti * health * Math.floor(Math.random() * 3) + 2
        this.player = player;
        this.strength = strength * weatherMulti;
        this.fireCooldown = 0;
        this.baseFireRate = 1000 - player.level * 5;
        this.fireRate = this.baseFireRate;
        this.stopDistance = 300;
        this.lastHit = Date.now()
        this.frosted = 0;
        this.frostTime = 0;
        this.alive = true;
        this.angle = 0; // rotation angle
        this.screenPadding = 50;
        this.projectiles = [];
        this.weatherMulti = weatherMulti;
    }

    update(deltaTime, canvas) {
        if (!this.alive) return;
        if (this.health <= 0) this.alive = false;

        if (!this.isVisible(canvas)) return;

        if (this.frostTime > 0) {
            this.frostTime -= deltaTime;
            // slow down depending on frosted level (cap at 90% slow)
            const slowFactor = Math.min(this.frosted * 0.3, 0.9);
            this.speed = this.baseSpeed * (1 - slowFactor);
            this.fireRate = this.baseFireRate * (1 - slowFactor / 5);
        } else {
            this.frosted = 0;
            this.speed = this.baseSpeed;
            this.fireRate = this.baseFireRate;
        }

        const dx = this.player.x - this.x;
        const dy = this.player.y - this.y;
        const dist = Math.hypot(dx, dy);
        this.angle = Math.atan2(dy, dx);
        // movement until 300px away
        if (dist > this.stopDistance) {
            this.x += Math.cos(this.angle) * this.speed * this.weatherMulti;
            this.y += Math.sin(this.angle) * this.speed * this.weatherMulti;
        }

        this.fireCooldown -= deltaTime;   // shooting
        if (this.fireCooldown <= 0) {
            this.fireCooldown = this.fireRate;
            this.shoot();
        }
        for (let i = this.projectiles.length - 1; i >= 0; i--) {    //update projectiles
            const p = this.projectiles[i];
            p.update(deltaTime, canvas);

            // remove if off-screen
            if (
                p.x < -100 || p.x > canvas.width + 100 ||
                p.y < -100 || p.y > canvas.height + 100
            ) {
                this.projectiles.splice(i, 1);
            }
        }
    }

    shoot() {
        this.projectiles.push(new BloodSpike(
            this.x,
            this.y,
            this.angle,   // same rotation angle as the turret head
            this.strength,
            this.player,
            this.frosted,
            this.frostTime
        ));
    }

    isVisible(canvas) {
        return (
            this.x > -this.screenPadding &&
            this.x < canvas.width + this.screenPadding &&
            this.y > -this.screenPadding &&
            this.y < canvas.height + this.screenPadding
        );
    }

    draw(ctx) {
        if (!this.alive) return;
    
        // draw all bullets
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this.projectiles[i].draw(ctx);
        }
    
        ctx.save();
        ctx.translate(this.x, this.y);
    
        const baseSize = this.radius * 2.2;
    
        //
        // BASE — not rotating (dark red circle)
        //
        let baseGrad = ctx.createRadialGradient(0, 0, baseSize * 0.2, 0, 0, baseSize);
        if (this.frosted) {
            baseGrad.addColorStop(0, "#0066FF"); // light blue
            baseGrad.addColorStop(1, "#66CCFF"); // blue
        }
        else {
            baseGrad.addColorStop(0, "#550000");
            baseGrad.addColorStop(1, "#220000");
        }
        ctx.fillStyle = baseGrad;
        ctx.beginPath();
        ctx.arc(0, 0, baseSize, 0, Math.PI * 2);
        ctx.fill();
    
    
        //
        // TURRET HEAD — rotates
        //
        ctx.rotate(this.angle);
    
        // rotating square base plate
        ctx.fillStyle = this.frosted ? "#2244CC" : "#771111"; // blue if frosted
        ctx.fillRect(-baseSize * 0.5, -baseSize * 0.5, baseSize, baseSize);
    
    
        //
        // === CROSS-SHAPED GUN HEAD ===
        //
        const gunColor = this.frosted ? "#3399FF" : "#CC4444"; // blue if frosted
        ctx.fillStyle = gunColor;
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
    
        // cross dimensions
        const barThickness = baseSize * 0.25;
        const barLength   = baseSize * 1.8; // extended barrel
    
        // ----- Vertical bar -----
        ctx.beginPath();
        ctx.rect(
            -barThickness / 2,
            -barLength / 2,
            barThickness,
            barLength
        );
        ctx.fill();
        ctx.stroke();
    
        // ----- Horizontal bar -----
        ctx.beginPath();
        ctx.rect(
            -barLength / 2,
            -barThickness / 2,
            barLength,
            barThickness
        );
        ctx.fill();
        ctx.stroke();
    
        //
        // MUZZLE TIP
        //
        ctx.beginPath();
        ctx.rect(
            barLength / 2,
            -barThickness * 0.4,
            baseSize * 0.8,
            barThickness * 0.8
        );
        ctx.fill();
        ctx.stroke();
    
        ctx.restore();
    }
    
    applyFrost(level, duration) {
        if (level > this.frosted || duration > this.frostTime) {
            this.frosted = level;
            this.frostTime = duration;
        }
    }

    showHealth(ctx) {
        if (!this.alive) return;
        ctx.fillStyle = "red";
        ctx.font = "15px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`Health: ${Math.round(this.health)}`, this.x, this.y - 25);
    }

    takeDmg(dmg) {
        if (Date.now() - this.lastHit < 50) return;
        this.lastHit = Date.now();
        const totalDmg = dmg * (this.player.spinach * 0.1 + 1) * (this.player.level * 0.02 + 1) * this.player.dmgMulti;
        this.health -= totalDmg;
        this.showDamageNumber(totalDmg);
        if (Math.round(this.health) <= 0) this.alive = false;
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

    spawnDrops(drops) {
        for (let i = 0; i < 1; i++) drops.push(new Diamond(this.x, this.y));
    }
}

export class Ram {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength, weatherMulti) {
        this.x = x;
        this.y = y;
        this.lastX = x;
        this.radius = 15;
        this.baseSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.speed = this.baseSpeed;
        this.chargeSpeed = weatherMulti * this.speed * Math.random() * (10 - 3) + 3;
        this.health = weatherMulti * health * Math.floor(Math.random() * 4) + 2;
        this.alive = true;
        this.player = player;
        this.frosted = 0;
        this.frostTime = 0;
        this.state = "normal";
        this.lastHit = Date.now();
        this.chargeTimer = 0;
        this.chargeCooldown = 0;
        this.chargeDx = 0;
        this.chargeDy = 0;
        this.baseStrength = Math.round(Math.max(0.2,Math.random() * ((strength + 2) - (strength - 2)) + (strength - 2)) * weatherMulti);
        this.strength = this.baseStrength;
        this.dir = 1;
        this.angle = 0;
        this.weatherMulti = this.weatherMulti;
    }

    update(deltaTime, canvas) {
        if (!this.alive) return;
        if (this.health <= 0) this.alive = false;
        // Cooldown between charges
        if (this.chargeCooldown > 0) {
            this.chargeCooldown--;
        }
    
        switch (this.state) {
            case "normal":
                this.strength = this.baseStrength;
                this.followPlayer();
    
                // RANDOM CHANCE to start a charge
                if (this.chargeCooldown === 0 && Math.random() < 0.003) { //0.003
                    this.state = "warn";
                    this.chargeTimer = 30; // 0.5 seconds
                }
                break;
            case "warn":
                this.chargeTimer--;
                if (this.chargeTimer <= 0) {
                    this.state = "windup";
                    this.chargeTimer = 15; // short backing up
                }
                break;
            case "windup": {
                // Move backwards from player
                const dx = this.player.x - this.x;
                const dy = this.player.y - this.y;
                const len = Math.hypot(dx, dy);
                this.x -= (dx / len) * this.speed * 0.7;
                this.y -= (dy / len) * this.speed * 0.7;
    
                this.chargeTimer--;
                if (this.chargeTimer <= 0) { //compute charge direction
                    const dx2 = this.player.x - this.x;
                    const dy2 = this.player.y - this.y;
                    const len2 = Math.hypot(dx2, dy2);
                    this.chargeDx = dx2 / len2;
                    this.chargeDy = dy2 / len2;
                    this.state = "charge";
                }
            }
            break;
            
            case "charge":
                const chargeSpeed = this.chargeSpeed;
                this.x += this.chargeDx * chargeSpeed * this.weatherMulti;
                this.y += this.chargeDy * chargeSpeed * this.weatherMulti;
                this.strength = Math.ceil(this.chargeSpeed / 2) * this.baseStrength;
                if (this.hitBorder(canvas)) { //stop if hits canvas border
                    this.endCharge();
                }
                break;
        }
    }

    draw(ctx) {
        if (!this.alive) return;
    
        ctx.save();
        ctx.translate(this.x, this.y);
        // Rotate so it aims at the player
        const dx = this.player.x - this.x;
        const dy = this.player.y - this.y;
        if (this.state !== "charge") {
            this.angle = Math.atan2(dy, dx);
        }
        const angle = this.angle;
        ctx.rotate(angle);
        const size = this.radius * 1.5;
    
        if (this.state === "warn") {
            ctx.save();
            const fontSize = Math.max(12, Math.round(size * 3));
            ctx.font = `${fontSize}px Arial`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            const warnOffset = size + 8;
            ctx.fillStyle = this.frosted > 0 ? "#AAEEFF" : "yellow";
            ctx.fillText("!", warnOffset, 0);
            ctx.restore();
        }

        let c1, c2;
        if (this.frosted > 0) {
            c1 = "#EECCFF";
            c2 = "#AA44FF";
        } else {
            c1 = "#FF3B3B";
            c2 = "#650000";
        }
    
        ctx.globalAlpha = 0.15;
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(-size * 0.7, 0, this.radius * 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        const grad = ctx.createLinearGradient(size, 0, -size, 0);
        grad.addColorStop(0, c1);
        grad.addColorStop(1, c2);
    
        const offset = size * 0.3;
        ctx.beginPath();
        ctx.moveTo(size - offset, 0);
        ctx.lineTo(-size * 0.5 - offset, size * 0.6);
        ctx.lineTo(-size - offset, 0);
        ctx.lineTo(-size * 0.5 - offset, -size * 0.6);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
    
        ctx.fillStyle = "rgba(255,0,0,0.5)";
        ctx.beginPath();
        ctx.arc(-size * 0.3, 0, this.radius * 0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    // Helper: returns world coords of the warn "!" (use in collision checks)
    getWarnPosition() {
        const size = this.radius * 1.5;
        const warnOffset = size + 8; // must match the draw() warnOffset
        const wx = this.x + Math.cos(this.angle) * warnOffset;
        const wy = this.y + Math.sin(this.angle) * warnOffset;
        return { x: wx, y: wy };
    }

    takeDmg(dmg) {
        if (Date.now() - this.lastHit < 50) return;
        this.lastHit = Date.now();
        const totalDmg = dmg * (this.player.spinach * 0.1 + 1) * (this.player.level * 0.02 + 1) * this.player.dmgMulti;
        this.health -= totalDmg;
        this.showDamageNumber(totalDmg);
        if (Math.round(this.health) <= 0) this.alive = false;
        if (this.state === "charge") {
            this.endCharge();
        }
    }

    endCharge() {
        this.state = "normal";
        this.chargeCooldown = 120; // ~2 secs before next possible charge
    }

    followPlayer() {
        const dx = this.player.x - this.x;
        const dy = this.player.y - this.y;
        const len = Math.hypot(dx, dy);
    
        if (len > 0) {
            this.x += (dx / len) * this.speed * this.weatherMulti;
            this.y += (dy / len) * this.speed * this.weatherMulti;
        }
    }

    hitBorder(canvas) {
        return (
            this.x - this.radius <= 0 ||
            this.x + this.radius >= canvas.width ||
            this.y - this.radius <= 0 ||
            this.y + this.radius >= canvas.height
        );
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
        for (let i = 0; i < 1; i++) drops.push(new Diamond(this.x, this.y));
    }
}

class MiniThrall {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength, weatherMulti, size) {
        this.x = x;
        this.y = y;
        this.lastX = x;
        this.radius = this.radius = Math.max(10, size - (Math.random() * 50));
        this.baseSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.speed = this.baseSpeed;
        this.health = Math.ceil(health * weatherMulti * Math.random() * this.radius * 0.1);
        this.alive = true;
        this.player = player;
        this.lastHit = Date.now();
        this.frosted = 0;
        this.frostTime = 0;
        this.strength = Math.ceil(Math.max(0.2,Math.random() * ((strength + 2) - (strength - 2)) + (strength - 2) * weatherMulti));
        this.dir = 1;
        this.weatherMulti = weatherMulti;
        // Animation values
        this.walkOffset = Math.random() * 6.28;
        this.squish = 1;
    }

    update(deltaTime) {
        if (!this.alive) return;
        if (this.health <= 0) this.alive = false;

        const dirX = this.x - this.lastX;
        if (dirX > 0) this.dir = 1;
        else if (dirX < 0) this.dir = -1;
        this.lastX = this.x;

        // Creepy squirm/walk animation controller
        const t = Date.now() * 0.003 + this.walkOffset;
        this.squish = 0.85 + Math.sin(t * 1.8) * 0.15;

        // Frost logic (same mechanic, still works)
        if (this.frostTime > 0) {
            this.frostTime -= deltaTime;
            const slowFactor = Math.min(this.frosted * 0.3, 0.9);
            this.speed = this.baseSpeed * (1 - slowFactor);
        } else {
            this.frosted = 0;
            this.speed = this.baseSpeed;
        }

        // Move toward player like a horde creature
        const dx = this.player.x - this.x;
        const dy = this.player.y - this.y;
        const distance = Math.hypot(dx, dy);
        if (distance > 0) {
            const swayY = Math.sin(t * 2.5) * 1.2;
            this.x += (dx / distance) * this.speed * this.weatherMulti;
            this.y += (dy / distance) * this.speed * this.weatherMulti + swayY * 0.02;
        }
    }

    draw(ctx) {
        if (!this.alive) return;

        ctx.save();
        ctx.translate(this.x, this.y);

        const r = this.radius * this.squish;
        const legPhase = Date.now() * 0.006 + this.walkOffset;

        // BLOODY BODY (blob aesthetic, not crystals)
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            const wave = Math.sin(legPhase * 2 + i) * 1.8;
            const px = Math.cos(a) * (r + wave);
            const py = Math.sin(a) * (this.radius + wave * 0.8);
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = this.frosted > 0 ? "#8BD6FF" : "#6A0000";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.frosted > 0 ? "#4A8FFF" : "#FF3333";
        ctx.stroke();

        // WALKING LEGS (moving like they're stepping)
        const legStretch = 4;
        for (let i = -1; i <= 1; i += 2) {
            const bob = Math.sin(legPhase + i * 1.4) * 3;
            ctx.beginPath();
            ctx.moveTo(i * r * 0.5, r * 0.9);
            ctx.quadraticCurveTo(i * r * 0.7, r * 1.4 + bob, i * r * 0.2, r * 1.8 + bob * 0.3);
            ctx.lineWidth = 3;
            ctx.strokeStyle = this.frosted > 0 ? "#2D7FFF" : "#500000";
            ctx.stroke();
        }

        // CREEPY PULSING EYE
        const eyePulse = 1 + Math.sin(Date.now() * 0.01) * 0.2;
        ctx.beginPath();
        ctx.arc(this.dir * r * 0.3, -r * 0.2, 3 * eyePulse, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.dir * r * 0.32, -r * 0.25, 1.4 * eyePulse, 0, Math.PI * 2);
        ctx.fillStyle = "#FF0000";
        ctx.fill();

        ctx.restore();
    }

    takeDmg(dmg) {
        if (Date.now() - this.lastHit < 50) return;
        this.lastHit = Date.now();
        const final = dmg * (this.player.spinach * 0.1 + 1) * (this.player.level * 0.02 + 1) * this.player.dmgMulti;
        this.health -= final;
        this.showDamageNumber(final);
        if (Math.round(this.health) <= 0) this.alive = false;
    }

    applyFrost(level, duration) {
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

        const bloodText = document.createElement("div");
        bloodText.className = "damage-number";
        bloodText.textContent = "🩸";
        bloodText.style.left = `${this.x}px`;
        bloodText.style.top = `${this.y + this.radius / 2}px`;
        document.body.appendChild(bloodText);

        setTimeout(() => {
            dmgText.style.opacity = "0";
            dmgText.style.transform = "translateY(-30px)";
            bloodText.style.opacity = "0.1";
            bloodText.style.transform = "translateY(100px)";
        }, 50);

        setTimeout(() => {
            dmgText.remove();
            bloodText.remove(); }, 1000);
    }

    spawnDrops(drops) {
        for (let i = 0; i < 1; i++) {
            drops.push(new Diamond(this.x, this.y))
        }
    }

    showHealth(ctx) {
        if (!this.alive) return;
        ctx.save();
        ctx.fillStyle = "#FF0000";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`Health: ${Math.round(this.health)}`, this.x, this.y - this.radius - 18);
        ctx.restore();
    }
}
     
export class BloodThrall {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength, weatherMulti, enemies) {
        this.x = x;
        this.y = y;
        this.lastX = x;
        this.radius = 20 + Math.random() * 50;
        this.baseSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.speed = this.baseSpeed;
        this.health = Math.ceil(health * weatherMulti * Math.random() * this.radius * 0.05);
        this.alive = true;
        this.player = player;
        this.lastHit = Date.now();
        this.frosted = 0;
        this.frostTime = 0;
        this.strength = Math.ceil(Math.max(0.2,Math.random() * ((strength + 2) - (strength - 2)) + (strength - 2)) * weatherMulti);
        this.dir = 1;
        this.weatherMulti = weatherMulti;
        this.enemies = enemies;
        // Animation values
        this.walkOffset = Math.random() * 6.28;
        this.squish = 1;
    }

    update(deltaTime) {
        if (!this.alive) return;
        if (this.health <= 0) this.alive = false;

        const dirX = this.x - this.lastX;
        if (dirX > 0) this.dir = 1;
        else if (dirX < 0) this.dir = -1;
        this.lastX = this.x;

        // Creepy squirm/walk animation controller
        const t = Date.now() * 0.003 + this.walkOffset;
        this.squish = 0.85 + Math.sin(t * 1.8) * 0.15;

        // Frost logic (same mechanic, still works)
        if (this.frostTime > 0) {
            this.frostTime -= deltaTime;
            const slowFactor = Math.min(this.frosted * 0.3, 0.9);
            this.speed = this.baseSpeed * (1 - slowFactor);
        } else {
            this.frosted = 0;
            this.speed = this.baseSpeed;
        }

        // Move toward player like a horde creature
        const dx = this.player.x - this.x;
        const dy = this.player.y - this.y;
        const distance = Math.hypot(dx, dy);
        if (distance > 0) {
            const swayY = Math.sin(t * 2.5) * 1.2;
            this.x += (dx / distance) * this.speed * this.weatherMulti;
            this.y += (dy / distance) * this.speed * this.weatherMulti + swayY * 0.02;
        }

        if (this.health <= 0) {
            this.dieAndSplit(this.enemies);
            return;
        }
    }

    draw(ctx) {
        if (!this.alive) return;

        ctx.save();
        ctx.translate(this.x, this.y);

        const r = this.radius * this.squish;
        const legPhase = Date.now() * 0.006 + this.walkOffset;

        // BLOODY BODY (blob aesthetic, not crystals)
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            const wave = Math.sin(legPhase * 2 + i) * 1.8;
            const px = Math.cos(a) * (r + wave);
            const py = Math.sin(a) * (this.radius + wave * 0.8);
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = this.frosted > 0 ? "#8BD6FF" : "#6A0000";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.frosted > 0 ? "#4A8FFF" : "#FF3333";
        ctx.stroke();

        // WALKING LEGS (moving like they're stepping)
        const legStretch = 4;
        for (let i = -1; i <= 1; i += 2) {
            const bob = Math.sin(legPhase + i * 1.4) * 3;
            ctx.beginPath();
            ctx.moveTo(i * r * 0.5, r * 0.9);
            ctx.quadraticCurveTo(i * r * 0.7, r * 1.4 + bob, i * r * 0.2, r * 1.8 + bob * 0.3);
            ctx.lineWidth = 3;
            ctx.strokeStyle = this.frosted > 0 ? "#2D7FFF" : "#500000";
            ctx.stroke();
        }

        // CREEPY PULSING EYE
        const eyePulse = 1 + Math.sin(Date.now() * 0.01) * 0.2;
        ctx.beginPath();
        ctx.arc(this.dir * r * 0.3, -r * 0.2, 3 * eyePulse, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.dir * r * 0.32, -r * 0.25, 1.4 * eyePulse, 0, Math.PI * 2);
        ctx.fillStyle = "#FF0000";
        ctx.fill();

        ctx.restore();
    }

    takeDmg(dmg) {
        if (Date.now() - this.lastHit < 50) return;
        this.lastHit = Date.now();
        const final = dmg * (this.player.spinach * 0.1 + 1) * (this.player.level * 0.02 + 1) * this.player.dmgMulti;
        this.health -= final;
        this.showDamageNumber(final);
        if (Math.round(this.health) <= 0) this.dieAndSplit(this.enemies);
    }

    applyFrost(level, duration) {
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

        const bloodText = document.createElement("div");
        bloodText.className = "damage-number";
        bloodText.textContent = "🩸";
        bloodText.style.left = `${this.x}px`;
        bloodText.style.top = `${this.y + this.radius / 2}px`;
        document.body.appendChild(bloodText);

        setTimeout(() => {
            dmgText.style.opacity = "0";
            dmgText.style.transform = "translateY(-30px)";
            bloodText.style.opacity = "0.1";
            bloodText.style.transform = "translateY(100px)";
        }, 50);

        setTimeout(() => {
            dmgText.remove();
            bloodText.remove(); }, 1000);
    }

    dieAndSplit() {
        if (!this.alive) return;
        this.alive = false;
        this.spawnSplits(this.enemies);
    }

    spawnSplits() {
        if (this.radius <= 38 || Math.random() < 0.1) return;
        const count = 2 + Math.floor(Math.random() * 4);
        for (let i = 0; i < count; i++) {
            const a = (i / count) * Math.PI * 2;
            const dist = 8 + Math.random() * 80;
            const sx = this.x + Math.cos(a) * dist;
            const sy = this.y + Math.sin(a) * dist;
            this.enemies.push(new MiniThrall(
                sx, sy, this.speed, this.speed, Math.max(1, this.health * Math.random()), this.player, Math.max(1, this.strength - 1), this.weatherMulti, this.radius
            ));
        }
    }

    spawnDrops(drops) {
        if (Math.random() < 0.5) {
            for (let i = 0; i < 1; i++) drops.push(new Emerald(this.x, this.y));
            return;
        }
        for (let i = 0; i < 1; i++) drops.push(new Diamond(this.x, this.y));
    }

    showHealth(ctx) {
        if (!this.alive) return;
        ctx.save();
        ctx.fillStyle = "#FF0000";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`Health: ${Math.round(this.health)}`, this.x, this.y - this.radius - 15);
        ctx.restore();
    }
}

//Peace Path
export class SleepySlime {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength, weatherMulti) {
        this.x = x;
        this.y = y;
        this.size = 30;
        this.currentSize = this.size;
        this.radius = 20;
        this.health = Math.max(15, Math.ceil(health * weatherMulti * (Math.random() * 0.5 + 0.5)));
        this.alive = true;
        this.player = player;
        this.lastHit = Date.now();
        this.strength = Number((Math.max(0.1, Math.random() * 4 + (strength - 2)) * weatherMulti).toFixed(1));
        this.frosted = 0;
        this.frostTime = 0;
        this.stepDistance = Math.ceil(((Math.random() * 150 + 100)) * weatherMulti);
        this.baseStepSpeed = Math.ceil(((Math.random() * 150 + 150)) * weatherMulti);
        this.stepSpeed = this.baseStepSpeed;
        this.pauseTime = Math.max(200, 1000 - player.level * 4 - minSpeed - maxSpeed);
        this.moving = true;
        this.movedDistance = 0;
        this.pauseTimer = 0;
        this.dirX = 0;
        this.dirY = 0;
        this.dir = 1;
        this.lastX = x;
        this.pulseTime = 0;
    }

    update(deltaTime) {
        if (!this.alive) return;
        // --- DIRECTION TRACKING (like Shard1) ---
        const dirX = this.x - this.lastX;
        if (dirX > 0) this.dir = 1;
        else if (dirX < 0) this.dir = -1;
        this.lastX = this.x;
        // --- FROST HANDLING ---
        if (this.frostTime > 0) {
            this.frostTime -= deltaTime;
            const slowFactor = Math.min(this.frosted * 0.3, 0.9);
            this.stepSpeed = this.baseStepSpeed * (1 - slowFactor);
        } else {
            this.frosted = 0;
            this.stepSpeed = this.baseStepSpeed;
        }
        // --- PULSATE SIZE ---
        this.pulseTime += deltaTime / 1000;
        this.currentSize = this.size + Math.sin(this.pulseTime * 3) * 3;
        this.radius = this.currentSize / 1.5; // ✅ keeps collision scaling
        // --- STEP TOWARDS PLAYER ---
        if (this.moving) {
            const dx = this.player.x - this.x;
            const dy = this.player.y - this.y;
            const distance = Math.hypot(dx, dy);
            if (distance > 0) {
                this.dirX = dx / distance;
                this.dirY = dy / distance;
            }

            const moveStep = this.stepSpeed * (deltaTime / 1000);
            this.x += this.dirX * moveStep;
            this.y += this.dirY * moveStep;
            this.movedDistance += moveStep;

            if (this.movedDistance >= this.stepDistance) {
                this.moving = false;
                this.movedDistance = 0;
                this.pauseTimer = 0;
            }
        } else {
            this.pauseTimer += deltaTime;
            if (this.pauseTimer >= this.pauseTime) this.moving = true;
        }

        // --- COLLISION → DEAL DAMAGE ---
        const dxP = this.player.x - this.x;
        const dyP = this.player.y - this.y;
        const distToPlayer = Math.hypot(dxP, dyP);
        if (distToPlayer < this.radius + this.player.radius) {
            this.dealDamage();
        }

        // --- DIE IF HEALTH 0 ---
        if (this.health <= 0) this.alive = false;
    }

    draw(ctx) {
        if (!this.alive) return;
        ctx.save();
        ctx.translate(this.x, this.y);

        const gradient = ctx.createLinearGradient(-this.currentSize/2, -this.currentSize/2, this.currentSize/2, this.currentSize/2);
        if (this.frosted > 0) {
            gradient.addColorStop(0, "#CCEEFF");
            gradient.addColorStop(1, "#66BBFF");
        } else {
            gradient.addColorStop(0, "#556B2F");
            gradient.addColorStop(1, "#A9DFBF");
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(-this.currentSize/2, -this.currentSize/2, this.currentSize, this.currentSize);
        ctx.restore();
    }

    takeDmg(dmg) {
        if (Date.now() - this.lastHit < 50) return;
        this.lastHit = Date.now();
        this.health -= dmg;
        this.showDamageNumber(dmg);  // ✅ NOW WORKING
        if (this.health <= 0) this.alive = false;
    }

    applyFrost(level, duration) {
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
        ctx.save();
        ctx.fillStyle = "red";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`Health: ${Math.round(this.health)}`, this.x, this.y - this.size - 5);
        ctx.restore();
    }

    spawnDrops(drops) {
        drops.push(new Diamond(this.x, this.y));
    }
}

export class Wall {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength, weatherMulti) {
        this.player = player;
        this.x = x;
        this.y = y;
        this.width = Math.random() * (200 - 10) + 10;
        this.height = this.width
        this.wallWidth = this.width;
        this.wallHeight = this.height;
        this.size = this.wallWidth;
        this.currentSize = this.size;
        this.baseSpeed = Math.random() * (0.01 - 0.001) + 0.001;
        this.speed = this.baseSpeed; // slow creep speed
        this.dir = 1;
        this.stopDist = 200;
        this.pushStrength = 3;
        this.moving = true;
        this.lastX = x;
        this.health = Math.max(health, Math.ceil(health * weatherMulti * (Math.random() * 15)));
        this.strength = Number((Math.max(0.1, Math.random() * 4 + (strength - 2)) * weatherMulti).toFixed(1));
        this.alive = true;
        this.frosted = 0;
        this.frostTime = 0;
        this.pulseTime = 0;
        this.opacity = 0;
        this.paused = false;
    }

    update(deltaTime) {
        if (!this.alive || !this.player) return;

        if (this.frostTime > 0) {
            this.frostTime -= deltaTime;
            const slowFactor = Math.min(this.frosted * 0.2, 0.9);
            this.speed = this.baseSpeed * (1 - slowFactor);
        } else {
            this.frosted = 0;
            this.speed = this.baseSpeed;
        }
        // Direction tracking
        const dx = this.x - this.lastX;
        if (dx > 0) this.dir = 1;
        else if (dx < 0) this.dir = -1;
        this.lastX = this.x;
        // Move in steps: 100px → pause 1s → repeat
        if (!this.paused) {
            const stepDist = Math.hypot(this.player.x - this.x, this.player.y - this.y);
            const angle = Math.atan2(this.player.y - this.y, this.player.x - this.x);
    
            this.x += Math.cos(angle) * 200 * this.speed * deltaTime;
            this.y += Math.sin(angle) * 200 * this.speed * deltaTime;
    
            if (stepDist <= this.stopDist) {
                this.paused = true;
                this.lastPause = Date.now();
            }
        } else {
            if (Date.now() - this.lastPause >= Math.random() * (1500 - 200) + 200) {
                this.paused = false;
            }
        }
        // Push player if blocking (no damage)
        const dist = Math.hypot(this.player.x - this.x, this.player.y - this.y);
        if (dist < this.radius + this.player.radius) {
            this.player.x -= this.pushStrength * this.dir;
        }
        // Pulsate size (optional personality)
        this.pulseTime += deltaTime / 1000;
        this.currentSize = this.size + Math.sin(this.pulseTime * 2) * 2;
        this.radius = this.currentSize / 1.5;
        this.opacity = Math.min(1, this.opacity + 0.0006 * deltaTime);
    }

    draw(ctx) {
        if (!this.alive) return;
    
        ctx.save();
        ctx.globalAlpha = this.opacity;
    
        // --- Body ---
        ctx.fillStyle = this.frosted > 0 ? "blue" : "black";
        ctx.fillRect(
            this.x - this.wallWidth / 2,
            this.y - this.wallHeight / 2,
            this.wallWidth,
            this.wallHeight
        );
    
        // --- Smiley Face ---
        const faceX = this.x;
        const faceY = this.y;
        const faceRadius = 20;
    
        // Face circle
        ctx.beginPath();
        ctx.arc(faceX, faceY, faceRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.frosted > 0 ? "#CCEEFF" : "lime";
        ctx.fill();
        ctx.closePath();
    
        // Eyes (wink animation)
        const time = Date.now() / 500; // speed of wink
        const wink = Math.floor(time) % 6 === 0; // wink every ~3 seconds
    
        ctx.fillStyle = "black";
        ctx.beginPath();
        // Left eye (always open)
        ctx.arc(faceX - 7, faceY - 5, 3, 0, Math.PI * 2);
        // Right eye (wink)
        if (!wink) {
            ctx.arc(faceX + 7, faceY - 5, 3, 0, Math.PI * 2);
        } else {
            ctx.moveTo(faceX + 4, faceY - 5);
            ctx.lineTo(faceX + 10, faceY - 5);
        }
        ctx.fill();
        ctx.closePath();
    
        // Mouth (slight wave animation)
        const wave = Math.sin(Date.now() / 300) * 2; // curve wiggle
        ctx.beginPath();
        ctx.arc(faceX, faceY + 5 + wave, 10, 0, Math.PI);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
    
        ctx.restore();
        ctx.globalAlpha = 1;
    }     
          
    takeDmg(dmg) {
        if (Date.now() - this.lastHit < 50) return;
        this.lastHit = Date.now();
        this.health -= dmg;
        this.showDamageNumber(dmg);  // ✅ NOW WORKING
        if (this.health <= 0) this.alive = false;
    }

    applyFrost(level, duration) {
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
        ctx.save();
        ctx.fillStyle = "red";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`Health: ${Math.round(this.health)}`, this.x, this.y - this.size / 2 - 25);
        ctx.restore();
    }

    spawnDrops(drops) {
        let count = Math.random() * (7 - 3) + 3
        for (let i = 0; i < 5; i++) {
          const offX = (Math.random() * 80 - 40); // scatter range
          const offY = (Math.random() * 80 - 40);
          drops.push(new Diamond(this.x + offX, this.y + offY));
        }
    }      
}

export class Shard1 {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength, weatherMulti) {
        this.player = player;
        this.x = x;
        this.y = y;
        this.alive = true;
        this.opacity = 0;

        // --- SHOOTER STATS ---
        this.cooldown = 2000;
        this.projectileSpeed = 0.004;
        this.slowLevel = 1;
        this.slowDuration = 1000;
        this.lastShot = Date.now();
        this.projectiles = [];

        // --- Enemy visuals + combat ---
        this.radius = 14; // small body
        this.health = Math.ceil(health * weatherMulti);
        this.strength = Number((Math.max(0.1, Math.random() * 4 + (strength - 2)) * weatherMulti).toFixed(1));
        this.frosted = 0;
        this.frostTime = 0;

        this.lastHit = 0;
    }

    update(deltaTime, canvas) {
        if (!this.alive || !this.player || !canvas) return;
    
        // --- move toward player ---
        const dx = this.player.x - this.x;
        const dy = this.player.y - this.y;
        const dist = Math.hypot(dx, dy);
    
        if (dist > this.stopDist) {
            this.x += (dx / dist) * this.speed * deltaTime;
            this.y += (dy / dist) * this.speed * deltaTime;
        }
    
        // fade in
        this.opacity = Math.min(1, this.opacity + 0.0006 * deltaTime);
    
        // --- update projectiles ---
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];
            p.x += p.dirX * p.speed * deltaTime;
            p.y += p.dirY * p.speed * deltaTime;
    
            if (Math.hypot(p.x - this.player.x, p.y - this.player.y) < p.radius + this.player.radius) {
                this.player.frosted = Math.max(this.player.frosted, this.slowLevel);
                this.player.frostTime = Math.max(this.player.frostTime, this.slowDuration);
                this.projectiles.splice(i, 1);
            } else if (
                p.x < -20 || p.x > canvas.width + 20 ||
                p.y < -20 || p.y > canvas.height + 20
            ) {
                this.projectiles.splice(i, 1);
            }
        }
    }    
    
    draw(ctx) {
        if (!this.alive) return;
    
        ctx.save();
        ctx.globalAlpha = this.opacity;
    
        ctx.fillStyle = "black";
        ctx.fillRect(
            this.x - this.wallWidth / 2,
            this.y - this.wallHeight / 2,
            this.wallWidth,
            this.wallHeight
        );
    
        ctx.restore();
        ctx.globalAlpha = 1;
    }    

    takeDmg(dmg) {
        if (Date.now() - this.lastHit < 50) return;
        this.lastHit = Date.now();
        this.health -= dmg;
        this.showDamageNumber(dmg);
        if (this.health <= 0) this.alive = false;
    }

    applyFrost(level, duration) {
        if (level > this.frosted) {
            this.frosted = level;
        }
        this.frostTime = Math.max(this.frostTime, duration);
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
        ctx.save();
        ctx.fillStyle = "red";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`Health: ${Math.round(this.health)}`, this.x, this.y - this.radius - 12);
        ctx.restore();
    }

    spawnDrops(drops) {
        for (let i = 0; i < 10; i++) {
          const offX = Math.random() * 80 - 40;
          const offY = Math.random() * 80 - 40;
          drops.push(new Diamond(this.x + offX, this.y + offY));
        }
    }
}







export class Boss1 {
    constructor(x, y, minSpeed, maxSpeed, health, player, strength, weatherMulti) {
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.baseSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        this.speed = this.baseSpeed;
        this.health = health * weatherMulti;
        this.alive = true;
        this.lastHit = Date.now();
        this.player = player;
        this.frosted = 0;   // level of frost effect (e.g., 1 = slight, 2 = heavy)
        this.frostTime = 0; // how long frost lasts (ms)
        this.strength = Math.random() * ((strength + 2) - (strength - 2)) + (strength - 2) * weatherMulti;
        this.weatherMulti = weatherMulti;
    }

    update(player, deltaTime) { // pass deltaTime if you have it
        if (!this.alive) return;
        if (this.health <= 0) this.alive = false;

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
            this.x += (dx / distance) * this.speed * this.weatherMulti;
            this.y += (dy / distance) * this.speed * this.weatherMulti;
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
        if (Date.now() - this.lastHit < 50) return;
        this.lastHit = Date.now();
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