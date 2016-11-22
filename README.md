# Angular Instafeed
## Personal Instagram Angular.js Feed

Made by Joe Carlson - 2016

See more at www.callmejoe.net

Basic example usage of factory method to make a request to the instagram api to get a certian amount of images with an Angular.js switchable grid.

[Check out a live demo of this plugin here](https://www.callmejoe.net/portfolio/instafeed-angular-js-instagram-feed/)

**Note:** This is a front-end NPM package, so you will need to use build tools in order to get this up and running on your application. Lucky for you, I setup a demo GitHub repository that will get you up and running with Angular Instafeed quickly.

You can check out my Angular Instafeed build demo here:

[Anngular Instafeed Demo](https://github.com/JoeKarlsson/Angular-Instafeed/tree/npm_example)

### Reviews
"Oh yes. Absolutely spot on ... works like a charm... The cleanest plugin i've ever worked with - clean, straightforward and works out of box." - tenzopro

![instfeed-demo](https://cloud.githubusercontent.com/assets/4650739/13266964/ac6deb2e-da1e-11e5-9e80-773c19327caa.jpg)

## Installing

* In your project directory

    ```bash
    $ npm i angular-instafeed --save
    ```

* In the HTML file you want to add Instafeed, you will need to add a div with the ID "instafeed".

    ```
    <div id="instafeed"></div>
    ```

* You will also need to get your user ID go run this program. To get your User ID, go to [this site](http://jelled.com/instagram/lookup-user-id) and enter your Instagram user name to get your user ID.
  *  Note: Your User ID is different than your User Name. Your User ID is a string that looks like ```12345678```

* In your main JavaScript file, you will need to require the module and invoke the function. The module takes two parameters, the first is your client ID and the second is your User ID.

    ```
    const instafeed = require('angular-instafeed');
    instafeed([client_id], [user_id]);
    ```

* This package includes CSS styles that can be used. If you choose to use these, you will need to precomile your CSS files after importing the CSS from the Angular Instafeed

* Finish setting up your build tools to precompile your JavaScript and CSS. For a working example take a look at my demo [Anngular Instafeed](https://github.com/JoeKarlsson/Angular-Instafeed/tree/npm_example).
    * I used Gulp, broswerify, and Rework for my demo.

## Tech
Instafeed uses a number of open source projects:
* [AngularJS] - HTML enhanced for web apps!

##Contributing
1. Fork it!
2. Create your feature branch: ```git checkout -b my-new-feature```
3. Commit your changes: ```git commit -am 'Add some feature'```
4. Push to the branch: ````git push origin my-new-feature````
5. Submit a pull request :D

See more at www.callmejoe.net