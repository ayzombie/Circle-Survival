import { MagicWand } from "./weapons.js";
import { HolyWand } from "./weapons.js";
import { FireWand } from "./weapons.js";
import { ShockWave } from "./weapons.js";
import { FrostStaff } from "./weapons.js";
import { OrbitBlade } from "./weapons.js";
import { LavaEruption } from "./weapons.js";
import { VampireFang } from "./weapons.js";



const buyMagicWand = document.getElementById("buyMagicWand");
const upgradeMagicWand = document.getElementById("upgradeMagicWand");
const upgradeMagicWand2 = document.getElementById("upgradeMagicWand2");
const upgradeMagicWand3 = document.getElementById("upgradeMagicWand3");
const upgradeMagicWand4 = document.getElementById("upgradeMagicWand4");
const upgradeMagicWand5 = document.getElementById("upgradeMagicWand5");
const upgradeMagicWand6 = document.getElementById("upgradeMagicWand6");
const upgradeMagicWand7 = document.getElementById("upgradeMagicWand7");
const upgradeMagicWand8 = document.getElementById("upgradeMagicWand8");
// === Holy Wand ===
const buyHolyWand = document.getElementById("buyHolyWand");
const upgradeHolyWand1 = document.getElementById("upgradeHolyWand1");
const upgradeHolyWand2 = document.getElementById("upgradeHolyWand2");
const upgradeHolyWand3 = document.getElementById("upgradeHolyWand3");
const upgradeHolyWand4 = document.getElementById("upgradeHolyWand4");
const upgradeHolyWand5 = document.getElementById("upgradeHolyWand5");
const upgradeHolyWand6 = document.getElementById("upgradeHolyWand6");
const upgradeHolyWand7 = document.getElementById("upgradeHolyWand7");
const upgradeHolyWand8 = document.getElementById("upgradeHolyWand8");
const upgradeHolyWand9 = document.getElementById("upgradeHolyWand9");
// === Fire Wand ===
const buyFireWand = document.getElementById("buyFireWand");
const upgradeFireWand1 = document.getElementById("upgradeFireWand1");
const upgradeFireWand2 = document.getElementById("upgradeFireWand2");
const upgradeFireWand3 = document.getElementById("upgradeFireWand3");
const upgradeFireWand4 = document.getElementById("upgradeFireWand4");
const upgradeFireWand5 = document.getElementById("upgradeFireWand5");
const upgradeFireWand6 = document.getElementById("upgradeFireWand6");
const upgradeFireWand7 = document.getElementById("upgradeFireWand7");
const upgradeFireWand8 = document.getElementById("upgradeFireWand8");
// === Shock Wave ==
const buyShockWave = document.getElementById("buyShockWave");
const upgradeShockWave1 = document.getElementById("upgradeShockWave1");
const upgradeShockWave2 = document.getElementById("upgradeShockWave2");
const upgradeShockWave3 = document.getElementById("upgradeShockWave3");
const upgradeShockWave4 = document.getElementById("upgradeShockWave4");
const upgradeShockWave5 = document.getElementById("upgradeShockWave5");
const upgradeShockWave6 = document.getElementById("upgradeShockWave6");
const upgradeShockWave7 = document.getElementById("upgradeShockWave7");
const upgradeShockWave8 = document.getElementById("upgradeShockWave8");
// === Frost Staff ===
const buyFrostStaff = document.getElementById("buyFrostStaff");
const upgradeFrostStaff1 = document.getElementById("upgradeFrostStaff1");
const upgradeFrostStaff2 = document.getElementById("upgradeFrostStaff2");
const upgradeFrostStaff3 = document.getElementById("upgradeFrostStaff3");
const upgradeFrostStaff4 = document.getElementById("upgradeFrostStaff4");
const upgradeFrostStaff5 = document.getElementById("upgradeFrostStaff5");
const upgradeFrostStaff6 = document.getElementById("upgradeFrostStaff6");
const upgradeFrostStaff7 = document.getElementById("upgradeFrostStaff7");
const upgradeFrostStaff8 = document.getElementById("upgradeFrostStaff8");
// === Orbit Blade ===
const buyOrbitBlade = document.getElementById("buyOrbitBlade");
const upgradeOrbitBlade1 = document.getElementById("upgradeOrbitBlade1");
const upgradeOrbitBlade2 = document.getElementById("upgradeOrbitBlade2");
const upgradeOrbitBlade3 = document.getElementById("upgradeOrbitBlade3");
const upgradeOrbitBlade4 = document.getElementById("upgradeOrbitBlade4");
const upgradeOrbitBlade5 = document.getElementById("upgradeOrbitBlade5");
const upgradeOrbitBlade6 = document.getElementById("upgradeOrbitBlade6");
const upgradeOrbitBlade7 = document.getElementById("upgradeOrbitBlade7");
const upgradeOrbitBlade8 = document.getElementById("upgradeOrbitBlade8");
// === Lava Eruption ===
const buyLavaEruption = document.getElementById("buyLavaEruption");
const upgradeLavaEruption1 = document.getElementById("upgradeLavaEruption1");
const upgradeLavaEruption2 = document.getElementById("upgradeLavaEruption2");
const upgradeLavaEruption3 = document.getElementById("upgradeLavaEruption3");
const upgradeLavaEruption4 = document.getElementById("upgradeLavaEruption4");
const upgradeLavaEruption5 = document.getElementById("upgradeLavaEruption5");
const upgradeLavaEruption6 = document.getElementById("upgradeLavaEruption6");
const upgradeLavaEruption7 = document.getElementById("upgradeLavaEruption7");
const upgradeLavaEruption8 = document.getElementById("upgradeLavaEruption8");
// === Vampire's Fang ===
const buyVampireFang = document.getElementById("buyVampireFang");
const upgradeVampireFang1 = document.getElementById("upgradeVampireFang1");
const upgradeVampireFang2 = document.getElementById("upgradeVampireFang2");
const upgradeVampireFang3 = document.getElementById("upgradeVampireFang3");
const upgradeVampireFang4 = document.getElementById("upgradeVampireFang4");
const upgradeVampireFang5 = document.getElementById("upgradeVampireFang5");
const upgradeVampireFang6 = document.getElementById("upgradeVampireFang6");
const upgradeVampireFang7 = document.getElementById("upgradeVampireFang7");
const upgradeVampireFang8 = document.getElementById("upgradeVampireFang8");
// === Spinach ===
const buySpinach = document.getElementById("buySpinach");
const upgradeSpinach1 = document.getElementById("upgradeSpinach1");
const upgradeSpinach2 = document.getElementById("upgradeSpinach2");
const upgradeSpinach3 = document.getElementById("upgradeSpinach3");
const upgradeSpinach4 = document.getElementById("upgradeSpinach4");
// === Magnet ===
const buyMagnet = document.getElementById("buyMagnet");
const upgradeMagnet1 = document.getElementById("upgradeMagnet1");
const upgradeMagnet2 = document.getElementById("upgradeMagnet2");
const upgradeMagnet3 = document.getElementById("upgradeMagnet3");
const upgradeMagnet4 = document.getElementById("upgradeMagnet4");
// === XP Multiplier ===
const buyXpMulti = document.getElementById("buyXpMulti");
const upgradeXpMulti1 = document.getElementById("upgradeXpMulti1");
const upgradeXpMulti2 = document.getElementById("upgradeXpMulti2");
const upgradeXpMulti3 = document.getElementById("upgradeXpMulti3");
const upgradeXpMulti4 = document.getElementById("upgradeXpMulti4");

export function loadButtons() {
    resetBtn.addEventListener("click", () => {
        player.health = 0;
        window.location.reload(true);
    });
    
    buyMagicWand.addEventListener("click", () => {
        player.inventory.push(new MagicWand(player));
        console.log("Bought Magic Wand!");
        buttons = buttons.filter(b => b !== buyMagicWand);
        buttons.push(upgradeMagicWand);
    });

    upgradeMagicWand.addEventListener("click", () => {
        console.log("Upgraded Magic Wand to Level 2!");
        buttons = buttons.filter(b => b !== upgradeMagicWand);
        buttons.push(upgradeMagicWand2);
        const wand = player.inventory.find(w => w instanceof MagicWand);
        wand.level = 2;
    });

    upgradeMagicWand2.addEventListener("click", () => {
        // Handle upgrading Magic Wand to level 3
        console.log("Upgraded Magic Wand to Level 3!");
        buttons = buttons.filter(b => b !== upgradeMagicWand2);
        buttons.push(upgradeMagicWand3);
        const wand = player.inventory.find(w => w instanceof MagicWand);
        wand.level = 3;
    });

    upgradeMagicWand3.addEventListener("click", () => {
        // Handle upgrading Magic Wand to level 4
        console.log("Upgraded Magic Wand to Level 4!");
        buttons = buttons.filter(b => b !== upgradeMagicWand3);
        buttons.push(upgradeMagicWand4);
        const wand = player.inventory.find(w => w instanceof MagicWand);
        wand.level = 4;
    });

    upgradeMagicWand4.addEventListener("click", () => {
        // Handle upgrading Magic Wand to level 5
        console.log("Upgraded Magic Wand to Level 5!");
        buttons = buttons.filter(b => b !== upgradeMagicWand4);
        buttons.push(buyMoreStuff);
        const wand = player.inventory.find(w => w instanceof MagicWand);
        wand.level = 5;
    });

    upgradeMagicWand5.addEventListener("click", () => {
        // Handle upgrading Magic Wand to level 6
        console.log("Upgraded Magic Wand to Level 6!");
        buttons = buttons.filter(b => b !== upgradeMagicWand5);
        buttons.push(upgradeMagicWand6);
        const wand = player.inventory.find(w => w instanceof MagicWand);
        wand.level = 6;
    });

    upgradeMagicWand6.addEventListener("click", () => {
        // Handle upgrading Magic Wand to level 7
        console.log("Upgraded Magic Wand to Level 7!");
        buttons = buttons.filter(b => b !== upgradeMagicWand6);
        buttons.push(upgradeMagicWand7);
        const wand = player.inventory.find(w => w instanceof MagicWand);
        wand.level = 7;
    });

    upgradeMagicWand7.addEventListener("click", () => {
        // Handle upgrading Magic Wand to level 8
        console.log("Upgraded Magic Wand to Level 8!");
        buttons = buttons.filter(b => b !== upgradeMagicWand7);
        buttons.push(upgradeMagicWand8);
        const wand = player.inventory.find(w => w instanceof MagicWand);
        wand.level = 8;
    });

    upgradeMagicWand8.addEventListener("click", () => {
        // Handle upgrading Magic Wand to level 9 (max upgrade)
        console.log("Upgraded Magic Wand to Level 9 (Max)!");
        buttons = buttons.filter(b => b !== upgradeMagicWand8);
        // No further upgrade buttons to add
        const wand = player.inventory.find(w => w instanceof MagicWand);
        wand.level = 9;
    });

    buyShockWave.addEventListener("click", () => {
        // Handle buying the shockWave weapon
        console.log("Bought shockWave!");
        buttons = buttons.filter(b => b !== buyShockWave);
        buttons.push(upgradeShockWave1);
        if (!player.inventory.some(w => w instanceof ShockWave)) {
            player.inventory.push(new ShockWave(player));
        }
    });

    upgradeShockWave1.addEventListener("click", () => {
        // Upgrade shockWave to level 2
        console.log("Upgraded shockWave to Level 2!");
        buttons = buttons.filter(b => b !== upgradeShockWave1);
        buttons.push(upgradeShockWave2);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 2;
    });

    upgradeShockWave2.addEventListener("click", () => {
        // Upgrade shockWave to level 3
        console.log("Upgraded shockWave to Level 3!");
        buttons = buttons.filter(b => b !== upgradeShockWave2);
        buttons.push(upgradeShockWave3);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 3;
    });

    upgradeShockWave3.addEventListener("click", () => {
        // Upgrade shockWave to level 4
        console.log("Upgraded shockWave to Level 4!");
        buttons = buttons.filter(b => b !== upgradeShockWave3);
        buttons.push(upgradeShockWave4);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 4;
    });

    upgradeShockWave4.addEventListener("click", () => {
        // Upgrade shockWave to level 5
        console.log("Upgraded shockWave to Level 5!");
        buttons = buttons.filter(b => b !== upgradeShockWave4);
        buttons.push(upgradeShockWave5);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 5;
    });

    upgradeShockWave5.addEventListener("click", () => {
        // Upgrade shockWave to level 6
        console.log("Upgraded shockWave to Level 6!");
        buttons = buttons.filter(b => b !== upgradeShockWave5);
        buttons.push(upgradeShockWave6);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 6;
    });
    
    upgradeShockWave6.addEventListener("click", () => {
        // Upgrade shockWave to level 7
        console.log("Upgraded shockWave to Level 7!");
        buttons = buttons.filter(b => b !== upgradeShockWave6);
        buttons.push(upgradeShockWave7);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 7;
    });

    upgradeShockWave7.addEventListener("click", () => {
        // Upgrade shockWave to level 8
        console.log("Upgraded shockWave to Level 8!");
        buttons = buttons.filter(b => b !== upgradeShockWave7);
        buttons.push(upgradeShockWave8);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 8;
    });

    upgradeShockWave8.addEventListener("click", () => {
        // Upgrade shockWave to level 9 (max)
        console.log("Upgraded shockWave to Level 9 (Max)!");
        buttons = buttons.filter(b => b !== upgradeShockWave8);
        // No further upgrades
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 9;
    });

    buyFireWand.addEventListener("click", () => {
        player.inventory.push(new FireWand(player));
        console.log("Bought Fire Wand!");
        buttons = buttons.filter(b => b !== buyFireWand);
        buttons.push(upgradeFireWand1);
    });

    upgradeFireWand1.addEventListener("click", () => {
        // Upgrade Fire Wand to level 2
        console.log("Upgraded Fire Wand to Level 2!");
        buttons = buttons.filter(b => b !== upgradeFireWand1);
        buttons.push(upgradeFireWand2);
        const fireWand = player.inventory.find(w => w instanceof FireWand);
        if (fireWand) fireWand.level = 2;
    });

    upgradeFireWand2.addEventListener("click", () => {
        // Upgrade Fire Wand to level 3
        console.log("Upgraded Fire Wand to Level 3!");
        buttons = buttons.filter(b => b !== upgradeFireWand2);
        buttons.push(upgradeFireWand3);
        const fireWand = player.inventory.find(w => w instanceof FireWand);
        if (fireWand) fireWand.level = 3;
    });

    upgradeFireWand3.addEventListener("click", () => {
        // Upgrade Fire Wand to level 4
        console.log("Upgraded Fire Wand to Level 4!");
        buttons = buttons.filter(b => b !== upgradeFireWand3);
        buttons.push(upgradeFireWand4);
        const fireWand = player.inventory.find(w => w instanceof FireWand);
        if (fireWand) fireWand.level = 4;
    });

    upgradeFireWand4.addEventListener("click", () => {
        // Upgrade Fire Wand to level 5
        console.log("Upgraded Fire Wand to Level 5!");
        buttons = buttons.filter(b => b !== upgradeFireWand4);
        buttons.push(upgradeFireWand5);
        const fireWand = player.inventory.find(w => w instanceof FireWand);
        if (fireWand) fireWand.level = 5;
    });

    upgradeFireWand5.addEventListener("click", () => {
        // Upgrade Fire Wand to level 6
        console.log("Upgraded Fire Wand to Level 6!");
        buttons = buttons.filter(b => b !== upgradeFireWand5);
        buttons.push(upgradeFireWand6);
        const fireWand = player.inventory.find(w => w instanceof FireWand);
        if (fireWand) fireWand.level = 6;
    });

    upgradeFireWand6.addEventListener("click", () => {
        // Upgrade Fire Wand to level 7
        console.log("Upgraded Fire Wand to Level 7!");
        buttons = buttons.filter(b => b !== upgradeFireWand6);
        buttons.push(upgradeFireWand7);
        const fireWand = player.inventory.find(w => w instanceof FireWand);
        if (fireWand) fireWand.level = 7;
    });

    upgradeFireWand7.addEventListener("click", () => {
        // Upgrade Fire Wand to level 8
        console.log("Upgraded Fire Wand to Level 8!");
        buttons = buttons.filter(b => b !== upgradeFireWand7);
        buttons.push(upgradeFireWand8);
        const fireWand = player.inventory.find(w => w instanceof FireWand);
        if (fireWand) fireWand.level = 8;
    });

    upgradeFireWand8.addEventListener("click", () => {
        // Upgrade Fire Wand to level 9 (Max)
        console.log("Upgraded Fire Wand to Level 9 (Max)!");
        buttons = buttons.filter(b => b !== upgradeFireWand8);
        // No more upgrades to push
        const fireWand = player.inventory.find(w => w instanceof FireWand);
        if (fireWand) fireWand.level = 9;
    });

    buySpinach.addEventListener("click", () => {
        // Handle buying Spinach (damage boost)
        console.log("Bought Spinach (+10% damage)!");
        buttons = buttons.filter(b => b !== buySpinach);
        buttons.push(upgradeSpinach1);
        if (!player.spinach) player.spinach = 1;
        else player.spinach += 1;
    });
    
    upgradeSpinach1.addEventListener("click", () => {
        // Upgrade Spinach to level 2 (+10% more damage)
        console.log("Upgraded Spinach to Level 2 (+10%)!");
        buttons = buttons.filter(b => b !== upgradeSpinach1);
        buttons.push(upgradeSpinach2);
        if (!player.spinach) player.spinach = 2;
        else player.spinach += 1;
    });
    
    upgradeSpinach2.addEventListener("click", () => {
        // Upgrade Spinach to level 3 (+10% more damage)
        console.log("Upgraded Spinach to Level 3 (+10%)!");
        buttons = buttons.filter(b => b !== upgradeSpinach2);
        buttons.push(upgradeSpinach3);
        if (!player.spinach) player.spinach = 3;
        else player.spinach += 1;
    });
    
    upgradeSpinach3.addEventListener("click", () => {
        // Upgrade Spinach to level 4 (+10% more damage)
        console.log("Upgraded Spinach to Level 4 (+10%)!");
        buttons = buttons.filter(b => b !== upgradeSpinach3);
        buttons.push(upgradeSpinach4);
        if (!player.spinach) player.spinach = 4;
        else player.spinach += 1;
    });
    
    upgradeSpinach4.addEventListener("click", () => {
        // Upgrade Spinach to level 5 (+20% more damage)
        console.log("Upgraded Spinach to Level 5 (+20%)!");
        buttons = buttons.filter(b => b !== upgradeSpinach4);
        // No more upgrades to push
        if (!player.spinach) player.spinach = 6; // 4 + 2
        else player.spinach += 2;
    });

    buyFrostStaff.addEventListener("click", () => {
        player.inventory.push(new FrostStaff(player));
        console.log("Bought Frost Staff!");
        buttons = buttons.filter(b => b !== buyFrostStaff);
        buttons.push(upgradeFrostStaff1);
    });

    upgradeFrostStaff1.addEventListener("click", () => {
        console.log("Upgraded Frost Staff to Level 2!");
        buttons = buttons.filter(b => b !== upgradeFrostStaff1);
        buttons.push(upgradeFrostStaff2);
        const frost = player.inventory.find(w => w.constructor && w.constructor.name === "FrostStaff");
        if (frost) frost.level = 2;
    });

    upgradeFrostStaff2.addEventListener("click", () => {
        console.log("Upgraded Frost Staff to Level 3!");
        buttons = buttons.filter(b => b !== upgradeFrostStaff2);
        buttons.push(upgradeFrostStaff3);
        const frost = player.inventory.find(w => w.constructor && w.constructor.name === "FrostStaff");
        if (frost) frost.level = 3;
    });

    upgradeFrostStaff3.addEventListener("click", () => {
        console.log("Upgraded Frost Staff to Level 4!");
        buttons = buttons.filter(b => b !== upgradeFrostStaff3);
        buttons.push(upgradeFrostStaff4);
        const frost = player.inventory.find(w => w.constructor && w.constructor.name === "FrostStaff");
        if (frost) frost.level = 4;
    });

    upgradeFrostStaff4.addEventListener("click", () => {
        console.log("Upgraded Frost Staff to Level 5!");
        buttons = buttons.filter(b => b !== upgradeFrostStaff4);
        buttons.push(upgradeFrostStaff5);
        const frost = player.inventory.find(w => w.constructor && w.constructor.name === "FrostStaff");
        if (frost) frost.level = 5;
    });

    upgradeFrostStaff5.addEventListener("click", () => {
        console.log("Upgraded Frost Staff to Level 6!");
        buttons = buttons.filter(b => b !== upgradeFrostStaff5);
        buttons.push(upgradeFrostStaff6);
        const frost = player.inventory.find(w => w.constructor && w.constructor.name === "FrostStaff");
        if (frost) frost.level = 6;
    });

    upgradeFrostStaff6.addEventListener("click", () => {
        console.log("Upgraded Frost Staff to Level 7!");
        buttons = buttons.filter(b => b !== upgradeFrostStaff6);
        buttons.push(upgradeFrostStaff7);
        const frost = player.inventory.find(w => w.constructor && w.constructor.name === "FrostStaff");
        if (frost) frost.level = 7;
    });

    upgradeFrostStaff7.addEventListener("click", () => {
        console.log("Upgraded Frost Staff to Level 8!");
        buttons = buttons.filter(b => b !== upgradeFrostStaff7);
        buttons.push(upgradeFrostStaff8);
        const frost = player.inventory.find(w => w.constructor && w.constructor.name === "FrostStaff");
        if (frost) frost.level = 8;
    });

    upgradeFrostStaff8.addEventListener("click", () => {
        console.log("Upgraded Frost Staff to Level 9!");
        buttons = buttons.filter(b => b !== upgradeFrostStaff8);
        // No more upgrades to push
        const frost = player.inventory.find(w => w.constructor && w.constructor.name === "FrostStaff");
        if (frost) frost.level = 9;
    });

    buyMagnet.addEventListener("click", () => {
        player.magnetLevel = 1;
        console.log("Bought Magnet!");
        buttons = buttons.filter(b => b !== buyMagnet);
        buttons.push(upgradeMagnet1);
    });

    upgradeMagnet1.addEventListener("click", () => {
        console.log("Upgraded Magnet to Level 2!");
        buttons = buttons.filter(b => b !== upgradeMagnet1);
        buttons.push(upgradeMagnet2);
        player.magnetLevel = 2;
    });

    upgradeMagnet2.addEventListener("click", () => {
        console.log("Upgraded Magnet to Level 3!");
        buttons = buttons.filter(b => b !== upgradeMagnet2);
        buttons.push(upgradeMagnet3);
        player.magnetLevel = 3;
    });

    upgradeMagnet3.addEventListener("click", () => {
        console.log("Upgraded Magnet to Level 4!");
        buttons = buttons.filter(b => b !== upgradeMagnet3);
        buttons.push(upgradeMagnet4);
        player.magnetLevel = 4;
    });

    upgradeMagnet4.addEventListener("click", () => {
        console.log("Upgraded Magnet to Level 5!");
        buttons = buttons.filter(b => b !== upgradeMagnet4);
        // Max level, do not push further upgrades
        player.magnetLevel = 5;
    });

    buyOrbitBlade.addEventListener("click", () => {
        player.inventory.push(new OrbitBlade(player));
        console.log("Bought Orbit Blade!");
        buttons = buttons.filter(b => b !== buyOrbitBlade);
        buttons.push(upgradeOrbitBlade1);
    });
    
    upgradeOrbitBlade1.addEventListener("click", () => {
        console.log("Upgraded Orbit Blade to Level 2!");
        buttons = buttons.filter(b => b !== upgradeOrbitBlade1);
        buttons.push(upgradeOrbitBlade2);
        const blade = player.inventory.find(w => w.constructor && w.constructor.name === "OrbitBlade");
        if (blade) blade.level = 2;
    });
    
    upgradeOrbitBlade2.addEventListener("click", () => {
        console.log("Upgraded Orbit Blade to Level 3!");
        buttons = buttons.filter(b => b !== upgradeOrbitBlade2);
        buttons.push(upgradeOrbitBlade3);
        const blade = player.inventory.find(w => w.constructor && w.constructor.name === "OrbitBlade");
        if (blade) blade.level = 3;
    });
    
    upgradeOrbitBlade3.addEventListener("click", () => {
        console.log("Upgraded Orbit Blade to Level 4!");
        buttons = buttons.filter(b => b !== upgradeOrbitBlade3);
        buttons.push(upgradeOrbitBlade4);
        const blade = player.inventory.find(w => w.constructor && w.constructor.name === "OrbitBlade");
        if (blade) blade.level = 4;
    });
    
    upgradeOrbitBlade4.addEventListener("click", () => {
        console.log("Upgraded Orbit Blade to Level 5!");
        buttons = buttons.filter(b => b !== upgradeOrbitBlade4);
        buttons.push(upgradeOrbitBlade5);
        const blade = player.inventory.find(w => w.constructor && w.constructor.name === "OrbitBlade");
        if (blade) blade.level = 5;
    });
    
    upgradeOrbitBlade5.addEventListener("click", () => {
        console.log("Upgraded Orbit Blade to Level 6!");
        buttons = buttons.filter(b => b !== upgradeOrbitBlade5);
        buttons.push(upgradeOrbitBlade6);
        const blade = player.inventory.find(w => w.constructor && w.constructor.name === "OrbitBlade");
        if (blade) blade.level = 6;
    });
    
    upgradeOrbitBlade6.addEventListener("click", () => {
        console.log("Upgraded Orbit Blade to Level 7!");
        buttons = buttons.filter(b => b !== upgradeOrbitBlade6);
        buttons.push(upgradeOrbitBlade7);
        const blade = player.inventory.find(w => w.constructor && w.constructor.name === "OrbitBlade");
        if (blade) blade.level = 7;
    });
    
    upgradeOrbitBlade7.addEventListener("click", () => {
        console.log("Upgraded Orbit Blade to Level 8!");
        buttons = buttons.filter(b => b !== upgradeOrbitBlade7);
        buttons.push(upgradeOrbitBlade8);
        const blade = player.inventory.find(w => w.constructor && w.constructor.name === "OrbitBlade");
        if (blade) blade.level = 8;
    });
    
    upgradeOrbitBlade8.addEventListener("click", () => {
        console.log("Upgraded Orbit Blade to Level 9!");
        buttons = buttons.filter(b => b !== upgradeOrbitBlade8);
        // Max level reached, do not push any more upgrades
        const blade = player.inventory.find(w => w.constructor && w.constructor.name === "OrbitBlade");
        if (blade) blade.level = 9;
    });
    
    buyLavaEruption.addEventListener("click", () => {
        player.inventory.push(new LavaEruption(player));
        console.log("Bought Lava Eruption!");
        buttons = buttons.filter(b => b !== buyLavaEruption);
        buttons.push(upgradeLavaEruption1);
    });
    
    upgradeLavaEruption1.addEventListener("click", () => {
        console.log("Upgraded Lava Eruption to Level 2!");
        buttons = buttons.filter(b => b !== upgradeLavaEruption1);
        buttons.push(upgradeLavaEruption2);
        const eruption = player.inventory.find(w => w.constructor && w.constructor.name === "LavaEruption");
        if (eruption) eruption.level = 2;
    });
    
    upgradeLavaEruption2.addEventListener("click", () => {
        console.log("Upgraded Lava Eruption to Level 3!");
        buttons = buttons.filter(b => b !== upgradeLavaEruption2);
        buttons.push(upgradeLavaEruption3);
        const eruption = player.inventory.find(w => w.constructor && w.constructor.name === "LavaEruption");
        if (eruption) eruption.level = 3;
    });
    
    upgradeLavaEruption3.addEventListener("click", () => {
        console.log("Upgraded Lava Eruption to Level 4!");
        buttons = buttons.filter(b => b !== upgradeLavaEruption3);
        buttons.push(upgradeLavaEruption4);
        const eruption = player.inventory.find(w => w.constructor && w.constructor.name === "LavaEruption");
        if (eruption) eruption.level = 4;
    });
    
    upgradeLavaEruption4.addEventListener("click", () => {
        console.log("Upgraded Lava Eruption to Level 5!");
        buttons = buttons.filter(b => b !== upgradeLavaEruption4);
        buttons.push(upgradeLavaEruption5);
        const eruption = player.inventory.find(w => w.constructor && w.constructor.name === "LavaEruption");
        if (eruption) eruption.level = 5;
    });
    
    upgradeLavaEruption5.addEventListener("click", () => {
        console.log("Upgraded Lava Eruption to Level 6!");
        buttons = buttons.filter(b => b !== upgradeLavaEruption5);
        buttons.push(upgradeLavaEruption6);
        const eruption = player.inventory.find(w => w.constructor && w.constructor.name === "LavaEruption");
        if (eruption) eruption.level = 6;
    });
    
    upgradeLavaEruption6.addEventListener("click", () => {
        console.log("Upgraded Lava Eruption to Level 7!");
        buttons = buttons.filter(b => b !== upgradeLavaEruption6);
        buttons.push(upgradeLavaEruption7);
        const eruption = player.inventory.find(w => w.constructor && w.constructor.name === "LavaEruption");
        if (eruption) eruption.level = 7;
    });
    
    upgradeLavaEruption7.addEventListener("click", () => {
        console.log("Upgraded Lava Eruption to Level 8!");
        buttons = buttons.filter(b => b !== upgradeLavaEruption7);
        buttons.push(upgradeLavaEruption8);
        const eruption = player.inventory.find(w => w.constructor && w.constructor.name === "LavaEruption");
        if (eruption) eruption.level = 8;
    });
    
    upgradeLavaEruption8.addEventListener("click", () => {
        console.log("Upgraded Lava Eruption to Level 9!");
        buttons = buttons.filter(b => b !== upgradeLavaEruption8);
        // Max level reached, do not push further upgrades
        const eruption = player.inventory.find(w => w.constructor && w.constructor.name === "LavaEruption");
        if (eruption) eruption.level = 9;
    });

    buyXpMulti.addEventListener("click", () => {
        player.xpMulti = 1.2;
        console.log("Bought XP Multiplier! XP gain x1.2");
        buttons = buttons.filter(b => b !== buyXpMulti);
        buttons.push(upgradeXpMulti1);
    });
    
    upgradeXpMulti1.addEventListener("click", () => {
        player.xpMulti = 1.4;
        console.log("Upgraded XP Multiplier to Lv2! XP gain x1.4");
        buttons = buttons.filter(b => b !== upgradeXpMulti1);
        buttons.push(upgradeXpMulti2);
    });
    
    upgradeXpMulti2.addEventListener("click", () => {
        player.xpMulti = 1.7;
        console.log("Upgraded XP Multiplier to Lv3! XP gain x1.7");
        buttons = buttons.filter(b => b !== upgradeXpMulti2);
        buttons.push(upgradeXpMulti3);
    });
    
    upgradeXpMulti3.addEventListener("click", () => {
        player.xpMulti = 2;
        console.log("Upgraded XP Multiplier to Lv4! XP gain x2");
        buttons = buttons.filter(b => b !== upgradeXpMulti3);
        buttons.push(upgradeXpMulti4);
    });
    
    upgradeXpMulti4.addEventListener("click", () => {
        player.xpMulti = 2.5;
        console.log("Upgraded XP Multiplier to Lv5! XP gain x2.5 (MAX)");
        buttons = buttons.filter(b => b !== upgradeXpMulti4);
        // Max level reached, do not push further upgrades
    });

    buyHolyWand.addEventListener("click", () => {
        // Add Holy Wand to player inventory (as an evolved Magic Wand)
        player.inventory.push(new HolyWand(player));
        console.log("Bought Holy Wand! (Evolved Magic Wand)");
        buttons = buttons.filter(b => b !== buyHolyWand);
        buttons.push(upgradeHolyWand1);
    });

    upgradeHolyWand1.addEventListener("click", () => {
        // Upgrade Holy Wand to level 2
        const wand = player.inventory.find(w => w.constructor && w.constructor.name === "HolyWand");
        if (wand) wand.level = 2;
        console.log("Upgraded Holy Wand to Level 2!");
        buttons = buttons.filter(b => b !== upgradeHolyWand1);
        buttons.push(upgradeHolyWand2);
    });

    upgradeHolyWand2.addEventListener("click", () => {
        // Upgrade Holy Wand to level 3
        const wand = player.inventory.find(w => w.constructor && w.constructor.name === "HolyWand");
        if (wand) wand.level = 3;
        console.log("Upgraded Holy Wand to Level 3!");
        buttons = buttons.filter(b => b !== upgradeHolyWand2);
        buttons.push(upgradeHolyWand3);
    });

    upgradeHolyWand3.addEventListener("click", () => {
        // Upgrade Holy Wand to level 4
        const wand = player.inventory.find(w => w.constructor && w.constructor.name === "HolyWand");
        if (wand) wand.level = 4;
        console.log("Upgraded Holy Wand to Level 4!");
        buttons = buttons.filter(b => b !== upgradeHolyWand3);
        buttons.push(upgradeHolyWand4);
    });

    upgradeHolyWand4.addEventListener("click", () => {
        // Upgrade Holy Wand to level 5
        const wand = player.inventory.find(w => w.constructor && w.constructor.name === "HolyWand");
        if (wand) wand.level = 5;
        console.log("Upgraded Holy Wand to Level 5!");
        buttons = buttons.filter(b => b !== upgradeHolyWand4);
        buttons.push(upgradeHolyWand5);
    });

    upgradeHolyWand5.addEventListener("click", () => {
        // Upgrade Holy Wand to level 6
        const wand = player.inventory.find(w => w.constructor && w.constructor.name === "HolyWand");
        if (wand) wand.level = 6;
        console.log("Upgraded Holy Wand to Level 6!");
        buttons = buttons.filter(b => b !== upgradeHolyWand5);
        buttons.push(upgradeHolyWand6);
    });

    upgradeHolyWand6.addEventListener("click", () => {
        // Upgrade Holy Wand to level 7
        const wand = player.inventory.find(w => w.constructor && w.constructor.name === "HolyWand");
        if (wand) wand.level = 7;
        console.log("Upgraded Holy Wand to Level 7!");
        buttons = buttons.filter(b => b !== upgradeHolyWand6);
        buttons.push(upgradeHolyWand7);
    });

    upgradeHolyWand7.addEventListener("click", () => {
        // Upgrade Holy Wand to level 8
        const wand = player.inventory.find(w => w.constructor && w.constructor.name === "HolyWand");
        if (wand) wand.level = 8;
        console.log("Upgraded Holy Wand to Level 8!");
        buttons = buttons.filter(b => b !== upgradeHolyWand7);
        buttons.push(upgradeHolyWand8);
    });

    upgradeHolyWand8.addEventListener("click", () => {
        // Upgrade Holy Wand to level 9
        const wand = player.inventory.find(w => w.constructor && w.constructor.name === "HolyWand");
        if (wand) wand.level = 9;
        console.log("Upgraded Holy Wand to Level 9!");
        buttons = buttons.filter(b => b !== upgradeHolyWand8);
        buttons.push(upgradeHolyWand9);
    });

    upgradeHolyWand9.addEventListener("click", () => {
        // Upgrade Holy Wand to level 10 (max level)
        const wand = player.inventory.find(w => w.constructor && w.constructor.name === "HolyWand");
        if (wand) wand.level = 10;
        console.log("Upgraded Holy Wand to Level 10! (MAX)");
        buttons = buttons.filter(b => b !== upgradeHolyWand9);
        // No further upgrades
    });

    buyVampireFang.addEventListener("click", () => {
        player.inventory.push(new VampireFang(player));
        console.log("Bought Vampire Fang!");
        buttons = buttons.filter(b => b !== buyVampireFang);
        buttons.push(upgradeVampireFang1);
    });
    
    upgradeVampireFang1.addEventListener("click", () => {
        const fang = player.inventory.find(w => w.constructor && w.constructor.name === "VampireFang");
        if (fang) fang.level = 2;
        console.log("Upgraded Vampire Fang to Level 2!");
        buttons = buttons.filter(b => b !== upgradeVampireFang1);
        buttons.push(upgradeVampireFang2);
    });
    
    upgradeVampireFang2.addEventListener("click", () => {
        const fang = player.inventory.find(w => w.constructor && w.constructor.name === "VampireFang");
        if (fang) fang.level = 3;
        console.log("Upgraded Vampire Fang to Level 3!");
        buttons = buttons.filter(b => b !== upgradeVampireFang2);
        buttons.push(upgradeVampireFang3);
    });
    
    upgradeVampireFang3.addEventListener("click", () => {
        const fang = player.inventory.find(w => w.constructor && w.constructor.name === "VampireFang");
        if (fang) fang.level = 4;
        console.log("Upgraded Vampire Fang to Level 4!");
        buttons = buttons.filter(b => b !== upgradeVampireFang3);
        buttons.push(upgradeVampireFang4);
    });
    
    upgradeVampireFang4.addEventListener("click", () => {
        const fang = player.inventory.find(w => w.constructor && w.constructor.name === "VampireFang");
        if (fang) fang.level = 5;
        console.log("Upgraded Vampire Fang to Level 5!");
        buttons = buttons.filter(b => b !== upgradeVampireFang4);
        buttons.push(upgradeVampireFang5);
    });
    
    upgradeVampireFang5.addEventListener("click", () => {
        const fang = player.inventory.find(w => w.constructor && w.constructor.name === "VampireFang");
        if (fang) fang.level = 6;
        console.log("Upgraded Vampire Fang to Level 6!");
        buttons = buttons.filter(b => b !== upgradeVampireFang5);
        buttons.push(upgradeVampireFang6);
    });
    
    upgradeVampireFang6.addEventListener("click", () => {
        const fang = player.inventory.find(w => w.constructor && w.constructor.name === "VampireFang");
        if (fang) fang.level = 7;
        console.log("Upgraded Vampire Fang to Level 7!");
        buttons = buttons.filter(b => b !== upgradeVampireFang6);
        buttons.push(upgradeVampireFang7);
    });
    
    upgradeVampireFang7.addEventListener("click", () => {
        const fang = player.inventory.find(w => w.constructor && w.constructor.name === "VampireFang");
        if (fang) fang.level = 8;
        console.log("Upgraded Vampire Fang to Level 8!");
        buttons = buttons.filter(b => b !== upgradeVampireFang7);
        buttons.push(upgradeVampireFang8);
    });
    
    upgradeVampireFang8.addEventListener("click", () => {
        const fang = player.inventory.find(w => w.constructor && w.constructor.name === "VampireFang");
        if (fang) fang.level = 9;
        console.log("Upgraded Vampire Fang to Level 9! (MAX)");
        buttons = buttons.filter(b => b !== upgradeVampireFang8);
        buttons.push(upgradeVampireFang9);
    });
};