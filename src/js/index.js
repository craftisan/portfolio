// Import CSS. This will be seperated by webpack
import "../../node_modules/fullpage.js/dist/fullpage.min.css";
import "../css/index.css";

// Import fullpage
import FullPage from "fullpage.js";

// Initialize fullpage
new FullPage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true
});