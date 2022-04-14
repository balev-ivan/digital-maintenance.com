"use strict";

// Menu management

// Global variable to store default selection
let currentSelection = document.querySelector(".menu_info");

function showDefault() {
    currentSelection.classList.add("show-div");
}

// Change active tab
function changeActiveTab(newSelection) {
    currentSelection.classList.remove("show-div");
    let selector = '.' + newSelection;
    let newTab = document.querySelector(selector);
    currentSelection = newTab;
    currentSelection.classList.add("show-div");
}

// Carousel management
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel_pic");
    let slideLength = slides.length;
    if (n > slideLength) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slideLength
    }
    for (i = 0; i < slideLength; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}