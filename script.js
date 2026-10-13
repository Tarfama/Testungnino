var photos = ["foto1.jpg", "foto2.jpg", "foto3.jpeg", "foto4.jpeg", "foto5.jpeg"];
var grid = document.getElementById("grid");

function fill(s, src) { 
    s.innerHTML = ""; 
    var i = new Image(); 
    i.src = src; 
    i.alt = "Foto"; 
    s.appendChild(i);   
}
for (var n = 0; n < 5; n++) {
    var s = document.createElement("button");
    s.className = "slot"; 
    s.setAttribute("aria-label", "Slot foto " + (n + 1)); 
    grid.appendChild(s); 
    if (photos[n]) fill(s, photos[n])
    s.onclick = (function (src) { return function () { openPhoto(src); }; })(photos[n]);
}


function show(id) { 
    document.querySelectorAll(".screen").forEach(function (e) { 
        e.classList.toggle("on", e.id === id) 
    })
}

var viewer = document.getElementById("viewer"), big = document.getElementById("big");
function openPhoto(src) {
    big.src = src;
    viewer.hidden = false;
}
viewer.onclick = function () { viewer.hidden = true; };
document.addEventListener("keydown", function (e) { if (e.key === "Escape") viewer.hidden = true; });

document.getElementById("go").onclick = function () { 
    show("gallery") ;
    history.pushState({ page: "gallery" }, "");
}
document.getElementById("back").onclick = function () { 
    history.back() 
}
window.onpopstate = function () {
    show(history.state && history.state.page === "galery" ? "gallery" : "home");
}

if (history.state && history.state.page === "gallery") show("gallery");

