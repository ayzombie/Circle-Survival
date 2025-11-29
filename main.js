import { Player } from "./player.js";
import { Shard } from "./enemy.js";
import { BloodEye } from "./enemy.js";
import { BloodTurret } from "./enemy.js";
import { Ram } from "./enemy.js";
import { BloodThrall } from "./enemy.js";
import { Boss1 } from "./enemy.js";
import { Ammo } from "./ammo.js";
import { MagicWand } from "./weapons.js";
import { HolyWand } from "./weapons.js";
import { FireWand } from "./weapons.js";
import { ShockWave } from "./weapons.js";
import { FrostStaff } from "./weapons.js";
import { OrbitBlade } from "./weapons.js";
import { LavaEruption } from "./weapons.js";
import { VampireFang } from "./weapons.js";
import { BloodLeach } from "./weapons.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const player = new Player(canvas.width / 2, canvas.height / 2);
const levelUpMenu = document.getElementById("levelUpMenu");
const resetBtn = document.getElementById("resetBtn");
resetBtn.style.display = "flex";
resetBtn.style.display = "none";
levelUpMenu.style.display = "flex";
levelUpMenu.style.display = "none"
//Unlocked Variables
let unlockedVampireFang = true;
let unlockedVampireCloak = false;


//#region buttons
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
// === Blood Leach ===
const buyBloodLeach = document.getElementById("buyBloodLeach");
const upgradeBloodLeach1 = document.getElementById("upgradeBloodLeach1");
const upgradeBloodLeach2 = document.getElementById("upgradeBloodLeach2");
const upgradeBloodLeach3 = document.getElementById("upgradeBloodLeach3");
const upgradeBloodLeach4 = document.getElementById("upgradeBloodLeach4");
const upgradeBloodLeach5 = document.getElementById("upgradeBloodLeach5");
const upgradeBloodLeach6 = document.getElementById("upgradeBloodLeach6");
const upgradeBloodLeach7 = document.getElementById("upgradeBloodLeach7");
const upgradeBloodLeach8 = document.getElementById("upgradeBloodLeach8");
const upgradeBloodLeach9 = document.getElementById("upgradeBloodLeach9");
//#endregion

let buttons = [
    buyMagicWand,
    upgradeMagicWand,
    upgradeMagicWand2,
    upgradeMagicWand3,
    upgradeMagicWand4,
    upgradeMagicWand5,
    upgradeMagicWand6,
    upgradeMagicWand7,
    upgradeMagicWand8,
    buyHolyWand,
    upgradeHolyWand1,
    upgradeHolyWand2,
    upgradeHolyWand3,
    upgradeHolyWand4,
    upgradeHolyWand5,
    upgradeHolyWand6,
    upgradeHolyWand7,
    upgradeHolyWand8,
    upgradeHolyWand9,
    buyFireWand,
    upgradeFireWand1,
    upgradeFireWand2,
    upgradeFireWand3,
    upgradeFireWand4,
    upgradeFireWand5,
    upgradeFireWand6,
    upgradeFireWand7,
    upgradeFireWand8,
    buyShockWave,
    upgradeShockWave1,
    upgradeShockWave2,
    upgradeShockWave3,
    upgradeShockWave4,
    upgradeShockWave5,
    upgradeShockWave6,
    upgradeShockWave7,
    upgradeShockWave8,
    buyFrostStaff,
    upgradeFrostStaff1,
    upgradeFrostStaff2,
    upgradeFrostStaff3,
    upgradeFrostStaff4,
    upgradeFrostStaff5,
    upgradeFrostStaff6,
    upgradeFrostStaff7,
    upgradeFrostStaff8,
    buyOrbitBlade,
    upgradeOrbitBlade1,
    upgradeOrbitBlade2,
    upgradeOrbitBlade3,
    upgradeOrbitBlade4,
    upgradeOrbitBlade5,
    upgradeOrbitBlade6,
    upgradeOrbitBlade7,
    upgradeOrbitBlade8,
    buyLavaEruption,
    upgradeLavaEruption1,
    upgradeLavaEruption2,
    upgradeLavaEruption3,
    upgradeLavaEruption4,
    upgradeLavaEruption5,
    upgradeLavaEruption6,
    upgradeLavaEruption7,
    upgradeLavaEruption8,
    buyVampireFang,
    upgradeVampireFang1,
    upgradeVampireFang2,
    upgradeVampireFang3,
    upgradeVampireFang4,
    upgradeVampireFang5,
    upgradeVampireFang6,
    upgradeVampireFang7,
    upgradeVampireFang8,
    buySpinach,
    upgradeSpinach1,
    upgradeSpinach2,
    upgradeSpinach3,
    upgradeSpinach4,
    buyMagnet,
    upgradeMagnet1,
    upgradeMagnet2,
    upgradeMagnet3,
    upgradeMagnet4,
    buyXpMulti,
    upgradeXpMulti1,
    upgradeXpMulti2,
    upgradeXpMulti3,
    upgradeXpMulti4,
    buyBloodLeach,
    upgradeBloodLeach1,
    upgradeBloodLeach2,
    upgradeBloodLeach3,
    upgradeBloodLeach4,
    upgradeBloodLeach5,
    upgradeBloodLeach6,
    upgradeBloodLeach7,
    upgradeBloodLeach8,
    upgradeBloodLeach9
]; 

function loadButtons() {
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
    });

    buyBloodLeach.addEventListener("click", () => {
        if (!player.inventory.some(w => w.constructor && w.constructor.name === "BloodLeach")) {
            player.inventory.push(new BloodLeach(player));
            console.log("Bought Blood Leach!");
            buttons = buttons.filter(b => b !== buyBloodLeach);
            buttons.push(upgradeBloodLeach1);
        }
    });

    upgradeBloodLeach1.addEventListener("click", () => {
        const leach = player.inventory.find(w => w.constructor && w.constructor.name === "BloodLeach");
        if (leach) leach.level = 2;
        console.log("Upgraded Blood Leach to Level 2!");
        buttons = buttons.filter(b => b !== upgradeBloodLeach1);
        buttons.push(upgradeBloodLeach2);
    });

    upgradeBloodLeach2.addEventListener("click", () => {
        const leach = player.inventory.find(w => w.constructor && w.constructor.name === "BloodLeach");
        if (leach) leach.level = 3;
        console.log("Upgraded Blood Leach to Level 3!");
        buttons = buttons.filter(b => b !== upgradeBloodLeach2);
        buttons.push(upgradeBloodLeach3);
    });

    upgradeBloodLeach3.addEventListener("click", () => {
        const leach = player.inventory.find(w => w.constructor && w.constructor.name === "BloodLeach");
        if (leach) leach.level = 4;
        console.log("Upgraded Blood Leach to Level 4!");
        buttons = buttons.filter(b => b !== upgradeBloodLeach3);
        buttons.push(upgradeBloodLeach4);
    });

    upgradeBloodLeach4.addEventListener("click", () => {
        const leach = player.inventory.find(w => w.constructor && w.constructor.name === "BloodLeach");
        if (leach) leach.level = 5;
        console.log("Upgraded Blood Leach to Level 5!");
        buttons = buttons.filter(b => b !== upgradeBloodLeach4);
        buttons.push(upgradeBloodLeach5);
    });

    upgradeBloodLeach5.addEventListener("click", () => {
        const leach = player.inventory.find(w => w.constructor && w.constructor.name === "BloodLeach");
        if (leach) leach.level = 6;
        console.log("Upgraded Blood Leach to Level 6!");
        buttons = buttons.filter(b => b !== upgradeBloodLeach5);
        buttons.push(upgradeBloodLeach6);
    });

    upgradeBloodLeach6.addEventListener("click", () => {
        const leach = player.inventory.find(w => w.constructor && w.constructor.name === "BloodLeach");
        if (leach) leach.level = 7;
        console.log("Upgraded Blood Leach to Level 7!");
        buttons = buttons.filter(b => b !== upgradeBloodLeach6);
        buttons.push(upgradeBloodLeach7);
    });

    upgradeBloodLeach7.addEventListener("click", () => {
        const leach = player.inventory.find(w => w.constructor && w.constructor.name === "BloodLeach");
        if (leach) leach.level = 8;
        console.log("Upgraded Blood Leach to Level 8!");
        buttons = buttons.filter(b => b !== upgradeBloodLeach7);
        buttons.push(upgradeBloodLeach8);
    });

    upgradeBloodLeach8.addEventListener("click", () => {
        const leach = player.inventory.find(w => w.constructor && w.constructor.name === "BloodLeach");
        if (leach) leach.level = 9;
        console.log("Upgraded Blood Leach to Level 9!");
        buttons = buttons.filter(b => b !== upgradeBloodLeach8);
        buttons.push(upgradeBloodLeach9);
    });

    upgradeBloodLeach9.addEventListener("click", () => {
        const leach = player.inventory.find(w => w.constructor && w.constructor.name === "BloodLeach");
        if (leach) leach.level = 10;
        console.log("Upgraded Blood Leach to Level 10! (MAX)");
        buttons = buttons.filter(b => b !== upgradeBloodLeach9);
        // No further upgrades, keep as end-point.
    });
};

loadButtons();




function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
let timeOfDay = 0.5;
let thisDayLen = 40000 + Math.random() * 40000;
// thisDayLen = 10000;
let weatherState = "day";
let isDay = true;
let nextWeatherEvent = "";
let lastWeatherEvent = "";
let nextWeatherTime = 10000;
let choosedNextWeather = false;
let weatherMulti = 1;

let dayEvents = ["day"];
let nightEvents = [ "bloodmoon", "night"];
const moonCraters = [];
const enemies = [];
const ammos = [];
let drops = [];
const doors = [];
const keys = { e: false };
let showDoors = false;
let paused = false;
let pausedGame = false;
let lastTime = performance.now();
let timer = 0;
let alpha = 0;
let lastPlayerHealth = player.health;
let level = 0;
let size = 20;  
let thisLevelWaves = 0;
let wavesCompleted = 0;
let thisWaveEnemies = 0;
let waveComplete = false;
let levelComplete = false;
let thisLevelHealthMin = 0;
let thisLevelHealthMax = 0;
let drawWeapons = true;
let waveLabelAlpha = 0;
let waveLabelText = "";
let waveLabelTimer = 0;
let bossLabelAlpha = 0;
let bossLabelText = "";
let bossLabelTimer = 0;
let bossPulse = 0;
let showInteractPrompt = false;
let currentDoorInfo = null;
let doorClosest = null;
let showCutscene = false;
let curItem = null;

window.addEventListener("keydown", e => {
    const k = e.key.toLowerCase();
    if (keys.hasOwnProperty(k)) keys[k] = true;
});
window.addEventListener("keyup", e => {
    const k = e.key.toLowerCase();
    if (keys.hasOwnProperty(k)) keys[k] = false;
});

const levels = {
    start: {
        id: "start",
        path: "neutral",
        waves: 2,
        enemiesPerWave: 4, //4
        enemyHealth: 3,
        enemyStrength: 1,
        enemyTypes: {
            Shard: { cls: Shard, weight: 100 },
        },
        next: {
            up: "blood1",
            right: "combat1",
            down: "machinery1",
            left: "peace1"
        }
    },
    blood1: {
        id: "blood1",
        path: "blood",
        info: "Blood, the power flows through me...",
        waves: 2,
        enemiesPerWave: 5,
        enemyHealth: 5,
        enemyStrength: 3,
        enemyTypes: {
            Shard: { cls: Shard, weight: 95 },
            BloodEye: { cls: BloodEye, weight: 5 },
        },
        // unlocks: "VampireFang",
        next: { up: "blood2"}
    },
    blood2: {
        id: "blood2",
        path: "blood",
        info: "...",
        waves: 2,
        enemiesPerWave: 9,
        enemyHealth: 6,
        enemyStrength: 3,
        enemyTypes: {
            Shard: { cls: Shard, weight: 90 },
            BloodEye: { cls: BloodEye, weight: 10 },
        },
        next: { up: "blood3"}
    },
    blood3: {
        id: "blood3",
        path: "blood",
        info: "The army, it's coming...",
        waves: 3,
        enemiesPerWave: 12,
        enemyHealth: 8,
        enemyStrength: 4,
        enemyTypes: {
            Shard: { cls: Shard, weight: 85 },
            BloodEye: { cls: BloodEye, weight: 15 },
        },
        next: { up: "blood4"}
    },
    blood4: {
        id: "blood4",
        path: "blood",
        info: "We survived... for now.",
        waves: 2,
        enemiesPerWave: 30,
        enemyHealth: 9,
        enemyStrength: 5,
        enemyTypes: {
            Shard: { cls: Shard, weight: 80 },
            BloodEye: { cls: BloodEye, weight: 20 },
        },
        next: { up: "blood5"}
    },
    blood5: {
        id: "blood5",
        path: "blood",
        info: "The power, it's getting stronger.",
        waves: 3,
        enemiesPerWave: 15,
        enemyHealth: 10,
        enemyStrength: 5,
        enemyTypes: {
            Shard: { cls: Shard, weight: 70 },
            BloodEye: { cls: BloodEye, weight: 30 },
        },
        next: { up: "blood6" }
    },
    blood6: {
        id: "blood6",
        path: "blood",
        info: "...",
        waves: 4,
        enemiesPerWave: 15,
        enemyHealth: 12,
        enemyStrength: 6,
        enemyTypes: {
            Shard: { cls: Shard, weight: 45 },
            BloodEye: { cls: BloodEye, weight: 50 },
            BloodTurret: { cls: BloodTurret, weight: 5 }
        },
        next: { up: "blood7" }
    },
    blood7: {
        id: "blood7",
        path: "blood",
        info: "...",
        waves: 4,
        enemiesPerWave: 20,
        enemyHealth: 13,
        enemyStrength: 6,
        enemyTypes: {
            Shard: { cls: Shard, weight: 30 },
            BloodEye: { cls: BloodEye, weight: 65 },
            BloodTurret: { cls: BloodTurret, weight: 5 }
        },
        next: { up: "blood8" }
    },
    blood8: {
        id: "blood8",
        path: "blood",
        info: "They just won't stop!",
        waves: 4,
        enemiesPerWave: 20,
        enemyHealth: 15,
        enemyStrength: 6.5,
        enemyTypes: {
            Shard: { cls: Shard, weight: 10 },
            BloodEye: { cls: BloodEye, weight: 90 },
        },
        next: { up: "blood9" }
    },
    blood9: {
        id: "blood9",
        path: "blood",
        info: "I sense danger...",
        waves: 20,
        enemiesPerWave: 5,
        enemyHealth: 16,
        enemyStrength: 7,
        enemyTypes: {
            Shard: { cls: Shard, weight: 70 },
            BloodEye: { cls: BloodEye, weight: 20 },
            BloodTurret: { cls: BloodTurret, weight: 10 }
        },
        next: { up: "blood10" }
    },
    blood10: {
        id: "blood10",
        path: "blood",
        info: "The awakening...",
        waves: 6,
        bosses: 1,
        enemiesPerWave: 25,
        enemyHealth: 20,
        enemyStrength: 10,
        enemyTypes: {
            Shard: { cls: Shard, weight: 50 },
            BloodEye: { cls: BloodEye, weight: 50 },
        },
        // unlocks: "VampireCloak",
        next: { up: "blood11" }
    },
    blood11: {
        id: "blood11",
        path: "blood",
        info: "The forshadow...",
        waves: 7,
        enemiesPerWave: 20,
        enemyHealth: 21,
        enemyStrength: 7,
        enemyTypes: {
            Shard: { cls: Shard, weight: 30 },
            BloodEye: { cls: BloodEye, weight: 50 },
            BloodTurret: { cls: BloodTurret, weight: 20 }
        },
        next: { up: "blood12" }
    },
    blood12: {
        id: "blood12",
        path: "blood",
        info: "...",
        waves: 7,
        enemiesPerWave: 23,
        enemyHealth: 23,
        enemyStrength: 7.5,
        enemyTypes: {
            Shard: { cls: Shard, weight: 15 },
            BloodEye: { cls: BloodEye, weight: 60 },
            BloodTurret: { cls: BloodTurret, weight: 25 }
        },
        next: { up: "blood13" }
    },
    blood13: {
        id: "blood13",
        path: "blood",
        info: "Their swords are sharper, I grow weaker...",
        waves: 7,
        enemiesPerWave: 25,
        enemyHealth: 25,
        enemyStrength: 7.5,
        enemyTypes: {
            BloodTurret: { cls: BloodTurret, weight: 100 }
        },
        next: { up: "blood14" }
    },
    blood14: {
        id: "blood14",
        path: "blood",
        waves: 7,
        enemiesPerWave: 27,
        enemyHealth: 27,
        enemyStrength: 10,
        enemyTypes: {
            Shard: { cls: Shard, weight: 5 },
            BloodEye: { cls: BloodEye, weight: 45 },
            BloodTurret: { cls: BloodTurret, weight: 50 }
        },
        next: { up: "blood15" }
    },
    blood15: {
        id: "blood15",
        path: "blood",
        info: "I grow weaker...",
        waves: 7,
        bosses: 1,
        enemiesPerWave: 30,
        enemyHealth: 28,
        enemyStrength: 12,
        enemyTypes: {
            BloodEye: { cls: BloodEye, weight: 95 },
            Ram: { cls: Ram, weight: 5 }
        },
        next: { up: "blood16" }
    },
    blood16: {
        id: "blood16",
        path: "blood",
        info: "I grow weaker and weaker...",
        waves: 7,
        enemiesPerWave: 32,
        enemyHealth: 30,
        enemyStrength: 15,
        enemyTypes: {
            Shard: { cls: Shard, weight: 10 },
            BloodEye: { cls: BloodEye, weight: 30 },
            BloodTurret: { cls: BloodTurret, weight: 30 },
            Ram: { cls: Ram, weight: 30 }
        },
        next: { up: "blood17" }
    },
    blood17: {
        id: "blood17",
        path: "blood",
        info: "Recovery...",
        waves: 8,
        enemiesPerWave: 32,
        enemyHealth: 30,
        enemyStrength: 10,
        enemyTypes: {
            Shard: { cls: Shard, weight: 10 },
            BloodEye: { cls: BloodEye, weight: 30 },
            BloodTurret: { cls: BloodTurret, weight: 20 },
            Ram: { cls: Ram, weight: 30 },
            BloodThrall: { cls: BloodThrall, weight: 10 },
        },
        next: { up: "blood18" }
    },
    blood18: {
        id: "blood18",
        path: "blood",
        info: "...",
        waves: 9,
        enemiesPerWave: 33,
        enemyHealth: 30,
        enemyStrength: 9,
        enemyTypes: {
            BloodTurret: { cls: BloodTurret, weight: 30 },
            Ram: { cls: Ram, weight: 50 },
            BloodThrall: { cls: BloodThrall, weight: 20 },
        },
        next: { up: "blood19" }
    },
    blood19: {
        id: "blood19",
        path: "blood",
        info: "Blood... I sense blood...",
        waves: 9,
        bosses: 1,
        enemiesPerWave: 34,
        enemyHealth: 32,
        enemyStrength: 9.5,
        enemyTypes: {
            BloodTurret: { cls: BloodTurret, weight: 30 },
            Ram: { cls: Ram, weight: 40 },
            BloodThrall: { cls: BloodThrall, weight: 30 },
        },
        next: { up: "blood20" }
    },
    blood20: {
        id: "blood20",
        path: "blood",
        info: "...",
        waves: 10,
        enemiesPerWave: 35,     //TODO: unlock vampire fang
        enemyHealth: 33,
        enemyStrength: 9.4,
        bosses: 2,
        enemyTypes: {
            BloodTurret: { cls: BloodTurret, weight: 50 },
            BloodThrall: { cls: BloodThrall, weight: 50 },
        },
        next: { up: "blood21" }
    },
    blood21: {
        id: "blood21",
        path: "blood",
        info: "I hunger...",
        waves: 10,
        enemiesPerWave: 36,
        enemyHealth: 34,
        enemyStrength: 9.6,
        enemyTypes: {
            BloodEye: { cls: BloodEye, weight: 20 },
            BloodTurret: { cls: BloodTurret, weight: 20 },
            Ram: { cls: Ram, weight: 40 },
            BloodThrall: { cls: BloodThrall, weight: 20 },
        },
        next: { up: "blood22" }
    },
    blood22: {
        id: "blood22",
        path: "blood",
        info: "...",
        waves: 10,
        enemiesPerWave: 37,
        enemyHealth: 35,
        enemyStrength: 10,
        enemyTypes: {
            Shard: { cls: Shard, weight: 50 },
            BloodThrall: { cls: BloodThrall, weight: 50 },
        },
        next: { up: "blood23" }
    },
    blood23: {
        id: "blood23",
        path: "blood",
        info: "They grow stronger... More massive...",
        waves: 6,
        bosses: 1,
        enemiesPerWave: 60,
        enemyHealth: 30,
        enemyStrength: 12,
        enemyTypes: {
            BloodEye: { cls: BloodEye, weight: 50 },
            BloodThrall: { cls: BloodThrall, weight: 50 },
        },
        next: { up: "blood24" }
    },
    blood24: {
        id: "blood24",
        path: "blood",
        info: "The End?",
        waves: 7,
        enemiesPerWave: 55,
        enemyHealth: 35,
        enemyStrength: 13.5,
        enemyTypes: {
            Shard: { cls: Shard, weight: 100}
        },
        next: { up: "blood25" }
    },
    blood25: {
        id: "blood25",
        path: "blood",
        info: "???",
        waves: 12,
        bosses: 4,
        enemiesPerWave: 30,
        enemyHealth: 40,
        enemyStrength: 15,
        enemyTypes: {
            Shard: { cls: Shard, weight: 10 },
            BloodEye: { cls: BloodEye, weight: 10 },
            BloodTurret: { cls: BloodTurret, weight: 25 },
            Ram: { cls: Ram, weight: 25 },
            BloodThrall: { cls: BloodThrall, weight: 30 },
        },
        next: {}
    },
    combat1: {
        id: "combat1",
        path: "combat",
        info: "Make yourself stronger...",
        waves: 3,
        enemiesPerWave: 5,
        enemyHealth: 5,
        enemyStrength: 10,
        enemyTypes: {
            Shard: { cls: Shard, weight: 90 },
        },
        next: { right: "combat2" }
    },
    combat2: {
        id: "combat2",
        path: "combat",
        info: "Enemies grow confident.",
        waves: 3,
        enemiesPerWave: 6,
        enemyHealth: 6,
        enemyStrength: 10.5,
        next: { right: "combat3" }
    },
    combat3: {
        id: "combat3",
        path: "combat",
        info: "...",
        waves: 4,
        enemiesPerWave: 7,
        enemyHealth: 7,
        enemyStrength: 11,
        next: { right: "combat4" }
    },
    combat4: {
        id: "combat4",
        path: "combat",
        info: "They're starting to coordinate.",
        waves: 4,
        enemiesPerWave: 8,
        enemyHealth: 8,
        enemyStrength: 11.5,
        next: { right: "combat5" }
    },
    combat5: {
        id: "combat5",
        path: "combat",
        info: "...",
        waves: 5,
        enemiesPerWave: 9,
        enemyHealth: 9,
        enemyStrength: 12,
        bosses: 1,
        next: { right: "combat6" }
    },
    combat6: {
        id: "combat6",
        path: "combat",
        info: "Something is happening...",
        waves: 5,
        enemiesPerWave: 11,
        enemyHealth: 11,
        enemyStrength: 12.5,
        next: { right: "combat7" }
    },
    combat7: {
        id: "combat7",
        path: "combat",
        info: "The Shrapenel",
        waves: 5,
        enemiesPerWave: 12,
        enemyHealth: 12,
        enemyStrength: 13,
        next: { right: "combat8" }
    },
    combat8: {
        id: "combat8",
        path: "combat",
        info: "Your reflexes are tested.",
        waves: 6,
        enemiesPerWave: 13,
        enemyHealth: 13,
        enemyStrength: 13.5,
        next: { right: "combat9" }
    },
    combat9: {
        id: "combat9",
        path: "combat",
        info: "Tactics",
        waves: 6,
        enemiesPerWave: 15,
        enemyHealth: 14,
        enemyStrength: 14,
        next: { right: "combat10" }
    },
    combat10: {
        id: "combat10",
        path: "combat",
        info: "Something is coming...",
        waves: 7,
        enemiesPerWave: 16,
        enemyHealth: 15,
        enemyStrength: 14.5,
        bosses: 2,
        next: { right: "combat11" }
    },
    combat11: {
        id: "combat11",
        path: "combat",
        info: "They come in waves.",
        waves: 7,
        enemiesPerWave: 18,
        enemyHealth: 16,
        enemyStrength: 15,
        next: { right: "combat12" }
    },
    combat12: {
        id: "combat12",
        path: "combat",
        info: "Endurance",
        waves: 7,
        enemiesPerWave: 20,
        enemyHealth: 17,
        enemyStrength: 15.5,
        next: { right: "combat13" }
    },
    combat13: {
        id: "combat13",
        path: "combat",
        info: "The arena shakes with conflict.",
        waves: 16,
        enemiesPerWave: 11,
        enemyHealth: 18,
        enemyStrength: 16,
        next: { right: "combat14" }
    },
    combat14: {
        id: "combat14",
        path: "combat",
        info: "They refuse to rest.",
        waves: 9,
        enemiesPerWave: 20,
        enemyHealth: 19,
        enemyStrength: 16.5,
        next: { right: "combat15" }
    },
    combat15: {
        id: "combat15",
        path: "combat",
        info: "A powerful lieutenant appears soon.",
        waves: 3,
        enemiesPerWave: 30,
        enemyHealth: 45,
        enemyStrength: 25,
        bosses: 3,
        next: { right: "combat16" }
    },
    combat16: {
        id: "combat16",
        path: "combat",
        info: "Your strength is undeniable.",
        waves: 9,
        enemiesPerWave: 28,
        enemyHealth: 22,
        enemyStrength: 18,
        next: { right: "combat17" }
    },
    combat17: {
        id: "combat17",
        path: "combat",
        info: "The air feels heavy…",
        waves: 9,
        enemiesPerWave: 30,
        enemyHealth: 23,
        enemyStrength: 18,
        next: { right: "combat18" }
    },
    combat18: {
        id: "combat18",
        path: "combat",
        info: "Many fall, but many more rise.",
        waves: 9,
        enemiesPerWave: 32,
        enemyHealth: 25,
        enemyStrength: 18.5,
        next: { right: "combat19" }
    },
    combat19: {
        id: "combat19",
        path: "combat",
        info: "Only the determined survive.",
        waves: 10,
        enemiesPerWave: 35,
        enemyHealth: 27,
        enemyStrength: 19,
        next: { right: "combat20" }
    },
    combat20: {
        id: "combat20",
        path: "combat",
        info: "...",
        waves: 10,
        enemiesPerWave: 38,
        enemyHealth: 29,
        enemyStrength: 20,
        bosses: 4,
        next: { right: "combat21" }
    },
    combat21: {
        id: "combat21",
        path: "combat",
        info: "A commander watches you.",
        waves: 10,
        enemiesPerWave: 40,
        enemyHealth: 30,
        enemyStrength: 21,
        next: { right: "combat22" }
    },
    combat22: {
        id: "combat22",
        path: "combat",
        info: "The battlefield grows chaotic.",
        waves: 11,
        enemiesPerWave: 42,
        enemyHealth: 32,
        enemyStrength: 22,
        next: { right: "combat23" }
    },
    combat23: {
        id: "combat23",
        path: "combat",
        info: "One final push.",
        waves: 11,
        enemiesPerWave: 45,
        enemyHealth: 33,
        enemyStrength: 23,
        next: { right: "combat24" }
    },
    combat24: {
        id: "combat24",
        path: "combat",
        info: "The enemy prepares their champion.",
        waves: 12,
        enemiesPerWave: 48,
        enemyHealth: 35,
        enemyStrength: 24,
        next: { right: "combat25" }
    },
    combat25: {
        id: "combat25",
        path: "combat",
        info: "???",
        waves: 12,
        enemiesPerWave: 50,
        enemyHealth: 40,
        enemyStrength: 25,
        boss: 5,
        next: {}
    },
    peace1: {
        id: "peace1",
        path: "peace",
        info: "Quiet surrounds you...",
        waves: 2,
        enemiesPerWave: 4,
        enemyHealth: 4,
        enemyStrength: 1,
        enemyTypes: {
            Shard: { cls: Shard, weight: 90 },
        },
        next: { left: "peace2" }
    },
    peace2: {
        id: "peace2",
        path: "peace",
        info: "Gentle spirits appear.",
        waves: 2,
        enemiesPerWave: 5,
        enemyHealth: 5,
        enemyStrength: 1,
        next: { left: "peace3" }
    },
    peace3: {
        id: "peace3",
        path: "peace",
        info: "...",
        waves: 3,
        enemiesPerWave: 6,
        enemyHealth: 6,
        enemyStrength: 1.3,
        next: { left: "peace4" }
    },
    peace4: {
        id: "peace4",
        path: "peace",
        info: "Their whispers echo.",
        waves: 3,
        enemiesPerWave: 10,
        enemyHealth: 7,
        enemyStrength: 1.5,
        next: { left: "peace5" }
    },
    peace5: {
        id: "peace5",
        path: "peace",
        info: "Calm illusions gather.",
        waves: 4,
        enemiesPerWave: 15,
        enemyHealth: 8,
        enemyStrength: 2,
        next: { left: "peace6" }
    },
    peace6: {
        id: "peace6",
        path: "peace",
        info: "Peace is deceptive...",
        waves: 4,
        enemiesPerWave: 9,
        enemyHealth: 10,
        enemyStrength: 2.2,
        next: { left: "peace7" }
    },
    peace7: {
        id: "peace7",
        path: "peace",
        info: "...",
        waves: 4,
        enemiesPerWave: 10,
        enemyHealth: 11,
        enemyStrength: 2.5,
        next: { left: "peace8" }
    },
    peace8: {
        id: "peace8",
        path: "peace",
        info: "Shimmering forms sway.",
        waves: 4,
        enemiesPerWave: 12,
        enemyHealth: 12,
        enemyStrength: 2.6,
        next: { left: "peace9" }
    },
    peace9: {
        id: "peace9",
        path: "peace",
        info: "Their presence deepens.",
        waves: 5,
        enemiesPerWave: 12,
        enemyHealth: 13,
        enemyStrength: 2.7,
        next: { left: "peace10" }
    },
    peace10: {
        id: "peace10",
        path: "peace",
        info: "...",
        waves: 5,
        enemiesPerWave: 14,
        enemyHealth: 15,
        enemyStrength: 3,
        bosses: 1,
        next: { left: "peace11" }
    },
    peace11: {
        id: "peace11",
        path: "peace",
        info: "Harmony strains…",
        waves: 5,
        enemiesPerWave: 14,
        enemyHealth: 16,
        enemyStrength: 3,
        next: { left: "peace12" }
    },
    peace12: {
        id: "peace12",
        path: "peace",
        info: "...",
        waves: 6,
        enemiesPerWave: 15,
        enemyHealth: 17,
        enemyStrength: 3.2,
        next: { left: "peace13" }
    },
    peace13: {
        id: "peace13",
        path: "peace",
        info: "A hush falls.",
        waves: 6,
        enemiesPerWave: 15,
        enemyHealth: 18,
        enemyStrength: 3.3,
        next: { left: "peace14" }
    },
    peace14: {
        id: "peace14",
        path: "peace",
        info: "A silent guardian approaches.",
        waves: 6,
        enemiesPerWave: 17,
        enemyHealth: 19,
        enemyStrength: 3.5,
        next: { left: "peace15" }
    },
    peace15: {
        id: "peace15",
        path: "peace",
        info: "You won, but at what cost?",
        waves: 3,
        enemiesPerWave: 20,
        enemyHealth: 30,
        enemyStrength: 5,
        bosses: 1,
        next: { left: "peace16" }
    },
    peace16: {
        id: "peace16",
        path: "peace",
        info: "Balance shifts...",
        waves: 7,
        enemiesPerWave: 18,
        enemyHealth: 20,
        enemyStrength: 4,
        next: { left: "peace17" }
    },
    peace17: {
        id: "peace17",
        path: "peace",
        info: "Echoes ripple.",
        waves: 7,
        enemiesPerWave: 19,
        enemyHealth: 21,
        enemyStrength: 4.1,
        next: { left: "peace18" }
    },
    peace18: {
        id: "peace18",
        path: "peace",
        info: "Stillness breaks…",
        waves: 7,
        enemiesPerWave: 20,
        enemyHealth: 23,
        enemyStrength: 4.2,
        next: { left: "peace19" }
    },
    peace19: {
        id: "peace19",
        path: "peace",
        info: "Harmony destabilizes.",
        waves: 8,
        enemiesPerWave: 22,
        enemyHealth: 24,
        enemyStrength: 4.5,
        bosses: 1,
        next: { left: "peace20" }
    },
    peace20: {
        id: "peace20",
        path: "peace",
        info: "...",
        waves: 8,
        enemiesPerWave: 22,
        enemyHealth: 25,
        enemyStrength: 4.7,
        bosses: 3,
        next: { left: "peace21" }
    },
    peace21: {
        id: "peace21",
        path: "peace",
        info: "help...",
        waves: 9,
        enemiesPerWave: 24,
        enemyHealth: 26,
        enemyStrength: 5,
        next: { left: "peace22" }
    },
    peace22: {
        id: "peace22",
        path: "peace",
        info: "Order and Chaos blend together...",
        waves: 9,
        enemiesPerWave: 26,
        enemyHealth: 28,
        enemyStrength: 5.2,
        next: { left: "peace23" }
    },
    peace23: {
        id: "peace23",
        path: "peace",
        info: "A serene giant awakens.",
        waves: 6,
        bosses: 2,
        enemiesPerWave: 35,
        enemyHealth: 30,
        enemyStrength: 6,
        next: { left: "peace24" }
    },
    peace24: {
        id: "peace24",
        path: "peace",
        info: "the final attack-",
        waves: 7,
        enemiesPerWave: 50,
        enemyHealth: 32,
        enemyStrength: 6.5,
        next: { left: "peace25" }
    },
    peace25: {
        id: "peace25",
        path: "peace",
        info: "???",
        waves: 2,
        bosses: 4,
        enemiesPerWave: 250,
        enemyHealth: 10,
        enemyStrength: 0.5,
        next: {},
    },
    machinery1: {
        id: "machinery1",
        path: "machinery",
        info: "You hear metal ticking...",
        waves: 2,
        enemiesPerWave: 5,
        enemyHealth: 4,
        enemyStrength: 4,
        next: { down: "machinery2" }
    },
    machinery2: {
        id: "machinery2",
        path: "machinery",
        info: "Small gears roll toward you.",
        waves: 2,
        enemiesPerWave: 6,
        enemyHealth: 5,
        enemyStrength: 4.2,
        next: { down: "machinery3" }
    },
    machinery3: {
        id: "machinery3",
        path: "machinery",
        info: "...",
        waves: 3,
        enemiesPerWave: 7,
        enemyHealth: 6,
        enemyStrength: 4.5,
        next: { down: "machinery4" }
    },
    machinery4: {
        id: "machinery4",
        path: "machinery",
        info: "Hinges rattle.",
        waves: 3,
        enemiesPerWave: 8,
        enemyHealth: 7,
        enemyStrength: 4.7,
        next: { down: "machinery5" }
    },
    machinery5: {
        id: "machinery5",
        path: "machinery",
        info: "Loose bolts scatter.",
        waves: 4,
        enemiesPerWave: 9,
        enemyHealth: 8,
        enemyStrength: 5,
        next: { down: "machinery6" }
    },
    machinery6: {
        id: "machinery6",
        path: "machinery",
        info: "Something hums…",
        waves: 4,
        enemiesPerWave: 10,
        enemyHealth: 10,
        enemyStrength: 5.5,
        next: { down: "machinery7" }
    },
    machinery7: {
        id: "machinery7",
        path: "machinery",
        waves: 4,
        info: "...",
        enemiesPerWave: 11,
        enemyHealth: 11,
        enemyStrength: 6,
        next: { down: "machinery8" }
    },
    machinery8: {
        id: "machinery8",
        path: "machinery",
        info: "Gears begin turning faster.",
        waves: 5,
        enemiesPerWave: 12,
        enemyHealth: 12,
        enemyStrength: 6.3,
        next: { down: "machinery9" }
    },
    machinery9: {
        id: "machinery9",
        path: "machinery",
        info: "Pressure rises.",
        waves: 5,
        enemiesPerWave: 13,
        enemyHealth: 13,
        enemyStrength: 6.5,
        next: { down: "machinery10" }
    },
    machinery10: {
        id: "machinery10",
        path: "machinery",
        info: "..?",
        waves: 5,
        enemiesPerWave: 15,
        enemyHealth: 14,
        enemyStrength: 7,
        bosses: 1,
        next: { down: "machinery11" }
    },
    machinery11: {
        id: "machinery11",
        path: "machinery",
        info: "ArgaRgArgdsfa?#.1",
        waves: 6,
        enemiesPerWave: 15,
        enemyHealth: 15,
        enemyStrength: 7.2,
        next: { down: "machinery12" }
    },
    machinery12: {
        id: "machinery12",
        path: "machinery",
        info: "...",
        waves: 6,
        enemiesPerWave: 16,
        enemyHealth: 16,
        enemyStrength: 7.5,
        next: { down: "machinery13" }
    },
    machinery13: {
        id: "machinery13",
        path: "machinery",
        info: "Metal strikes metal.",
        waves: 6,
        enemiesPerWave: 17,
        enemyHealth: 17,
        enemyStrength: 7.7,
        next: { down: "machinery14" }
    },
    machinery14: {
        id: "machinery14",
        path: "machinery",
        info: "A mechanical brute stomps near.",
        waves: 6,
        enemiesPerWave: 18,
        enemyHealth: 18,
        enemyStrength: 8,
        next: { down: "machinery15" }
    },
    machinery15: {
        id: "machinery15",
        path: "machinery",
        info: "",
        waves: 3,
        bosses: 1,
        enemiesPerWave: 25,
        enemyHealth: 30,
        enemyStrength: 12,
        next: { down: "machinery16" }
    },
    machinery16: {
        id: "machinery16",
        path: "machinery",
        info: "Steam fills the air.",
        waves: 7,
        enemiesPerWave: 20,
        enemyHealth: 20,
        enemyStrength: 9,
        next: { down: "machinery17" }
    },
    machinery17: {
        id: "machinery17",
        path: "machinery",
        info: "fass",
        waves: 7,
        enemiesPerWave: 22,
        enemyHealth: 21,
        enemyStrength: 9.2,
        next: { down: "machinery18" }
    },
    machinery18: {
        id: "machinery18",
        path: "machinery",
        info: "hel p",
        waves: 7,
        enemiesPerWave: 25,
        enemyHealth: 23,
        enemyStrength: 9.5,
        next: { down: "machinery19" }
    },
    machinery19: {
        id: "machinery19",
        path: "machinery",
        info: "...pleøse",
        waves: 8,
        enemiesPerWave: 28,
        enemyHealth: 24,
        enemyStrength: 10,
        bosses: 1,
        next: { down: "machinery20" }
    },
    machinery20: {
        id: "machinery20",
        path: "machinery",
        info: "Sømeting's cømˆng",
        waves: 8,
        enemiesPerWave: 30,
        enemyHealth: 25,
        enemyStrength: 11,
        next: { down: "machinery21" }
    },
    machinery21: {
        id: "machinery21",
        path: "machinery",
        info: "◊˘≥",
        waves: 9,
        enemiesPerWave: 32,
        enemyHealth: 27,
        enemyStrength: 12,
        next: { down: "machinery22" }
    },
    machinery22: {
        id: "machinery22",
        path: "machinery",
        info: "Metal scream",
        waves: 9,
        enemiesPerWave: 35,
        enemyHealth: 28,
        enemyStrength: 12.5,
        next: { down: "machinery23" }
    },
    machinery23: {
        id: "machinery23",
        path: "machinery",
        info: "A colossal machine activates. (help)",
        waves: 6,
        bosses: 2,
        enemiesPerWave: 40,
        enemyHealth: 30,
        enemyStrength: 14,
        next: { down: "machinery24" }
    },
    machinery24: {
        id: "machinery24",
        path: "machinery",
        info: "The ground vibrates.",
        waves: 7,
        enemiesPerWave: 45,
        enemyHealth: 32,
        enemyStrength: 15,
        next: { down: "machinery25" }
    },
    machinery25: {
        id: "machinery25",
        path: "machinery",
        info: "???",
        waves: 5,
        enemiesPerWave: 50,
        enemyHealth: 40,
        enemyStrength: 18,
        bosses: 10,
        next: {}
    }
    
};
let curLvl = levels["start"];

function generateMoonCraters(radius) {
    moonCraters.length = 0;
    const craterCount = Math.floor(radius * 0.8);
    for (let i = 0; i < craterCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * radius * 0.9;
        const craterRadius = Math.random() * (radius * 0.15);
        moonCraters.push({
            x: Math.cos(angle) * dist,
            y: Math.sin(angle) * dist,
            r: craterRadius
        });
    }
}
// Call once at the start
generateMoonCraters(40);


function chooseWeather() {
    if (choosedNextWeather) return;
    if (isDay) {
        choosedNextWeather = true;
        return dayEvents[Math.floor(Math.random() * dayEvents.length)];
    }
    else if (!isDay) {
        choosedNextWeather = true;
        return nightEvents[Math.floor(Math.random() * nightEvents.length)];
    }
}

function drawWeather(state, deltaTime) {
    const skyArcHeight = canvas.height - 75;
    const bottomOffset = 50;

    if (state === "day") {
        const radius = 40;
        const t = timeOfDay;
        const sunX = t * canvas.width;
        const sunY = canvas.height - bottomOffset - Math.sin(t * Math.PI) * skyArcHeight;
        drawSun(sunX, sunY, radius, performance.now());
    } 
    else if (state === "night") {
        const radius = 50;
        const t = timeOfDay - 1;
        const moonX = t * canvas.width;
        const moonY = canvas.height - bottomOffset - Math.sin(t * Math.PI) * skyArcHeight;
        drawMoon(moonX, moonY, radius);
    }
    else if (state === "bloodmoon") {
        const radius = 60;
        const t = timeOfDay - 1;
        const moonX = t * canvas.width;
        const moonY = canvas.height - bottomOffset - Math.sin(t * Math.PI) * skyArcHeight;
        drawBloodMoon(moonX, moonY, radius);
    }
}

function drawSky() {
    let topColor, bottomColor, t;

    if (timeOfDay < 0.5) {
        // Sunrise: t = 0 → 1
        t = timeOfDay / 0.5;
        topColor = lerpColor("#000022", "#87ceeb", t);    // dark → light blue
        bottomColor = lerpColor("#330000", "#ffa07a", t); // dark red → orange
    } else if (timeOfDay < 1) {
        // Day: t = 0 → 1
        t = (timeOfDay - 0.5) / 0.5;
        topColor = lerpColor("#87ceeb", "#87ceeb", t);    // stays light blue
        bottomColor = lerpColor("#ffa07a", "#87ceeb", t); // transition to blue
    } else if (timeOfDay < 1.5) {
        // Sunset: t = 0 → 1
        t = (timeOfDay - 1) / 0.5;
        topColor = lerpColor("#87ceeb", "#000022", t);    // day → night
        bottomColor = lerpColor("#87ceeb", "#330000", t); // light → dark
    } else {
        // Night: t = 0 → 1
        t = (timeOfDay - 1.5) / 0.5;
        topColor = lerpColor("#000022", "#000011", t);    // dark → darker
        bottomColor = lerpColor("#330000", "#000011", t); // dark → darker
    }

    // Draw linear gradient sky
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, topColor);
    gradient.addColorStop(1, bottomColor);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function lerpColor(a, b, t) {
    // a and b are strings like "#RRGGBB"
    const ah = parseInt(a.slice(1), 16);
    const ar = (ah >> 16) & 0xff;
    const ag = (ah >> 8) & 0xff;
    const ab = ah & 0xff;

    const bh = parseInt(b.slice(1), 16);
    const br = (bh >> 16) & 0xff;
    const bg = (bh >> 8) & 0xff;
    const bb = bh & 0xff;

    const rr = Math.round(ar + (br - ar) * t);
    const rg = Math.round(ag + (bg - ag) * t);
    const rb = Math.round(ab + (bb - ab) * t);

    return `rgb(${rr},${rg},${rb})`;
}

function drawMoon(x, y, radius, time) {
    ctx.save();
    ctx.translate(x, y);

    ctx.rotate(time * 0.0005);

    const gradient = ctx.createRadialGradient(0, 0, radius * 0.1, 0, 0, radius);
    gradient.addColorStop(0, "#dddddd"); 
    gradient.addColorStop(1, "#888888");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();

    for (const crater of moonCraters) {
        ctx.beginPath();
        ctx.arc(crater.x, crater.y, crater.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100,100,100,0.6)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(crater.x - crater.r*0.3, crater.y - crater.r*0.3, crater.r*0.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(150,150,150,0.3)";
        ctx.fill();
    }
    ctx.restore();
}

function drawBloodMoon(x, y, radius) {
    ctx.save();
    ctx.translate(x, y);

    // ---- Draw blood moon body ----
    const gradient = ctx.createRadialGradient(0, 0, radius * 0.05, 0, 0, radius * 1.2);
    gradient.addColorStop(0, "#8b0000"); // deep red center
    gradient.addColorStop(0.4, "#cc0000"); // brighter core
    gradient.addColorStop(1, "#220000"); // dark red/black edge

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();

    // ---- Strong red glow around moon ----
    ctx.beginPath();
    ctx.shadowBlur = radius * 2.2;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "#ff0000";
    ctx.arc(0, 0, radius * 1.05, 0, Math.PI * 2);
    ctx.fill();

    // Disable shadow so craters don't glow
    ctx.shadowBlur = 0;

    // ---- Optional silhouette dark patches (not random, so it stays still) ----
    const patchCount = Math.floor(radius * 0.3);
    for (let i = 0; i < patchCount; i++) {
        const px = (i * 37) % (radius * 1.3) - radius * 0.65;
        const py = (i * 91) % (radius * 1.3) - radius * 0.65;
        const pr = radius * 0.15;

        ctx.beginPath();
        ctx.arc(px, py, pr, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,0,0,0.25)";
        ctx.fill();
    }

    // ---- Fixed craters, same array as moon, but recolored red ----
    for (const crater of moonCraters) {
        // dark crater base
        ctx.beginPath();
        ctx.arc(crater.x, crater.y, crater.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(30,0,0,0.7)";
        ctx.fill();

        // faint highlight for depth
        ctx.beginPath();
        ctx.arc(crater.x - crater.r * 0.2, crater.y - crater.r * 0.2, crater.r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(80,10,10,0.4)";
        ctx.fill();
    }

    ctx.restore();
}

function drawSun(x, y, radius, time) {
    ctx.save();
    ctx.translate(x, y);
    // ----- Rotate rays -----
    // time = performance.now() or your own timer
    ctx.rotate(time * 0.001); // slow rotation
    // ----- Draw rays -----
    const rayCount = 12;
    const rayLength = radius * 1.6;
    const rayWidth = radius * 0.25;
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = rayWidth;
    ctx.lineCap = "round";

    for (let i = 0; i < rayCount; i++) {
        const angle = (Math.PI * 2 * i) / rayCount;
        const x1 = Math.cos(angle) * (radius + rayWidth);
        const y1 = Math.sin(angle) * (radius + rayWidth);
        const x2 = Math.cos(angle) * (rayLength);
        const y2 = Math.sin(angle) * (rayLength);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    ctx.restore();
    // ----- Draw sun ball on top -----
    ctx.save();
    ctx.translate(x, y);

    const gradient = ctx.createRadialGradient(0,0, radius * 0.2, 0,0, radius);
    gradient.addColorStop(0, "#fffed1");
    gradient.addColorStop(1, "yellow");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function spawnDoors() {
    doors.length = 0;
    let doorDefinitions = [];
    if (curLvl.id === "start") {
        doorDefinitions = [
            { dir: "up", color: "orange", text: "blood"},      // red-ish (blood)
            { dir: "right", color: "#FFB74D", text: "machinery"},   // orange (combat/machinery)
            { dir: "down", color: "#6EC6FF", text: "combat"},    // blue (machinery/peace)
            { dir: "left", color: "#90EE90", text: "peace"}   // green (peace)
        ];
    }
    else if (curLvl.path === "blood") {
        doorDefinitions = [
            {dir: "up", color: "orange", text: `Level ${level}`}
        ]
    }
    else if (curLvl.path === "combat") {
        doorDefinitions = [
            {dir: "down", color: "#6EC6FF", text: `Level ${level}`}
        ]
    }
    else if (curLvl.path === "machinery") {
        doorDefinitions = [
            {dir: "right", color: "#FFB74D", text: `Level ${level}`}
        ]
    }
    else if (curLvl.path === "peace") {
        doorDefinitions = [
            {dir: "left", color: "#90EE90", text: `Level ${level}`}
        ]
    }
  
    for (const d of doorDefinitions) {
        const pos = getDoorPosition(d.dir);
        doors.push({
            dir: d.dir,
            x: pos.x,
            y: pos.y,
            size: 72,      // square size
            color: d.color,
            text: d.text,
            target: curLvl.next[d.dir]
        });
    }
}

function drawDoors() {
    if (!showDoors) return;
    for (const door of doors) {
      ctx.save();
      ctx.fillStyle = door.color;
      ctx.fillRect(door.x - door.size/2, door.y - door.size/2, door.size, door.size);
  
      // outline
      ctx.lineWidth = 4;
      ctx.strokeStyle = "white";
      ctx.strokeRect(door.x - door.size/2, door.y - door.size/2, door.size, door.size);
      
      ctx.font = "16px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText(door.text.toUpperCase(), door.x, door.y + 6);
      ctx.restore();
    }
}

function getDoorPosition(dir) {
    switch (dir) {
      case "up": return { x: canvas.width / 2, y: 100 };
      case "down": return { x: canvas.width / 2, y: canvas.height - 100 };
      case "left": return { x: 100, y: canvas.height / 2 };
      case "right": return { x: canvas.width - 100, y: canvas.height / 2 };
    }
}

function checkDoorInteraction() {
    showInteractPrompt = false;
    currentDoorInfo = null;
    doorClosest = null;

    for (const door of doors) {
        const dx = door.x - (player.x + player.width / 2);
        const dy = door.y - (player.y + player.height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < 100) { //show <E>
            showInteractPrompt = true; 
            doorClosest = door;

            // Get info
            const lvl = levels[door.target];
            if (lvl && lvl.info) currentDoorInfo = lvl.info;

            if (keys["e"]) {
                changeLevel(door.target);
            }

            return;
        }
    }
}

function drawDoorInteractionUI() {
    if (!showInteractPrompt || !doorClosest) return;

    ctx.save();
    ctx.font = "bold 28px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    ctx.fillText("<E>", doorClosest.x, doorClosest.y + 70);

    if (currentDoorInfo) {
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(currentDoorInfo, doorClosest.x, doorClosest.y + 95);
    }

    ctx.restore();
}

function changeLevel(path) {
    console.log(`Path chosen: ${path}`);
    loadLevel(path);
}

function loadLevel(path) {  
    for (const w of player.inventory) w.clearProjectiles();

    drops = [];
    console.log(curLvl.id);
    for (const key in levels) {
        const lvl = levels[key];
        if (lvl.id.startsWith(path)) {
          const num = parseInt(lvl.id.replace(/\D/g, ""));
          if (num === level) {
            curLvl = lvl;
            break;
          }
        }
    }
    drawWeapons = true;
    wavesCompleted = 0;
    levelComplete = false;
    waveComplete = false;
    enemies.length = 0;
    showDoors = false;
    doors.length = 0;
    console.log(curLvl.path);

    if (curLvl.path === "blood") canvas.style.backgroundColor = "orange";
    if (curLvl.path === "combat") canvas.style.backgroundColor = "brown";
    if (curLvl.path === "machinery") canvas.style.backgroundColor = "grey";
    if (curLvl.path === "peace") canvas.style.backgroundColor = "palegreen";
  
    let multi = Math.ceil(Math.random() * 2)
    if (curLvl.id === "start") {
        thisLevelWaves = curLvl.waves;
        let min = curLvl.enemiesPerWave - 3;
        let max = curLvl.enemiesPerWave + 4;
        thisWaveEnemies = Math.max(1, Math.floor(Math.random() * (max - min + 1)) + min);
        thisLevelHealthMin = curLvl.enemyHealth * multi
        thisLevelHealthMax = Math.ceil(curLvl.enemyHealth * multi * 0.8);
        
        spawnWave();
    } else {    
        thisLevelWaves = curLvl.waves;
        let min = curLvl.enemiesPerWave - 3;
        let max = curLvl.enemiesPerWave + 5;
        thisWaveEnemies = Math.floor(Math.random() * (max - min + 1)) + min;
        thisLevelHealthMin = curLvl.enemyHealth * multi
        thisLevelHealthMax = Math.ceil(curLvl.enemyHealth * multi * multi * 0.8);
    
        spawnWave();
    }
}

function getRandomEnemy(enemyDict) {
    const entries = Object.values(enemyDict);
    const totalWeight = entries.reduce((sum, e) => sum + e.weight, 0);
    let rand = Math.random() * totalWeight;

    for (const e of entries) {
        if (rand < e.weight) return e.cls;  // RETURN THE CLASS
        rand -= e.weight;
    }
}

async function spawnWave() {
    showWaveLabel(wavesCompleted + 1);
    if (showDoors) return;
  
    let thisHP = 0;
    waveComplete = false;

    for (let i = 0; i < thisWaveEnemies; i++) {
      const side = Math.floor(Math.random() * 4);
      let x, y;
  
      switch (side) {
        case 0: x = Math.random() * canvas.width; y = -20; break;
        case 1: x = canvas.width + 20; y = Math.random() * canvas.height; break;
        case 2: x = Math.random() * canvas.width; y = canvas.height + 20; break;
        case 3: x = -20; y = Math.random() * canvas.height; break;
      }
  
      const selectedEnemy = getRandomEnemy(curLvl.enemyTypes);
      thisHP = Math.floor(Math.random() * (thisLevelHealthMax - thisLevelHealthMin + 1)) + thisLevelHealthMin;
      if (thisHP <= 0) thisHP = thisLevelHealthMin;
      enemies.push(new selectedEnemy(x, y, 1, 4, thisHP, player, curLvl.enemyStrength, weatherMulti, enemies));
    }
    if (wavesCompleted >= curLvl.waves - 1) {
        if (!curLvl.bosses || curLvl.bosses <= 0) return; //no bosses
        await sleep(500);
        for (let i = 0; i < curLvl.bosses; i++ ) {
            let multi = Math.random();
            while (multi <= 0.5) multi = Math.random();
            enemies.push(new Boss1(canvas.width * Math.random(), canvas.height * Math.random(), 1, 3, (thisHP * player.level * 3 + 50) * multi, player, curLvl.enemyStrength, weatherMulti, enemies));
        }
        showBossLabel();
    }
}

async function updateWaveSystem() {
    // When all enemies are dead & wave completion hasn't been handled yet
    if (enemies.length === 0 && !waveComplete && !showDoors) {
      waveComplete = true;
      wavesCompleted++;
  
      if (wavesCompleted >= thisLevelWaves) {
        levelComplete = true;
        drawWeapons = false;
      } else {
        await sleep(1500);
        spawnWave();
      }
    }

    let item = null;
    if (levelComplete && !showDoors) {
        level += 1;

        // item = curLvl.unlocks;
        // if (item) {
        //     console.log(`unlocked${item}!`);
        //     if (item === "VampireFang") {
        //         unlockedVampireFang = true;
        //         showCutscene = true;
        //         console.log(showCutscene)
        //         console.log("unlocked fang");
        //     }
        //     if (item === "VampireCloak") {
        //         unlockedVampireCloak = true;
        //     }
        // }

        if (curLvl.next && Object.keys(curLvl.next).length > 0) {
          showDoors = true;
          spawnDoors();
          console.log(`Doors spawned for level: ${curLvl.id}`);
        } else {
          console.log(`No next levels found for ${curLvl.id}`);
        }

        drawWeapons = false;
    }
    return item;
}

function drawVampireBladeIcon(x, y, size) {
    ctx.save();
    // ─── Draw UI box ───────────────────────────
    const boxSize = size * 2;            // square around icon
    const half = boxSize / 2;
    const r = 10;                        // corner radius
    ctx.fillStyle = "#111";              // dark background
    ctx.strokeStyle = "#550000";         // dark red border
    ctx.lineWidth = 4;

    // rounded rectangle
    const dx = 10; // shift left
    const dy = 10; // shift down
    
    ctx.beginPath();
    ctx.moveTo(x - half + r - dx, y - half + dy);
    ctx.lineTo(x + half - r - dx, y - half + dy);
    ctx.quadraticCurveTo(x + half - dx, y - half + dy, x + half - dx, y - half + r + dy);
    ctx.lineTo(x + half - dx, y + half - r + dy);
    ctx.quadraticCurveTo(x + half - dx, y + half + dy, x + half - r - dx, y + half + dy);
    ctx.lineTo(x - half + r - dx, y + half + dy);
    ctx.quadraticCurveTo(x - half - dx, y + half + dy, x - half - dx, y + half - r + dy);
    ctx.lineTo(x - half - dx, y - half + r + dy);
    ctx.quadraticCurveTo(x - half - dx, y - half + dy, x - half + r - dx, y - half + dy);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.translate(x, y);  // move origin to center for blade drawing

    const bladeColor = "#cc0000";   // deep red
    const highlight = "#ff6666";    // light gleam
    const outline = "#440000";      // darker outline


    // Draw a single blade, angled bottom-left
    function drawBlade(offsetX, offsetY, angleShift = 0) {
        ctx.save();
        ctx.translate(offsetX, offsetY);

        // Aim blades diagonally down-left
        ctx.rotate(Math.PI * 1.25 + angleShift);

        // Blade
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.55);
        ctx.lineTo(size * 0.22, size * 0.55);
        ctx.lineTo(-size * 0.22, size * 0.55);
        ctx.closePath();

        // Fill & outline
        ctx.fillStyle = bladeColor;
        ctx.fill();
        ctx.strokeStyle = outline;
        ctx.lineWidth = 4;
        ctx.stroke();

        // Gleam highlight
        ctx.beginPath();
        ctx.moveTo(-size * 0.06, -size * 0.25);
        ctx.lineTo(size * 0.06, size * 0.3);
        ctx.strokeStyle = highlight;
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.restore();
    }
    // Draw 3 blades with good spacing
    drawBlade(-0.55 * size, -0.2* size, 0);                // center blade
    drawBlade(4, size * 0.5, 0.05);        // top-right blade
    drawBlade(-size * 0.50, size * 0.5, -0.1); // bottom-left blade
    ctx.restore();
}

async function unlockCutscene(item) { //takes the unlocked item
    if (!showCutscene) return;
    if (size >= 100) {
        await sleep(2000);
        showCutscene = false;
    }
    size += 0.5;
    if (item === "VampireFang") {
        drawVampireBladeIcon(canvas.width / 2 - 500, canvas.height / 2 - 100, size);
    }
}

function isButtonValid(btn) {
    const id = btn.id;
    // --- Handle Magic Wand logic ---
    if (id.startsWith("upgradeMagicWand")) {
      const wand = player.inventory.find(w => w.constructor.name === "MagicWand");
      if (!wand) return false; // can't upgrade if not owned
  
      // extract the level number from the id
      const match = id.match(/\d+$/);
      const targetLevel = match ? parseInt(match[0]) : 1;
  
      // can only upgrade to next level (wand.level + 1)
      return targetLevel === wand.level;
    }
    // --- Handle shockWave logic ---
    if (id.startsWith("upgradeShockWave")) {
      const shockWave = player.inventory.find(w => w.constructor.name === "ShockWave");
      if (!shockWave) return false;
  
      const match = id.match(/\d+$/);
      const targetLevel = match ? parseInt(match[0]) : 1;
  
      return targetLevel === shockWave.level;
    }

    if (id.startsWith("upgradeFireWand")) {
        const fireWand = player.inventory.find(w => w.constructor.name === "FireWand");
        if (!fireWand) return false;
    
        const match = id.match(/\d+$/);
        const targetLevel = match ? parseInt(match[0]) : 1;
    
        return targetLevel === fireWand.level;
    }

    if (id.startsWith("upgradeSpinach")) {
        // If the player doesn't have Spinach yet, don't allow upgrade
        if (player.spinach === undefined) return false;
    
        const match = id.match(/\d+$/);
        const targetLevel = match ? parseInt(match[0]) : 1;
    
        return targetLevel === player.spinach;
    }

    if (id.startsWith("upgradeFrostStaff")) {
        const frostStaff = player.inventory.find(w => w.constructor.name === "FrostStaff");
        if (!frostStaff) return false;
    
        const match = id.match(/\d+$/);
        const targetLevel = match ? parseInt(match[0]) : 1;
    
        return targetLevel === frostStaff.level;
    }

    if (id.startsWith("upgradeMagnet")) {
        if (player.magnetLevel == 0) return false;
    
        const match = id.match(/\d+$/);
        const targetLevel = match ? parseInt(match[0]) : 1;
    
        return targetLevel === player.magnetLevel;
    }

    if (id.startsWith("upgradeOrbitBlade")) {
        const blade = player.inventory.find(w => w.constructor.name === "OrbitBlade");
        if (!blade) return false;
    
        const match = id.match(/\d+$/);
        const targetLevel = match ? parseInt(match[0]) : 1;
    
        return targetLevel === blade.level;
    }

    if (id.startsWith("upgradeLavaEruption")) {
        const lava = player.inventory.find(w => w.constructor.name === "LavaEruption");
        if (!lava) return false;
    
        const match = id.match(/\d+$/);
        const targetLevel = match ? parseInt(match[0]) : 1;
    
        return targetLevel === lava.level;
    }

    if (id.startsWith("upgradeXpMulti")) {
        if (player.xpMulti == 1) return false;
    
        const match = id.match(/\d+$/);
        const targetLevel = match ? parseInt(match[0]) : 1;
    
        return targetLevel === player.xpMulti;
    }

    if (id.startsWith("upgradeHolyWand")) {
        const wand = player.inventory.find(w => w.constructor.name === "HolyWand");
        if (!wand) return false;
    
        const match = id.match(/\d+$/);
        const targetLevel = match ? parseInt(match[0]) : 1;
    
        return targetLevel === wand.level;
    }

    if (id.startsWith("upgradeVampireFang")) {
        const fang = player.inventory.find(w => w.constructor.name === "VampireFang");
        if (!fang) return false;
    
        const match = id.match(/\d+$/);
        const targetLevel = match ? parseInt(match[0]) : 1;
    
        return targetLevel === fang.level;
    }
    
    if (id.startsWith("upgradeBloodLeach")) {
        const leach = player.inventory.find(w => w.constructor.name === "BloodLeach");
        if (!leach) return false;
    
        const match = id.match(/\d+$/);
        const targetLevel = match ? parseInt(match[0]) : 1;
    
        return targetLevel === leach.level;
    }
  
    // --- Handle buy buttons (always valid if not owned) ---
    if (id.startsWith("buyMagicWand")) {
      return !player.inventory.find(w => w.constructor.name === "MagicWand");
    }
    if (id.startsWith("buyShockWave")) {
      return !player.inventory.find(w => w.constructor.name === "ShockWave");
    }
    if (id.startsWith("buyFireWand")) {
        return !player.inventory.find(w => w.constructor.name === "FireWand");
    }
    if (id.startsWith("buySpinach")) {
        return player.spinach === 0;
    }
    if (id.startsWith("buyFrostStaff")) {
        return !player.inventory.find(w => w.constructor.name === "FrostStaff");
    }
    if (id.startsWith("buyMagnet")) {
        return player.magnetLevel == 0; // can only buy once
    }
    if (id.startsWith("buyOrbitBlade")) {
        return !player.inventory.find(w => w.constructor.name === "OrbitBlade");
    }
    if (id.startsWith("buyLavaEruption")) {
        return !player.inventory.find(w => w.constructor.name === "LavaEruption");
    }
    if (id.startsWith("buyXpMulti")) {
        return player.xpMulti == 1; // can only buy once
    }
    if (id.startsWith("buyHolyWand")) {
        const wand = player.inventory.find(w => w instanceof MagicWand);
        if (!wand) return false;
        const maxWand = wand.level >= 9;
        return !player.inventory.find(w => w.constructor.name === "HolyWand") && maxWand;
    }
    if (id.startsWith("buyVampireFang")) {
        return !player.inventory.find(w => w.constructor.name === "VampireFang") && unlockedVampireFang;
    }
    if (id.startsWith("buyBloodLeach")) {
        const fang = player.inventory.find(w => w instanceof VampireFang);
        if (!fang) return false;
        const maxFang = fang.level >= 9;
        return !player.inventory.find(w => w.constructor.name === "BloodLeach") && maxFang;
    }
    
  
    // other generic stuff is always valid
    return true;
}

function getOptions() {
    if (buttons.length === 0) {
        paused = false;
        return;
    }
    // filter to only valid buttons
    let validButtons = buttons.filter(b => isButtonValid(b, player));
    validButtons = [...new Map(validButtons.map(b => [b.id, b])).values()];

    if (validButtons.length === 0) {
        console.log("No valid upgrade options right now!");
        return;
    }
    
    // shuffle buttons
    let randBtns = [...validButtons].sort(() => Math.random() - 0.5);
    randBtns = validButtons.sort(() => Math.random() - 0.5);
    randBtns = validButtons.sort(() => Math.random() - 0.5);
    randBtns = validButtons.sort(() => Math.random() - 0.5);
    randBtns = validButtons.sort(() => Math.random() - 0.5);
    
    // pick up to 3
    let options = [];
    let pickCount = Math.min(3, randBtns.length);

    for (let i = 0; i < pickCount; i++) {
        const btn = randBtns[i];
        if (btn.id.startsWith("buy") && Math.random() < 0.6) { //70% chance to skip buy buttons
            i--;
            randBtns = [...randBtns].sort(() => Math.random() - 0.5);
            continue;
        }
        randBtns.splice(i, 1);
        options.push(btn);
    }

    
    showLevelUpMenu(options);
}

function showLevelUpMenu(options) {
    levelUpMenu.innerHTML = "";
    levelUpMenu.style.display = "flex";

    options.forEach((btnEl) => {
        // btnEl.style.display = "inline-block";

        const menuBtn = document.createElement("button");
        menuBtn.className = "button";
        menuBtn.innerHTML = `
            <strong>${btnEl.innerText}</strong><br>
            <small style="color: #ccc;">${btnEl.dataset.description || ""}</small>
        `;

        menuBtn.onclick = () => {
            applyUpgrade(btnEl);
            levelUpMenu.style.display = "none";
            paused = false;
        };

        levelUpMenu.appendChild(menuBtn);
    });
}

function applyUpgrade(btnEl) {
    if (!btnEl) return;

    // Simulate the original button click
    btnEl.click();

    // Remove it from the array
    buttons = buttons.filter(b => b !== btnEl);

    // Hide the old button from UI
    btnEl.style.display = "none";

    // Optionally show the next button in the progression
    if (buttons.length > 0) {
        buttons[0].style.display = "inline-block";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showWaveLabel(waveNum) {
    waveLabelText = `Wave ${waveNum}`;
    waveLabelAlpha = 1;
    waveLabelTimer = 120; // frames to stay visible (adjust as needed)
}

function drawWaveLabel() {
    if (waveLabelAlpha <= 0) return;

    ctx.save();
    ctx.globalAlpha = waveLabelAlpha;
    ctx.font = "bold 48px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(waveLabelText, canvas.width / 2, 80);
    ctx.restore();

    // fade out smoothly
    if (paused) return;
        if (waveLabelTimer > 0) {
            waveLabelTimer--;
        } else {
            waveLabelAlpha -= 0.02;
            if (waveLabelAlpha < 0) waveLabelAlpha = 0;
        }
}

function showBossLabel() {
    bossLabelText = "BOSS!!";
    bossLabelAlpha = 1;
    bossLabelTimer = 130; // stays fully visible for a bit
    bossPulse = 0;        // for scaling animation
}

function drawBossLabel() {
    if (bossLabelAlpha <= 0) return;

    bossPulse += 0.1; // pulsing speed
    const scale = 1 + Math.sin(bossPulse) * 0.1; // pulsating size

    ctx.save();
    ctx.globalAlpha = bossLabelAlpha;

    // position
    const x = canvas.width / 2;
    const y = 350;

    ctx.translate(x, y);
    ctx.scale(scale, scale);

    ctx.font = "bold 100px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // glowing shadow
    ctx.shadowColor = "red";
    ctx.shadowBlur = 25;

    // main text color
    ctx.fillStyle = "#ff2222";
    ctx.fillText(bossLabelText, 0, 0);

    ctx.restore();

    // fade logic
    if (!paused) {
        if (bossLabelTimer > 0) {
            bossLabelTimer--;
        } else {
            bossLabelAlpha -= 0.02;
            if (bossLabelAlpha < 0) bossLabelAlpha = 0;
        }
    }
}

async function drawTimer() {
    if (!paused) timer += 1;

    const secondsTotal = timer / 60;
    const minutes = Math.floor(secondsTotal / 60);
    const seconds = Math.floor(secondsTotal % 60);
    const Mseconds = Math.floor((secondsTotal * 1000) % 1000 / 10);

    // Format with leading zeros
    const timeText = 
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") + ":" +
        String(Mseconds).padStart(2, "0");

    if (timeOfDay < 1.3 && timeOfDay > 0.3) ctx.fillStyle = "black";
    else ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.textAlign = "center";   // center horizontally
    ctx.textBaseline = "top";   // top alignment

    // Draw text at top center of canvas
    ctx.fillText(timeText, canvas.width / 2, 30);
    await sleep(10);
}

function drawVignette(alpha) {
    const w = canvas.width;
    const h = canvas.height;
    const gradient = ctx.createRadialGradient(
        w/2, h/2, 0,
        w/2, h/2, Math.max(w, h) * 0.7
    );
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(1, `rgba(0,0,0,${alpha})`);

    ctx.save();
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
}

function drawRedVignette(alpha) {
    if (alpha <= 0) return; // nothing to draw

    const gradientSize = 150; // thickness of red edges

    // Top edge
    const topGrad = ctx.createLinearGradient(0, 0, 0, gradientSize);
    topGrad.addColorStop(0, `rgba(255, 0, 0, ${alpha})`);
    topGrad.addColorStop(1, 'rgba(255, 0, 0, 0)');
    ctx.fillStyle = topGrad;
    ctx.fillRect(0, 0, canvas.width, gradientSize);

    // Bottom edge
    const bottomGrad = ctx.createLinearGradient(0, canvas.height - gradientSize, 0, canvas.height);
    bottomGrad.addColorStop(0, 'rgba(255, 0, 0, 0)');
    bottomGrad.addColorStop(1, `rgba(255, 0, 0, ${alpha})`);
    ctx.fillStyle = bottomGrad;
    ctx.fillRect(0, canvas.height - gradientSize, canvas.width, gradientSize);

    // Left edge
    const leftGrad = ctx.createLinearGradient(0, 0, gradientSize, 0);
    leftGrad.addColorStop(0, `rgba(255, 0, 0, ${alpha})`);
    leftGrad.addColorStop(1, 'rgba(255, 0, 0, 0)');
    ctx.fillStyle = leftGrad;
    ctx.fillRect(0, 0, gradientSize, canvas.height);

    // Right edge
    const rightGrad = ctx.createLinearGradient(canvas.width - gradientSize, 0, canvas.width, 0);
    rightGrad.addColorStop(0, 'rgba(255, 0, 0, 0)');
    rightGrad.addColorStop(1, `rgba(255, 0, 0, ${alpha})`);
    ctx.fillStyle = rightGrad;
    ctx.fillRect(canvas.width - gradientSize, 0, gradientSize, canvas.height);
}

function drawRedDeath() {
    canvas.style.filter = "none";
    let picked = [];
    let grid = [];
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black"
    ctx.strokeStyle = "white";
    ctx.textAlign = "center"
    ctx.lineWidth = 3;
    ctx.font = "100px Roberto";
    ctx.strokeText("GAME OVER!", canvas.width / 2, canvas.height / 2 - 100);
}

function drawAttributes() {
    for (const weapon of player.inventory) {
        weapon.draw(ctx);
    }
    drawTimer();
}

function updateAttributes(deltaTime) {
    for (const weapon of player.inventory) {
        weapon.update(deltaTime, enemies, canvas);
    }
}

function drawDarkness(alpha) {
    const lightRadius = 200;

    ctx.save();

    // --- Draw full screen darkness first ---
    ctx.fillStyle = "black";
    ctx.globalAlpha = alpha;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // --- Punch OUT a circle so the inside stays visible ---
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(player.x, player.y, lightRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}

function gameLoop(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSky();   

    if (!player.alive) {
        drawRedDeath();
        return;
    }

    const deltaTime = time - lastTime;
    lastTime = time;

    let num = deltaTime / thisDayLen;
    if (!isNaN(num) && !paused && !levelComplete) timeOfDay += deltaTime / thisDayLen;
    if (timeOfDay > 1) { //means one day cycle has passed...
        isDay = false;
    }
    if (timeOfDay > 2) { //means one day/night cycle has passed...
        timeOfDay = 0;
        isDay = true;
    }
    if (isDay) {
        weatherState = "day";
        weatherMulti = 1;
    }
    if (!isDay) {
        weatherState = "night";
        weatherMulti = 1.5;
    }
    let item = updateWaveSystem();
    // if (showCutscene && !paused && item) unlockCutscene(item);      // MAKE IT WORK!
    // showCutscene = true;

    if (player.previousLevel === player.level) {
        player.level += 1;
        paused = true;
        getOptions();
    }

    let nightT = 0;
    if (timeOfDay > 1 && timeOfDay < 2) {
        nightT = (timeOfDay - 1);
        // Fade back out during last 25% of night
        if (nightT > 0.75) nightT = 1 - ((nightT - 0.75) / 0.25);
    }
    
    nightT = 1 - Math.pow(1 - nightT, 3);
    if (nightT > 0) {
        drawDarkness(nightT);
        drawVignette(nightT);
    }
    

    drawDoors();
    checkDoorInteraction();

    for (let i = enemies.length - 1; i >= 0; i--) {
        let e = enemies[i];
      
        if (!paused) {
            e.update(deltaTime, canvas, weatherMulti);
        }
        const dist = Math.hypot(e.x - player.x, e.y - player.y);
        if (timeOfDay > 0.03 && timeOfDay <= 1) {
            e.draw(ctx);
            e.showHealth(ctx);
        } else if (dist < 200) {
            e.draw(ctx);
            e.showHealth(ctx);
        }        

        if (!e.alive) {
            e.spawnDrops(drops);
            enemies.splice(i, 1);
        }
    }

    player.draw(ctx)
    player.showStats(ctx, canvas);
    if (paused === false) {
        player.update(canvas, deltaTime, enemies);
        player.checkCollision(enemies, drops);
    }

    for (const ammo of ammos) {
        if (paused === false) {
            ammo.update(canvas);
        }
        ammo.draw(ctx);
        ammo.checkCollision(enemies);
    }

    for (const drop of drops) {
        drop.draw(ctx, time);
        if (paused === false) {
            drop.update(player);
        }
    }

    if (drawWeapons) {
        if (paused === false) updateAttributes(deltaTime, enemies);
        drawAttributes();
    }

    if (lastPlayerHealth > player.health) {
        lastPlayerHealth = player.health;
        alpha = 1;
    }
    else if (lastPlayerHealth < player.health) {
        lastPlayerHealth = player.health;
    }
    drawWeather(weatherState, deltaTime);


    drawDoorInteractionUI();
    drawWaveLabel();
    drawBossLabel();

    if (alpha > 0) alpha -= 0.06
    if (alpha <= 0) alpha = 0;
    drawRedVignette(alpha);
    
    
    requestAnimationFrame(gameLoop);
}

loadLevel();
gameLoop();

//track mouse position relative to canvas
let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
canvas.addEventListener("mousemove", function(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});
// handle spacebar shooting: only fire one per press
window.addEventListener("keydown", function(e) {
    if (e.code === "Space" && !paused) {
        // Calculate direction from player center towards mouse
        const fromX = player.x + player.width / 2;
        const fromY = player.y + player.height / 2;
        const dx = mouse.x - fromX;
        const dy = mouse.y - fromY;
        const length = Math.hypot(dx, dy) || 1;
        const dir = { x: dx / length, y: dy / length };
        // Create and push the new ammo
        ammos.push(new Ammo(fromX, fromY, dir, 10));
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        console.log("Game Paused!");
        if (!pausedGame) {
            paused = !paused;  // normal pause toggle (animations)
            if (paused) {
                resetBtn.style.display = "flex"; // show the button
            } else {
                resetBtn.style.display = "none";        // hide it
            }
        } else {
            pausedGame = !pausedGame;
        }
    }
});