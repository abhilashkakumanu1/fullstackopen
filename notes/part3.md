# Programming a server with NodeJS and Express

## Node.js and Express

Node.js uses so-called *CommonJS modules*. The reason for this is that the Node ecosystem had a need for modules long before JavaScript supported them in the language specification.

**Sematic versioning**: Major release(Not backward compatible).Minor release(new features).patch(bugs)
- Patch releases: 1.0 or 1.0.x or ~1.0.4
- Minor releases: 1 or 1.x or ^1.0.4
- Major releases: * or x

**devDependencies**: By development dependencies, we are referring to tools that are needed only during the development of the application, e.g. for testing or automatically restarting the application, like nodemon.

**REST**: Singular things, like notes in the case of our application, are called *resources* in RESTful thinking. Every resource has an associated URL which is the resource's unique address. One convention is to create the unique address for resources by combining the name of the resource type with the resource's unique identifier. If we define the resource type of notes to be note, then the address of a note resource with the identifier 10, has the unique address www.example.com/api/notes/10.

parameters on the object `req.params` are always strings. We have to convert them to corresponding type before comparing them.

We have to check for the case when there is no note of the requested id. Server sends a response with *200 OK* status code and *content-length: 0*. But, we have to manual send *404* response by using `res.status(404).end()`

**The Visual Studio Code REST client**: We can use the VS Code REST client plugin instead of Postman. We make a directory at the root of application named requests. We save all the REST client requests in the directory as files that end with the .rest extension. By clicking the Send Request text, the REST client will execute the HTTP request and response from the server is opened in the editor. Problems can occur with the VS REST client if you accidentally add an empty line between the top row and the row specifying the HTTP headers. In this situation, the REST client interprets this to mean that all headers are left empty, which leads to the backend server not knowing that the data it has received is in the JSON format.

**HTTP resquest types**: The HTTP standard talks about two properties related to request types, **safety** and **idempotence**. Safety means that the executing request must not cause any side effects in the server. By side-effects we mean that the state of the database must not change as a result of the request, and the response must only return data that already exists on the server. All HTTP requests except POST should be idempotent. This means that if a request has side-effects, then the result should be same regardless of how many times the request is sent.

**Middleware**: Middleware are functions that can be used for handling request and response objects. The json-parser we used earlier takes the raw data from the requests that's stored in the request object, parses it into a JavaScript object and assigns it to the request object as a new property body.

## Deploying app to internet