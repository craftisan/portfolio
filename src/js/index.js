// Import CSS. This will be seperated by webpack
import "../css/index.css";

// Import required modules
import $ from 'jquery';
import SplitType from 'split-type';
import { gsap } from "gsap";

$(document).ready(function () {
    let text = new SplitType('#name-split-text');
    let characters = $('.char');
    characters.addClass('translate-y-full');

    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.02,
        duration: 0.5
    });
});