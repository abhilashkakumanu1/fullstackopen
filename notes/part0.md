**The 1st rule of web development**: Always keep the Developer Console open on your web browser. Shortcut: `F12`.

The chain of events caused by opening the page can be represented using [sequence diagrams](https://www.websequencediagrams.com/).

## Types of web applications

1. **Traditional web applications**: Browser fetches the HTML document detailing the page's structure and textual content from the server. The server has formed document somehow (either statically - returning existing document or dynamically - creating a document on the fly using data from database). In traditional web applications browser is "dumb" (as all application logic is on the server). A server can be created using Java Spring or Python Flask or Ruby on Rails or Express from Node.js.

2. **Running application logic on the browser**: JavaScript file is included to add logic to the frontend part. We can create list of notes client side by fetching notes using Xhr request which uses the mechanism of event handlers. Event handler functions are called callback functions. The application code does not invoke the functions itself, but the runtime environment - the browser, invokes the function at an appropriate time, when the event has occurred.

    AJAX is the term that is introduced to describe a new revolutionary approach that enabled the fetching of content to web pages using JavaScript included within the HTML, without the need to rerender the page. Prior to the AJAX era, all web pages worked like the traditional web application. 

4. **Single page app**: SPA-style websites don't fetch all of their pages separately from the server, but instead comprise only one HTML page fetched from the server, the contents of which are manipulated with JavaScript that executes in the browser. 

**JavaScript libraries**: In the initial days (when traditional web apps are predominant) jQuery is used to manipulate DOM. Later BackboneJS is used to develop SPA. After that Google's Anglular became defacto. But as version 2 is not backwards compatible with version 1 developers moved away from it.

**Full stack web development**: Practically all web applications have (at least) two "layers": the browser, being closer to the end-user, is the top layer, and the server the bottom one. There is often also a database layer below the server. We can therefore think of the architecture of a web application as a kind of stack of layers.`