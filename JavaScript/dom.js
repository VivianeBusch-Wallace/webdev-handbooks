// ========= Accessing Elements =========
// (source of some parts: https://fundamentals.generalassemb.ly/11_unit/dom-cheatsheet.html)

// Before we can manipulate an element, we need to find, or select, the element(s) that we want to change.
// In order to find an element, we need to search through the document.

// 1. Query Selector
// Uses the CSS selector to select the FIRST matching element within a document
document.querySelector("div"); // regular tag
document.querySelector(".classname"); // classname attribute
document.querySelector("#id"); // id attribute
document.querySelector("div p"); // access first p nested inside div
// what you write into the query selector is exactly like CSS selectors
// Note:
// of course make sure your spelling is correct!
// also check querySelectorAll()

// 2. Get Element By ID
// Selects an individual element using a specific id
document.getElementById(id);
// If there is no element with this id, this function returns null
// Remember:
// All IDs in html are/should be unique, although similar IDs are not the same as classnames!
// Note:
// The id parameter has no #,
// ids are case sensitive and
// of course make sure your spelling is correct!

// Query Selector All
querySelectorAll();

// Get Elements By Class Name
// Allows you to select all elements with a given class attribute
getElementsByClassName();

// Get Elements By Tag Name
// Locates all elements that match a given tag name
getElementsByTagName();

// Add Event Listener to a For Each Loop
divs.forEach((el) => el.addEventListener("click", change));

// childElementCount will tell you how many child elements this element has
// firstChild , lastChild
// firstElementChild , lastElementChild
// nextSibling , previousSibling
// nextElementSibling , previousElementSibling
// innerHTML ,  innerText , textContent

// Traversing
// Node vs Element Nodes
// Short summary
// childElementCount will tell you how many child elements this element has
// firstChild , lastChild
// firstElementChild , lastElementChild
// nextSibling , previousSibling
// nextElementSibling , previousElementSibling
// innerHTML ,  innerText , textContent

const prevElement = document.querySelector("#second").previousElementSibling;
console.log(prevElement);
const prevSibling = document.querySelector("body").previousSibling;
console.log(prevSibling);
// firstChild
const firstEleChild = document.querySelector("#text").firstElementChild;
console.log(firstEleChild);

// textContent gets the content of all elements, including <script> and <style> elements. In contrast.
// innerText only shows “human-readable” elements.
// more on that: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText
// Differences from innerText
// Don't get confused by the differences between Node.textContent and HTMLElement.innerText.
// Although the names seem similar, there are important differences:
let paragraph = document.querySelector("#text");
// textContent gets the content of all elements, including <script> and <style> elements.
// textContent returns every element in the node.
console.log(`This is textContent: ${paragraph.textContent}`);
// innerText only shows “human-readable” elements.
// innerText is aware of styling and won’t return the text of “hidden” elements.
console.log(`This is innerText: ${paragraph.innerText}`);
// Moreover, since innerText takes CSS styles into account, reading the value of innerText triggers a reflow
// to ensure up-to-date computed styles. (Reflows can be computationally expensive, and thus should be avoided when possible.)
// IMPORTANT! >>
// Unlike textContent, altering innerText in Internet Explorer (version 11 and below) removes child nodes from the element
// and PERMANENTLY destroys all descendant text nodes. It is impossible to insert the nodes again into any other element
// or into the same element after doing so.
// Differences from innerHTML
// Element.innerHTML returns HTML, as its name indicates.
// Sometimes people use innerHTML to retrieve or write text inside an element,
// but textContent has better performance because its value is not parsed as HTML.
// Moreover, using textContent can prevent XSS attacks.
console.log(`This is innerHTML: ${paragraph.innerHTML}`);
// >>> Just always use textContent

// nodeType list, 1: div, p. 8: comment
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// more on parentNode
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
// nodeName, nodeType, id, innerText

// closest
// check: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
// The closest() method traverses the Element and its parents (heading toward the document root)
// until it finds a node that matches the provided selector string.
// Will return itself or the matching ancestor.
// If no such element exists, it returns null.
let text = document.querySelector(".nested-p");
let closestEle = text.closest(".cool");
console.log(`The closest ".cool" element of ".nested-p" is ${closestEle}`);
// This will return null
let text2 = document.querySelector(".nested-p");
let closestEle2 = text2.closest("p");
console.log(`The closest "p" element of ".nested-p" is ${closestEle2}`);
// This will return .nested-p itself
console.log({ closestEle2 });
console.log(closestEle2);
// matches method
let names = document.querySelectorAll("li");
names.forEach((name) => {
  console.log(name.nodeType); //will return the value of our nodeType, here it is 1
  if (name.matches(".teacher"))
    console.log(`${name.textContent} is a teacher for FBW 48-1`);
});
// children method
const allChildren = document.querySelector("body").children;
console.log(allChildren);
console.log("<< these are children in form of an HTMLCollection");
let menuList = document.getElementById("menu");
console.log(menuList.firstElementChild);
console.log(menuList.lastElementChild);

// all comments in your html page should be printed in console

let allEle = document.querySelectorAll("*");
console.log("This is a NodeList/array of all elements inside the document >>");
console.log(allEle); // these are all elements inside html incl. head
console.log("childNodes start >>");
allEle.forEach((el) => console.log(el.childNodes));
console.log(
  " << childNodes end. These are all childNodes from the html nodelist"
);
allEle.forEach((el) =>
  el.childNodes.forEach((node) => {
    // console.log("iterating through all childNodes");
    if (node.nodeName == "#comment") {
      // << instead you can also use: node.nodeType === 8
      console.log(node);
    }
  })
);
// all comments are ordered in parent to children order, parents first, then children, then children's children

console.dir(element);
// prints out every element we have (?)

// "this" will be referring to the current working object

// All the different types of console outputs:
console.log("This is the log of element:" + element);
console.info("This is the info of element:" + element);
console.dir("This is the dir of element:" + element);
console.error("Hi, this is error.");
console.warn("Hi, this is warn.");
console.table("This is the table of element:" + element);
