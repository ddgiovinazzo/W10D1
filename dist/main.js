/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

class DOMNodeCollection { 

    constructor(array) {
        this.array = array;
    }

}

module.exports = DOMNodeCollection;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ "./src/dom_node_collection.js")

window.$l = function(arg)  { 
    if (arg instanceof HTMLElement){ 
        const arr = [arg]
        return new DOMNodeCollection(arr);
    } else if (typeof(arg) === "string") { 
        const list = document.querySelectorAll(arg);
        const nodesArr = Array.from(list);
        return new DOMNodeCollection(nodesArr);
    };
};

})();

/******/ })()
;
//# sourceMappingURL=main.js.map