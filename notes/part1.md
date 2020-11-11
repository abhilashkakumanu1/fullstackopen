## Introduction to React

Although JSX looks like HTML, we are actually dealing with a way to write JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript. 

As JSX is JavaScript, it can be directly used inside JavaScript. But, inorder to use Javascript inside JSX we have to **enclose it in curly braces**.

JSX is "XML-like", which means that every tag needs to be closed. 

**props: passing data to components** - The function defining the component has a parameter props. As an argument, the parameter receives an object, which has fields corresponding to all the attributes or "props" the user of the component defines. There can be an arbitrary number of props and their values can be "hard coded" strings or results of JavaScript expressions. If the value of the prop is achieved using JavaScript it must be wrapped with curly braces.

React components can only return a single element. So, everything should be generally kept inside a single element. Instead of bloating the DOM with unnecessary divs we can use React Fragments(`<> </>`)

## JavaScript

The contents of the array can be modified even though it is defined as a `const`. Because the array is an object the variable always points to the same object. However, the content of the array changes as new items are added to it.

One characteristic of the functional programming paradigm is the use of immutable data structures. In React code, it is preferable to use the method `concat`, which does not add the item to the array, but creates a new array in which the content of the old array and the new item are both included.

**Object methods and this**: In JavaScript the value of this is defined based on how the method is called.

```javascript
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.greet()       // "hello, my name is Arto Hellas" gets printed

const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"
```

When calling the method through a reference the value of this becomes the so-called global object and the end result is often not what the software developer had originally intended.

One situation leading to the "disappearance" of this arises when we set a timeout to call the greet function on the arto object, using the setTimeout function.

```javascript
const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

setTimeout(arto.greet, 1000)
```

As mentioned, the value of this in JavaScript is defined based on how the method is being called. When setTimeout is calling the method, it is the JavaScript engine that actually calls the method and, at that point, this refers to the global object. We can preserve original `this` a method called "bind".

```javascript
setTimeout(arto.greet.bind(arto), 1000)
```

## Component State and event handlers

`useState` hook takes the intial value and outputs a two element array (stateName, setStateName).

Usually defining event handlers within JSX-templates is not a good idea. It's ok if our event handlers are so simple. Generally we define them as separate function (handleClick is good name for click handler).

One best practice in React is to **lift the state up** in the component hierarchy. React Docs recommend lifting the shared state up to their closest common ancestor.

Changing parent element state rerenders all its children!

## A more complex state, debugging React apps

We can define the new state object a bit more neatly by using the object spread syntax. 

**It is forbidden in React to mutate state directly**, since it can result in unexpected side effects. Changing state has to always be done by setting the state to a new object. If properties from the previous state object are not changed, they need to simply be copied, which is done by copying those properties into a new object, and setting that as the new state.

**Debugging**: Old school, print-based debugging is always a good idea. If the component is not working as intended, it's useful to start printing its variables out to the console. In order to do this effectively, we must transform our function into the less compact form and receive the entire props object without destructuring it immediately.

Dev tools shows the state of hooks in the order of their definition.

**Rules of Hooks**: The `useState` function (as well as the `useEffect`) must not be called from inside of a loop, a conditional expression, or any place that is not a function defining a component. This must be done to ensure that the hooks are always called in the same order, and if this isn't the case the application will behave erratically.

**Function that returns a function**: Another way to define an event handler is to use function that returns a function. Functions returning functions can be utilized in **defining generic functionality that can be customized with parameters**. So, when we want the event handler to accept a parameter, we use this concept
