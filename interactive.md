# Javascript

## Interactive

### Link javascript file to html

```html
<script src="path"></script>
```

### The process of loading javascript

> **Put the `<script></script>` tag in the <head> element and to use the defer and async attributes.**

HTML parsers and loads elements in sequence.  When HTML parsers encounters a `<script></script>` element, then executes its contents before parsing the rest of the HTML, which results a slow time in loading the web page.

#### defer

(HTML4) introduced the `defer` and `async` attributes. The `defer` attribute specifies scripts should be executed after the HTML file is completely parsed.

```html
<script id="blue" src="turnBlue.js" defer></script>
```

#### Async

The script will execute immediately after it has been downloaded, while the html parsing the rest elements.

```html
<script id="blue" src="turnBlue.js" async></script>
```

### DOM

#### Tree-structure `.parentNode` `.children` `.firstChild`

A `parent node` is the closest connected node to another node in the direction towards the root.

A `child node` is the closest connected node to another node in the direction away from the root.

Each DOM element node has a `.parentNode` and `.children` property. The property will return a list of the element’s children and return null if the element has no children.

The `.firstChild` property will grant access to the first child of that parent element.

```javascript
let first = document.body.firstChild;
first.innerHTML = 'I am the child!';

let parent = first.parentNode;
parent.innerHTML = 'I am the parent and my inner HTML has been replaced!';
```

`node` is an intersecting point in a tree that also contains data.

the DOM allows us to access a node’s attributes, such as its `class`, `id`, and `inline style`.

#### The `document` keyword

The `document` gives the access to the root node of the DOM tree.
ex: `document.body`

#### Modify content - `.innerHTML`

```javascript
document.body.innerHTML = 'This is the text of the body element';
```

The `.innerHTML` property can also add any valid HTML, including properly formatted elements. 

```javascript
document.body.innerHTML = <h2>'This is the text of the body element'</h2>;
```

#### Select element by CSS selector `.querySelector` `.getElementByID`

You can also use other CSS selectors such as an element’s `.` class or its `# ID`.

Another option, if you want to access elements directly by their id, you can use the aptly named `.getElementByID() `function:

```javascript
document.querySelector('h1').innerHTML = '<h1>Most popular TV show searches in 2016</h1>'

document.getElementById('fourth').innerHTML = 'Fourth Element';
```

#### style element `.style.property`

The `.style` property of a DOM element provides access to the inline style of that HTML tag.

```javascript
document.body.style.backgroundColor = '#201F2E';

//or

let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue';
```

#### Create or delete element `.createElement(tagName)` `.appendChild()`

create element

```javascript
//Create an li element using the .createElement() 
//method and save it in a variable called newDestination.
let newDestination = document.createElement('li');

//On the following line, assign the element an id of 'oaxaca' by using the id property on newDestination.
newDestination.id = 'oaxaca';

//assign the element the text 'Oaxaca, Mexico' by using the .innerHTML property on newDestination.
newDestination.innerHTML = 'Oaxaca, Mexico';

//Append the new element you created as the last child of the list with the ID more-destinations
document.getELementById('more-destinations').appendChild(newDestination);
```

remove element

```javascript
//select the parent element
onst parent = document.querySelector("#more-destinations");
//select the child element
const child = document.querySelector("#oaxaca");
//remove the selected child node from the parent node
parent.removeChild(child);
```

#### Event `.onclick`

Events can include anything from a click to a user mousing over an element.

```javascript
let element = document.querySelector("button");

function turnButtonRed (){
  element.style.backgroundColor = 'red';
  element.style.color = 'white';
  element.innerHTML = 'Red Button';
}

element.onclick = turnButtonRed;
```

#### Event handler function - `.onevent`

*`.onevent` add one event handler function to be attached to the event target.*

```Javascript
eventTarget.onclick = eventHandlerFunction;
```

#### Event handler function - `.addEventListener()`

*Add multiple event handler functions to be attached to the event target*

```javascript
// event target
let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
function showInfo() {
  moreInfo.style.display = 'block';
}
readMore.addEventListener('click', showInfo);
```

> The `.addEventListener()` method takes two arguments: 
    1. an event name in string format 
    2. an event **handler function**. 

#### Stop “listening” for an event - .removeEventListener()

```javascript
eventTarget.removeEventListener('click', eventHandlerFunction);
```

#### Event Object Properties

JavaScript stores events as **Event objects** with their related data and functionalities as properties and methods.

1. the `.target` property to reference the element that the event is registered to.
1. the `.type` property to access the name of the event.
1. the `.timeStamp` property to access the number of milliseconds that passed since the document loaded and the event was triggered.

```javascript
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = event.timeStamp;
}

share.addEventListener('click', sharePhoto);
```

#### Event types

- Most events in the DOM take place without being noticed because there are no event handlers connected to them.
- Some registered events don’t depend on user interactions to fire. 

> **Mouse Event**

```javascript
let increaseWidth = function() {
  itemOne.style.width = '500px';
};
itemOne.addEventListener('mouseover', increaseWidth);

let changeBackground = function() {
  itemTwo.style.backgroundColor = 'grey';
};
itemTwo.addEventListener('mouseup', changeBackground);

let changeText = function() {
  itemThree.innerHTML = 'The mouse has left the element';
};
itemThree.addEventListener('mouseout', changeText);

let showItem = function() {
  itemFive.style.display = 'block';
};
itemFour.addEventListener('mousedown', showItem);
```

> **Keyboard Event**

```javascript
document.addEventListener('keydown', up);
document.addEventListener('keyup', down);
```