import { clickingLabelsWithKeyboard, observeElements } from './utils.js'

const labelElements = document.querySelectorAll("label");
const sectionElements = document.querySelectorAll("section");

clickingLabelsWithKeyboard(labelElements);

observeElements(sectionElements);



