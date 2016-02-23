# Angular Instafeed
## Personal Instagram Angular.js Feed

Made by Joe Carlson - 2016
See more at www.callmejoe.net

Basic example usage of factory method to make a request to the instagram api to get a certian amount of images with an Angular.js switchable grid.

[Check out a live demo of this plugin here](https://www.callmejoe.net/portfolio/instafeed-angular-js-instagram-feed/)

### Reviews
"Oh yes. Absolutely spot on ... works like a charm... The cleanest plugin i've ever worked with - clean, straightforward and works out of box." - tenzopro

![Angular Instafeed](https://www.callmejoe.net/wp-content/uploads/2015/05/instfeed-demo.jpg)

## Installing

* Download and unpack [Angular Instafeed](https://github.com/JoeKarlsson1/Angular-Instafeed). Or alternatively checkout from source:

    ```bash $ git clone https://github.com/JoeKarlsson1/Angular-Instafeed```
    ```bash $ cd angular-instafeed```

* Next, inside the project, you need to [register as a Instagram Developer}(https://instagram.com/developer/clients/manage/) to get your Client ID

* You will also need to get your user ID go run this program. To get your User ID, go to [this site](http://jelled.com/instagram/lookup-user-id) and enter your Instagram user name to get your user ID.
  *  Note: Your User ID is different than your User Name. Your User ID is a string that looks like ```12345678```
* Once you have these, navigate to ```js/instagram/application.js``` and configure your ```client_id``` and your ```user_id```
* Run the app anyway your usually run your web apps. Or open ```index.html`` in the browser.

## Tech
Instafeed uses a number of open source projects:
* [AngularJS] - HTML enhanced for web apps!
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [Gulp] - the streaming build system
* [keymaster.js] - awesome keyboard handler lib by [@thomasfuchs]
* [jQuery] - duh

##Contributing
1. Fork it!
2. Create your feature branch: ```git checkout -b my-new-feature```
3. Commit your changes: ```git commit -am 'Add some feature'```
4. Push to the branch: ````git push origin my-new-feature````
5. Submit a pull request :D

See more at www.callmejoe.net

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
