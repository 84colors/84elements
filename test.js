"use strict";
const isLocal = true;

document.querySelector(".github-boxes").onmousemove = (e) => {
    for (const card of document.getElementsByClassName("github-box")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
};
