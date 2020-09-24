/*
 basic model of a fetch

1. The fetch() method takes in your desired resource's path as a mandatory argument.
2. The Request object returns a Promise that resolves to the argument's Response.
3. After retrieving a Response, a multitude of methods define the body content and how it will be handled.
4. Please note that you can use the Request() and Response() constructors to directly create requests and responses, but they are more likely to be created by other API actions.
*/

fetch("http://example.com/movies.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });
