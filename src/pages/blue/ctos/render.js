import ONode from "./ONode";

export function render(createElement) {
    // 'ONode'

}


export function createElement(tagName, prop, content) {
    return new ONode(tagName, prop, content);
}



export function htmlToONode(html) {
    let a = toNode(createNode(html));
    return a

}
function toNode(doc) {
    if (doc.nodeName == '#text') {
        return doc.nodeValue;
    }
    let tagName = doc.localName;
    let prop = doc.attributes;
    let _prop = {};
    Object.keys(prop).forEach(key => {
        _prop[prop[key].nodeName] = prop[key].nodeValue;
    });


    let childNodes = doc.childNodes;
    let child = [];
    childNodes.forEach(el => {
        // toNode(el)
        // console.warn(el);
        child.push(toNode(el));
    });
    let oNode = new ONode(tagName, _prop, child);
    // console.warn(oNode);
    return oNode;
    // let a = oNode.createElement();
    // console.warn(a);




}
function createNode(str) {
    let div = document.createElement('div');
    div.innerHTML = str;
    return div.childNodes[0];
}

