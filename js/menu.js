"use strict"

let emojis = ["1F44B", "1F44F", "1F44A", "1F44C"];
let emojiCount = 0;

let role_emoji = ["1F4DA", "1F393", "1F3A8"];
let role = ["Tutor", "Artist", "Student"];
let roleCount = 0;

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

function cycleRole() {
    let emojiRef = document.getElementById("role-emoji");
    let roleRef = document.getElementById("role-span");

    if (roleCount == role.length - 1) {
        roleCount = 0;
    } else {
        roleCount++;
    }

    emojiRef.innerHTML = String.fromCodePoint(`0x${role_emoji[roleCount]}`);
    roleRef.innerHTML = role[roleCount];
}