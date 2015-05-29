"use strict";

var Promise = require('es6-promise').Promise
    // just Node?
    // var fetch = require('node-fetch')
    // Browserify?
    // require('whatwg-fetch') //--> not a typo, don't store as a var

// es6 polyfills, powered by babel
require("babel/register")

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
// start app
// new Router()
// }

var timeCheck = setInterval(() => {
    var d = new Date()
    var timeArr = [d.getHours(), d.getMinutes(), d.getSeconds()].map((v) => {
        var stringTime = v.toString()
        return v < 10 ? ("0"+stringTime) : stringTime
    })
    var timeString = timeArr.join(': ')
    document.querySelector(".time").innerHTML = timeString;
}, 1000).then
