import { changeButtonColor } from "./changebuttoncolor.js";
import { openModelScript, openModelScriptShort, closeModelScript } from "./modalWindow.js";

const openModels = document.querySelectorAll(".openModel");
const closeModel = document.getElementById("closeModel");

for (let i = 0; i < openModels.length; i++) {
    openModels[i].addEventListener("click", openModelScript);
};
addEventListener("keydown", openModelScriptShort);
closeModel.addEventListener("click", closeModelScript);

changeButtonColor();