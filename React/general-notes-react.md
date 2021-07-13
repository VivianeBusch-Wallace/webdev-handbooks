## Hooks

you can only use hooks inside function components
hooks always have to be called in the same order in every component render
hooks cannot be nested in anything: that means they cannot be called conditionally, not inside functions, not inside loops, not inside if statements, for example inside an if() {useState()}, you will receive an error message from react

### useState

"useState is like a taxi (for our state)" - Tareq Almasri

everytime you use useState you have to import it in the top of your file first:
import {useState} from 'react';
most of the time you will import it together with React like so:
import React, {useState} from 'react';

useState(3) >> starts the useState with the initial value 3
useState("") >> starts the useState with the initial value of an empty string

always returns an array with two values
theoretical example:
const arr = useState()
but arr is going to be destructured right away:
const [state, functionToUpdateCurrentStateOfState] = useState()
non-pseudo:
const [count, setCount] = useState(0);

every time setCount is being called it is rerendering our component with the new value of count
we should always use a function inside setState because we don't want it to overwrite itself
example:
function decrementCount() {
setCount(count-1)
setCount(count-1)
}
<< with this we would decrement the state 'count' by 1, not by two because we did not integrate our previous state into setCount
this is how to write it with prevState:
function decrementCount() {
setCount(prevCount => prevCount-1)
}
<< this function will subtract 1 with every trigger of the function decrementCount
function decrementCount() {
setCount(prevCount => prevCount-1)
setCount(prevCount => prevCount-1)
}
<< this function will subtract 2 with every trigger of the function decrementCount

useState can also take an initial value as a function
but there is a big difference between putting it in directly and just calling it inside, useState(function)
this function only runs once with the first time the component is rendered:
useState(() => {
const statement = "this anonymous function will only run once the very first time our component renders";
console.log(statement);
return statement
})
this function runs everytime the component is rendered:
(not time to add notes, just watch this: https://www.youtube.com/watch?v=O6P86uwfdR0)
