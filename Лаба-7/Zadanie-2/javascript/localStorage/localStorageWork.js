function currentPath(){
    const currentUpdatingPath = decodeURIComponent(window.location.pathname);
    window.localStorage.setItem("currentPath", currentUpdatingPath);
    document.getElementById("currentPathToChange").textContent = window.localStorage.getItem("currentPath");
    
};

function showSavedPath(){
    document.getElementById("savedPathChange").textContent = window.localStorage.getItem("savedPath");
};

currentPath();
showSavedPath();

function savedPathChange(){
    const savedPath = decodeURIComponent(window.location.pathname);
    window.localStorage.setItem("savedPath", savedPath);    
};

function returnToSavedPath(){
    const savedPath = window.localStorage.getItem("savedPath");
    if (savedPath){
        window.location.pathname = savedPath;
    } 
    else {
        alert("Нет ничего");
    };
};

document.getElementById("changeSavedPath").addEventListener("click", function() {
    savedPathChange();
    showSavedPath();
});

document.getElementById("returnSavedPath").addEventListener("click", function() {
    returnToSavedPath();
});