import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Ammo } from "./ammo.js";
import { Drop } from "./drops.js";
import { MagicWand } from "./weapons.js";
import { FireWand } from "./weapons.js";
import { ShockWave } from "./weapons.js";
import { FrostStaff } from "./weapons.js";
import { OrbitBlade } from "./weapons.js";
import { LavaEruption } from "./weapons.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const player = new Player(canvas.width / 2, canvas.height / 2);
const levelUpMenu = document.getElementById("levelUpMenu");
const resetBtn = document.getElementById("resetBtn");
resetBtn.style.display = "flex";
resetBtn.style.display = "none";
levelUpMenu.style.display = "flex";
levelUpMenu.style.display = "none";
const buymagicWand = document.getElementById("buyMagicWand")
const upgradeMagicWand = document.getElementById("upgradeMagicWand")
const upgradeMagicWand2 = document.getElementById("upgradeMagicWand2")
const upgradeMagicWand3 = document.getElementById("upgradeMagicWand3")
const upgradeMagicWand4 = document.getElementById("upgradeMagicWand4")
const upgradeMagicWand5 = document.getElementById("upgradeMagicWand5");
const upgradeMagicWand6 = document.getElementById("upgradeMagicWand6");
const upgradeMagicWand7 = document.getElementById("upgradeMagicWand7");
const upgradeMagicWand8 = document.getElementById("upgradeMagicWand8");
const buyshockWave = document.getElementById("buyshockWave");
const upgradeshockWave1 = document.getElementById("upgradeshockWave1");
const upgradeshockWave2 = document.getElementById("upgradeshockWave2");
const upgradeshockWave3 = document.getElementById("upgradeshockWave3");
const upgradeshockWave4 = document.getElementById("upgradeshockWave4");
const upgradeshockWave5 = document.getElementById("upgradeshockWave5");
const upgradeshockWave6 = document.getElementById("upgradeshockWave6");
const upgradeshockWave7 = document.getElementById("upgradeshockWave7");
const upgradeshockWave8 = document.getElementById("upgradeshockWave8");
const buyFireWand = document.getElementById("buyFireWand");
const upgradeFireWand1 = document.getElementById("upgradeFireWand1");
const upgradeFireWand2 = document.getElementById("upgradeFireWand2");
const upgradeFireWand3 = document.getElementById("upgradeFireWand3");
const upgradeFireWand4 = document.getElementById("upgradeFireWand4");
const upgradeFireWand5 = document.getElementById("upgradeFireWand5");
const upgradeFireWand6 = document.getElementById("upgradeFireWand6");
const upgradeFireWand7 = document.getElementById("upgradeFireWand7");
const upgradeFireWand8 = document.getElementById("upgradeFireWand8");
const buySpinach = document.getElementById("buySpinach");
const upgradeSpinach1 = document.getElementById("upgradeSpinach1");
const upgradeSpinach2 = document.getElementById("upgradeSpinach2");
const upgradeSpinach3 = document.getElementById("upgradeSpinach3");
const upgradeSpinach4 = document.getElementById("upgradeSpinach4");
const buyFrostStaff = document.getElementById("buyFrostStaff");
const upgradeFrostStaff1 = document.getElementById("upgradeFrostStaff1");
const upgradeFrostStaff2 = document.getElementById("upgradeFrostStaff2");
const upgradeFrostStaff3 = document.getElementById("upgradeFrostStaff3");
const upgradeFrostStaff4 = document.getElementById("upgradeFrostStaff4");
const upgradeFrostStaff5 = document.getElementById("upgradeFrostStaff5");
const upgradeFrostStaff6 = document.getElementById("upgradeFrostStaff6");
const upgradeFrostStaff7 = document.getElementById("upgradeFrostStaff7");
const upgradeFrostStaff8 = document.getElementById("upgradeFrostStaff8");
const buyMagnet = document.getElementById("buyMagnet");
const upgradeMagnet1 = document.getElementById("upgradeMagnet1");
const upgradeMagnet2 = document.getElementById("upgradeMagnet2");
const upgradeMagnet3 = document.getElementById("upgradeMagnet3");
const upgradeMagnet4 = document.getElementById("upgradeMagnet4");
const buyOrbitBlade = document.getElementById("buyOrbitBlade");
const upgradeOrbitBlade1 = document.getElementById("upgradeOrbitBlade1");
const upgradeOrbitBlade2 = document.getElementById("upgradeOrbitBlade2");
const upgradeOrbitBlade3 = document.getElementById("upgradeOrbitBlade3");
const upgradeOrbitBlade4 = document.getElementById("upgradeOrbitBlade4");
const upgradeOrbitBlade5 = document.getElementById("upgradeOrbitBlade5");
const upgradeOrbitBlade6 = document.getElementById("upgradeOrbitBlade6");
const upgradeOrbitBlade7 = document.getElementById("upgradeOrbitBlade7");
const upgradeOrbitBlade8 = document.getElementById("upgradeOrbitBlade8");
const buyLavaEruption = document.getElementById("buyLavaEruption");
const upgradeLavaEruption1 = document.getElementById("upgradeLavaEruption1");
const upgradeLavaEruption2 = document.getElementById("upgradeLavaEruption2");
const upgradeLavaEruption3 = document.getElementById("upgradeLavaEruption3");
const upgradeLavaEruption4 = document.getElementById("upgradeLavaEruption4");
const upgradeLavaEruption5 = document.getElementById("upgradeLavaEruption5");
const upgradeLavaEruption6 = document.getElementById("upgradeLavaEruption6");
const upgradeLavaEruption7 = document.getElementById("upgradeLavaEruption7");
const upgradeLavaEruption8 = document.getElementById("upgradeLavaEruption8");





let buttons = [ 
    // buymagicWand,
    // upgradeMagicWand,
    // upgradeMagicWand2,
    // upgradeMagicWand3,
    // upgradeMagicWand4,
    // upgradeMagicWand5,
    // upgradeMagicWand6,
    // upgradeMagicWand7,
    // upgradeMagicWand8,
    // buyFireWand,
    // upgradeFireWand1,
    // upgradeFireWand2,
    // upgradeFireWand3,
    // upgradeFireWand4,
    // upgradeFireWand5,
    // upgradeFireWand6,
    // upgradeFireWand7,
    // upgradeFireWand8,
    buyshockWave,
    upgradeshockWave1,
    upgradeshockWave2,
    upgradeshockWave3,
    upgradeshockWave4,
    upgradeshockWave5,
    upgradeshockWave6,
    upgradeshockWave7,
    upgradeshockWave8,
    // buySpinach,
    // upgradeSpinach1,
    // upgradeSpinach2,
    // upgradeSpinach3,
    // upgradeSpinach4,
    buyFrostStaff,
    upgradeFrostStaff1,
    upgradeFrostStaff2,
    upgradeFrostStaff3,
    upgradeFrostStaff4,
    upgradeFrostStaff5,
    upgradeFrostStaff6,
    upgradeFrostStaff7,
    upgradeFrostStaff8,
    buyMagnet,
    upgradeMagnet1,
    upgradeMagnet2,
    upgradeMagnet3,
    upgradeMagnet4,
    // buyOrbitBlade,
    // upgradeOrbitBlade1,
    // upgradeOrbitBlade2,
    // upgradeOrbitBlade3,
    // upgradeOrbitBlade4,
    // upgradeOrbitBlade5,
    // upgradeOrbitBlade6,
    // upgradeOrbitBlade7,
    // upgradeOrbitBlade8,
    buyLavaEruption,
    upgradeLavaEruption1,
    upgradeLavaEruption2,
    upgradeLavaEruption3,
    upgradeLavaEruption4,
    upgradeLavaEruption5,
    upgradeLavaEruption6,
    upgradeLavaEruption7,
    upgradeLavaEruption8
];
buttons.forEach(btn => btn.style.display = "none");

const enemies = [];
const ammos = [];
const drops = [];
const new_weapons = [];
const upgrades = [];
let paused = false;
let pausedGame = false;
let lastTime = 0;
let difCounter = 0.01;
let difficulty = 0.00005;
let enemyHealth = 5;
let timer = 0;
let alpha = 0;
let lastPlayerHealth = player.health;

function loadButtons() {
    resetBtn.addEventListener("click", () => {
        player.health = 0;
        window.location.reload(true);
    });
    
    buymagicWand.addEventListener("click", () => {
        player.inventory.push(new MagicWand(player));
        console.log("Bought Magic Wand!");
        buttons = buttons.filter(b => b !== buymagicWand);
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

    buyshockWave.addEventListener("click", () => {
        // Handle buying the shockWave weapon
        console.log("Bought shockWave!");
        buttons = buttons.filter(b => b !== buyshockWave);
        buttons.push(upgradeshockWave1);
        if (!player.inventory.some(w => w instanceof ShockWave)) {
            player.inventory.push(new ShockWave(player));
        }
    });

    upgradeshockWave1.addEventListener("click", () => {
        // Upgrade shockWave to level 2
        console.log("Upgraded shockWave to Level 2!");
        buttons = buttons.filter(b => b !== upgradeshockWave1);
        buttons.push(upgradeshockWave2);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 2;
    });

    upgradeshockWave2.addEventListener("click", () => {
        // Upgrade shockWave to level 3
        console.log("Upgraded shockWave to Level 3!");
        buttons = buttons.filter(b => b !== upgradeshockWave2);
        buttons.push(upgradeshockWave3);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 3;
    });

    upgradeshockWave3.addEventListener("click", () => {
        // Upgrade shockWave to level 4
        console.log("Upgraded shockWave to Level 4!");
        buttons = buttons.filter(b => b !== upgradeshockWave3);
        buttons.push(upgradeshockWave4);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 4;
    });

    upgradeshockWave4.addEventListener("click", () => {
        // Upgrade shockWave to level 5
        console.log("Upgraded shockWave to Level 5!");
        buttons = buttons.filter(b => b !== upgradeshockWave4);
        buttons.push(upgradeshockWave5);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 5;
    });

    upgradeshockWave5.addEventListener("click", () => {
        // Upgrade shockWave to level 6
        console.log("Upgraded shockWave to Level 6!");
        buttons = buttons.filter(b => b !== upgradeshockWave5);
        buttons.push(upgradeshockWave6);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 6;
    });
    
    upgradeshockWave6.addEventListener("click", () => {
        // Upgrade shockWave to level 7
        console.log("Upgraded shockWave to Level 7!");
        buttons = buttons.filter(b => b !== upgradeshockWave6);
        buttons.push(upgradeshockWave7);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 7;
    });

    upgradeshockWave7.addEventListener("click", () => {
        // Upgrade shockWave to level 8
        console.log("Upgraded shockWave to Level 8!");
        buttons = buttons.filter(b => b !== upgradeshockWave7);
        buttons.push(upgradeshockWave8);
        const shockWave = player.inventory.find(w => w instanceof ShockWave);
        if (shockWave) shockWave.level = 8;
    });

    upgradeshockWave8.addEventListener("click", () => {
        // Upgrade shockWave to level 9 (max)
        console.log("Upgraded shockWave to Level 9 (Max)!");
        buttons = buttons.filter(b => b !== upgradeshockWave8);
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
};





loadButtons();

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function spawnEnemies() {
    // randomly decide which side to spawn on
    const side = Math.floor(Math.random() * 4); // 0=top,1=right,2=bottom,3=left
    let x, y;

    switch (side) {
    case 0: // top
        x = Math.random() * canvas.width;
        y = -20; // just above the canvas
        break;
    case 1: // right
        x = canvas.width + 20; // just right of canvas
        y = Math.random() * canvas.height;
        break;
    case 2: // bottom
        x = Math.random() * canvas.width;
        y = canvas.height + 20; // just below canvas
        break;
    case 3: // left
        x = -20; // just left of canvas
        y = Math.random() * canvas.height;
        break;
    }
    enemyHealth += Math.round(difficulty * 500);
    let minHP = enemyHealth - 3;
    let maxHP = enemyHealth + 3;
    let thisHP = Math.floor(Math.random() * (maxHP - minHP + 1)) + minHP;
    enemies.push(new Enemy(x, y, 1, 4, thisHP, player));
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
    if (id.startsWith("upgradeshockWave")) {
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
  
    // --- Handle buy buttons (always valid if not owned) ---
    if (id.startsWith("buyMagicWand")) {
      return !player.inventory.find(w => w.constructor.name === "MagicWand");
    }
    if (id.startsWith("buyshockWave")) {
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
    
  
    // other generic stuff is always valid
    return true;
}


function getOptions() {
    if (buttons.length === 0) return;
    // filter to only valid buttons
    let validButtons = buttons.filter(b => isButtonValid(b, player));
    validButtons = [...new Map(validButtons.map(b => [b.id, b])).values()];

    if (validButtons.length === 0) {
        console.log("No valid upgrade options right now!");
        return;
    }
    
    // shuffle buttons
    let randBtns = validButtons.sort(() => Math.random() - 0.5);
    randBtns = validButtons.sort(() => Math.random() - 0.5);
    randBtns = validButtons.sort(() => Math.random() - 0.5);
    randBtns = validButtons.sort(() => Math.random() - 0.5);
    randBtns = validButtons.sort(() => Math.random() - 0.5);
    
    // pick up to 3
    const options = [];
    const pickCount = Math.min(3, randBtns.length);
    for (let i = 0; i < pickCount; i++) {
        options.push(randBtns[i]);
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

    // Set text style
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";   // center horizontally
    ctx.textBaseline = "top";   // top alignment

    // Draw text at top center of canvas
    ctx.fillText(timeText, canvas.width / 2, 30);
    await sleep(10);
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

function updateAttributes(deltaTime, enemies) {
    for (const weapon of player.inventory) {
        weapon.update(deltaTime, enemies, canvas);
    }
}

function gameLoop(time) {
    if (!player.alive) {
        drawRedDeath();
        return;
    }
    const deltaTime = time - lastTime;
    lastTime = time;
    if (!paused) difCounter += difficulty;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (player.previousLevel == player.level) {
        player.level += 1;
        paused = true;
        getOptions();
    }

    player.draw(ctx)
    player.showStats(ctx, canvas);
    if (paused === false) {
        player.update(canvas, deltaTime, enemies);
        player.checkCollision(enemies, drops, paused);
    }

    if (Math.random() < difCounter && !paused) spawnEnemies();  //spawn enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
        let e = enemies[i];
      
        if (!paused) {
            e.update(player);
        }
        e.draw(ctx);
        e.showHealth(ctx);

        if (!e.alive) {
            e.spawnDrops(drops)
            enemies.splice(i, 1);
        }
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

    if (paused === false) updateAttributes(deltaTime, enemies);
    drawAttributes();

    if (lastPlayerHealth != player.health) {
        lastPlayerHealth = player.health;
        alpha = 1;
    }
    if (alpha > 0) alpha -= 0.06
    if (alpha <= 0) alpha = 0;
    drawRedVignette(alpha);
    
    requestAnimationFrame(gameLoop);
}

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
    if (e.code === "Space") {
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