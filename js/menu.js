"use strict"

let emojis = ["1F44B", "1F44F", "1F44A", "1F44C"];
let emojiCount = 0;


function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active");
    
}

function cycleEmoji() {
    let emojiRef = document.getElementById("fun-emoji");
    
    if (emojiCount == emojis.length - 1) {
        emojiCount = 0;
    } else {
        emojiCount++;
    }

    emojiRef.innerHTML = String.fromCodePoint("0x" + emojis[emojiCount]);

}