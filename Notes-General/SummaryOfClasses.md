Summary of classes by category or tags

(if something was added to the file later it might be missing)

For Live-Coding:

02-02-2021
https://github.com/Fbw-48/live-coding/blob/main/feb/02-02/index.js
OBJECT METHODS
PRACTICE
ASSIGNMENT SOLUTIONS FOR: objects-extra-work-VivianeBusch-Wallace/assignments.js (classroom github)

more object stuff:
accessing object properties:
bracket notation
dot notation
assigning values with dot notation
assigning values with bracket notation
creating a new object with class
for loop/looping objects:
for ... of ...
object method(?):
print function in object/how to console.log with objects
Object.keys()
Object.values()
Assigning properties with Object.assign()/
putting objects and properties together with .assign
Object.defineProperty()
Object.defineProperties()

practicing object stuff:
loop through object and print
return an array of properties from object
print stuff with a method from object
array of all values in object's properties

Object.entries()

delete an object property:
delete objName.keyName

checking if an object has a property:
objectName.hasOwnProperty()

protecting an object from changes:
Object.seal

More practice:
check if number is within given range of an object's min and max properties

scrabble: count maximum score of scrabble tiles
special version with reduce

empty object: checking if an object is empty: Object.keys(obj).length

counting letters: returning the count as value of each letter
special solution with two functions and two loops

free shipping: does the order get free shipping or not

programming object:
add sth to value array in an object
delete a keyword
add a new key
loop to console.log
object method to check values
seal object

counting letters again

zodiac sign (spicy)

##############################################
APRIL 2021

21.04.2021
https://github.com/Fbw-48/live-coding/tree/main/apr/21-04
Used: SCSS, HTML, JS
DOM
onclick() in button
onclick show result

```
sass structure inside folder src:
> vendor: __vendor-dir.scss, _normalize.scss, _fontawesome.scss
> layouts: __layouts-dir.scss
> components: __components-dir.scss
> base: __base-dir.scss
> abstracts: __abstracts-dir.scss, _fonts.scss, _mixins.scss, _variables.scss

//Variables
// colors
// $my-color: orange;
// sizes

//Font Imports
//@include font-face("font name", "../fonts/font-dir-name", 300, $file-formats: ttf);

JS file:
// Any code you will write for your website (in the future!) should go here
//   Javascript in the browser
//  XMl, JSON, jQuery, Ajax, API

//  JS Engines:
//   V8 (Chrome, Node, Edge)
//    SpiderMonkey (Firefox)
//    Chakra (Internet Explorer)

//   DOM aka Document Object Module
//   DOM tree.

// Adding javascript to HTML:
// - The `<script>` tag
// - External JS with `<script src="...">`

// The Window object
// (objects functions and variables) are member of window object.
// document object is also member of the window object
// the window object contain many Properties and methods

// -Host object-
// are objects supplied by a certain environment.
// Like in browser environment you will find window
// Or in node.js environment you will find Process

// -Native object-
// are standard built-in objects provided by Javascript.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// window.alert("Hi");
// let username = window.prompt("Please enter your name");

window.document.getElementById("main")
let num1 = document.querySelector("#num1").value;

switch (math) {
    case "+":
      mathResult = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      mathResult = parseInt(num1) - parseInt(num2);
      break;
    case "*":
      mathResult = parseInt(num1) * parseInt(num2);
      break;
    case "/":
      mathResult = parseInt(num1) / parseInt(num2);
      break;
  }

```

22.04.21
https://github.com/Fbw-48/live-coding/tree/main/apr/22-04
Used: HTML, CSS, JS
html:
input checkbox
onchange execute function

```
JS:
// window.alert === alert()

// -Node-
// In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.

// document.querySelectorAll() will return A non-live NodeList 🧐
// -NodeList-
// NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

// Node tree https://dom.spec.whatwg.org/#concept-node

// + > ~
const highlight = document.querySelectorAll("li[class='highlight']");
console.log(highlight);
highlight[0].style.backgroundColor = "blue";

const moreClass = document.querySelector(".main");
moreClass.classList.add("text");
moreClass.classList.add("cool", "flex-size");
console.log(moreClass.classList);

let classArr = ["classOne", "classTwo"];
// adding more classes to the div using ...
moreClass.classList.add(...classArr);
console.log(moreClass.classList);

// keep in mind font-size in js fontSize
moreClass.style.color = "red";
moreClass.style.cssText = "font-size: 2.0rem; color: blue;";
forEach((element) => {some stuff})

```

adding classes to classlist of html element using JS
looping through querySelectorAll("element item")

29.04.21
https://github.com/Fbw-48/live-coding/tree/main/apr/29-04
Used: SCSS, HTML, JS

html:
onclick() in button

```
js:
document.addEventListener("load", console.log("Hi"));
const btn = document.getElementById("more");
console.dir(btn);
button onclick execute function
btn.onclick = () => {
  divText.innerHTML += "Hi I am onclick from JavaScript <br>";
};
.style.backgroundcolor
header.addEventListener("mouseenter", changeBg);
header.addEventListener("mouseleave", reset);
// - Keyboard Events:
// `keydown`, `keyup`
function keyUp(e) {
  console.log(e);
  this.style.backgroundColor = "orange";
  if (e.code == "KeyS") alert("You are cool");
}
```

klick events: keyuo, keydown, keypress
mouse events: mouseenter, mouseleave
queryselector etc.
change background color

simple game:
simple game of move onto the goal area by clicking up, down, right, left

##############################################
May 2021
