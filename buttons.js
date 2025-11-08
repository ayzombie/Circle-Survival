import { MagicWand } from "./weapons.js";

const buymagicWand = document.getElementById("buyMagicWand")
const upgradeMagicWand = document.getElementById("upgradeMagicWand")
const upgradeMagicWand2 = document.getElementById("upgradeMagicWand2")
const upgradeMagicWand3 = document.getElementById("upgradeMagicWand3")
const upgradeMagicWand4 = document.getElementById("upgradeMagicWand4")
const buyMoreStuff = document.getElementById("buyMoreStuff")
buymagicWand.style.display = "none";
upgradeMagicWand.style.display = "none";
upgradeMagicWand2.style.display = "none";
upgradeMagicWand3.style.display = "none";
upgradeMagicWand4.style.display = "none";
buyMoreStuff.style.display = "none";


export function loadButtons(player) {
    upgradeMagicWand.addEventListener("click", () => {
        console.log("Bought!");
    });
}