"use strict";

window.onload = function () {
    initCarousel();
    initActiveTab();
};

function initActiveTab() {
    const defaultTabId = "home_tab";

    // Global variable to store default selection
    let currentSelection = document.getElementById(defaultTabId);

    const navLinks = document.querySelectorAll("nav a");

    let tabList = [];
    navLinks.forEach(function (element) {
            tabList.push(element.hash)
        }
    );

    console.log('tab list : ');
    console.log(tabList);

    // Change active tab
    function changeActiveTab(targetAnchor) {
        currentSelection.classList.remove("show-div");
        const selector = targetAnchor.replace("#", "");
        const newTab = document.getElementById(selector);

        currentSelection = newTab;
        currentSelection.classList.add("show-div");
    }

    navLinks.forEach(function (e) {
        e.onclick = function () {
            const targetAnchor = e.getAttribute("href");

            console.log("targetAnchor", targetAnchor);

            changeActiveTab(targetAnchor);
        };
    });

    const hash = window.location.hash;
    console.log('hush details : ');
    console.log(hash);
    if (hash.length > 0 && hash.indexOf("_tab") > 0) {
        // TODO: Load a different tab than default. Please check if such tab exists first. If not fallback to defaultTabId.
        if (tabList.includes(hash)) {
            changeActiveTab(hash)
        } else changeActiveTab(defaultTabId);
    }

    // Show default
    currentSelection.classList.add("show-div");
}

function initCarousel() {
    const prevButton = document.getElementById("carouselPrev");
    const nextButton = document.getElementById("carouselNext");

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

    prevButton.onclick = plusSlides(-1);
    nextButton.onclick = plusSlides(1);
}