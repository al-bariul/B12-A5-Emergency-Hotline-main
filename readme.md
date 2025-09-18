<!-- 1 -->

gelElementById = select only id selector. and as we know id selector are alway unique
getElementsByClassName = It can select multiple or single class at a time
querySelector = It only select the first element
querySelectorAll = select all match element. And return it inot a nodelist. And nodelist are arrar type object.

<!-- 2 -->

const newElement = document.createElement("div");
newElement.textContent = "Hello, I am new!";
newElement.className = "new-class";
document.body.appendChild(newElement);

<!-- 3 -->

Event Bubbling is the process where an event starts from the target element and bubbles up parent element

<!-- 4 -->

Event Delegation is a pattern where we attach a single event listener to a common parent element.

<!-- 5 -->

preventDefault() = stops the default browser action
stopPropagation() = Stops the event from bubbling up to parent elements
