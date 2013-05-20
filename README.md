# Backbone.PJAX

**WARNING: NOT PRODUCTION READY, STILL A WIP**

Just a few utilities for web apps using both PJAX and Backbone.

## Backbone.PJAX.Router

Creates a simple router, aware of the container to update with new data. It triggers a few pjax events too `pjax:start`, `pjax:success`, `pjax:error`

### Example usage

```javascript
var Router = Backbone.PJAX.Router.extend({
  container: "#container", // This is the only difference from a normal router
  routes: {
    "test": "test"
  },

  test: function(){
    console.log("Test!");
  }
});

$(function(){
  window.router = new Router();
  Backbone.history.start({pushState: true});

  $("a").on("click", function(event){
    event.preventDefault();
    router.navigate($(event.target).attr("href").slice(1));
  });
});
```

## Contributing

1. Fork;
2. Write code, with tests;
3. `make test`;
4. Create a pull request.

## License

Licensed under MIT license

Copyright (c) 2013 Jerome Gravel-Niquet

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
