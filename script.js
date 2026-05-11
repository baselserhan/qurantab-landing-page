import { clickingLabelsWithKeyboard, observeElements } from './utils.js'

const labelElements = document.querySelectorAll("label");
const sectionElements = document.querySelectorAll("section");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".links__link");
const sectionAnchors = document.querySelectorAll("section[id]");

const handleStickyHeader = () => {
    if (!header) return;
    header.classList.toggle("sticky", window.scrollY > 20);
};

const highlightActiveNav = () => {
    if (!sectionAnchors.length) return;

    const activeSection = Array.from(sectionAnchors).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.25 && rect.bottom > window.innerHeight * 0.25;
    });

    navLinks.forEach((link) => {
        const targetId = link.getAttribute("href");
        link.classList.toggle("active", activeSection && `#${activeSection.id}` === targetId);
    });
};

window.addEventListener("scroll", () => {
    handleStickyHeader();
    highlightActiveNav();
}, { passive: true });

handleStickyHeader();
highlightActiveNav();

clickingLabelsWithKeyboard(labelElements);

observeElements(sectionElements);



