# Angular Instafeed
## Personal Instagram Angular.js Feed

Made by Joe Carlson - 2016
See more at www.callmejoe.net

Basic example usage of factory method to make a request to the instagram api to get a certian amount of images with an Angular.js switchable grid.

This is project demo that utilizes the [Angular Instafeed NPM Package](https://www.npmjs.com/package/angular-instafeed)

[Check out a live demo of this plugin here](https://www.callmejoe.net/portfolio/instafeed-angular-js-instagram-feed/)

### Reviews
"Oh yes. Absolutely spot on ... works like a charm... The cleanest plugin i've ever worked with - clean, straightforward and works out of box." - tenzopro

![instfeed-demo](https://cloud.githubusercontent.com/assets/4650739/13266964/ac6deb2e-da1e-11e5-9e80-773c19327caa.jpg)

## Requirements
Make sure you have Node installed locally [node.js](https://nodejs.org/en/)

This uses [gulp](http://gulpjs.com/) for build automation during development so you should have it installed globally

## Installing
* Download and unpack [Angular Instafeed](https://github.com/JoeKarlsson1/Angular-Instafeed/tree/npm_example). Or alternatively checkout from source:

    ```bash
    $ git clone https://github.com/JoeKarlsson1/Angular-Instafeed
    ```

* Checkout the NPM example branch to get the demo application.
    ```bash
    $ git checkout npm_example
    ```

* Next, install all project dependencies.

    ```bash
    $ npm install
    ```

* You will also need to get your user ID go run this program. To get your User ID, go to [this site](http://jelled.com/instagram/lookup-user-id) and enter your Instagram user name to get your user ID.
  *  Note: Your User ID is different than your User Name. Your User ID is a string that looks like ```12345678```

* Once you have these, navigate to ```src/js/config.json/``` and configure your ```client_id``` and your ```user_id```
    *__Note:__ You will need to change ```config_example.json``` name to ```config.json```

* Run Gulp.

    ```bash
    $ gulp
    ```

* Open your browser to [http://localhost:8080/](http://localhost:8080/)

## Tech
Instafeed uses a number of open source projects:
* [AngularJS] - HTML enhanced for web apps!
* [Gulp] - the streaming build system
* [Gulp Connect] - Live reloading gulp package
* [Rework] - CSS precomiler
* [Browserify] - Bringing NPM javascript packages to the frontend.

##Contributing
1. Fork it!
2. Create your feature branch: ```git checkout -b my-new-feature```
3. Commit your changes: ```git commit -am 'Add some feature'```
4. Push to the branch: ````git push origin my-new-feature````
5. Submit a pull request :D

See more at www.callmejoe.net

###Final Thoughts
This was an experiment to experiment with creating NPM packages and with using NPM as a front end tool. I think NPM can be very useful for storing front end dependencies, however, I learned that it adds lots of complications in the form of needing lots of additional build tools.

If this NPM package is helpful to you, I would love to hear your thoughts, and feedback. Thank you so much!

##License
The MIT License (MIT)

Copyright (c) 2016 Joseph Carlson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
