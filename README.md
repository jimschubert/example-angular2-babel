# example-angular2-babel

This is a simple example of using Angular2 with ES6 syntax and compiling it all into a bundle using browserify and babel.

Install:

```
npm install
```

Run:

```
npm start
```

This will run the gulp build task and start a local http server on `http://localhost:8000`. Open a browser and check it out.

## Notes

* Angular2 is imported *precompiled*. This means only your code is running through Babel. There's no real need to reference Angular2's es6 code.
* Your code is bundled with Angular2. This creates a single large JavaScript file. This may not be what you want. You may find it easier to use jspm with client-side module loading and/or transpiling.
* I don't particularly like this approach.
