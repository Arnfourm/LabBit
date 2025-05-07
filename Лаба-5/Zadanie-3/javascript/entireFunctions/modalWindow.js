const dialog = document.querySelector(".dialogMain");
const html = document.querySelector("html");
const priceHeader = document.querySelector(".priceHeader");

export function openModelScript() {
    dialog.showModal();
    html.classList.add("changehtml");
    priceHeader.textContent = `Цена: ${price.toLocaleString()}$`;
};

export function openModelScriptShort(event){
    if (event.ctrlKey && event.key === "b") {
        openModelScript();
    } else if (event.ctrlKey && event.key === "q") {
        window.close();
    };
};

export function closeModelScript(){
    dialog.close();
    html.classList.remove("changehtml");
}