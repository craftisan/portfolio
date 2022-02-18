// Import CSS. This will be seperated by webpack
import "../css/index.css";

// Import fullpage
import FullPage from "fullpage.js";

// Initialize fullpage
new FullPage('#homepage', {
    scrollingSpeed: 1000,
    autoScrolling: true,
    scrollHorizontally: false,
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    paddingTop: '5rem',
    controlArrows: true,
    menu: '#menu',
    lazyLoad: true,
});