const DOMNodeCollection = require('./dom_node_collection')

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
