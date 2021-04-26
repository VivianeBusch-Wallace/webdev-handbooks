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
