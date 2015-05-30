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

var formatTime = (arr, base) => {
    return arr.map((v) => {
        var val = v.toString(base).toUpperCase()
        return val.length < 2 ? ("0" + val) : val
    })
}

var timeCheck = setInterval(() => {
    var d = new Date()
    var timeArr = [d.getHours(), d.getMinutes(), d.getSeconds()]
    var regTime = formatTime(timeArr, 10)
    var hexTime = formatTime(timeArr, 16)
    document.querySelector('.time').innerHTML = regTime.join(':');
    document.querySelector('.hextime').innerHTML = hexTime.join(':');
    var bkgr = `#${hexTime.join('')}`
    document.querySelector('.container').style['background'] = bkgr;
    document.querySelector('.line').style['width'] = (((timeArr[2]/60)*100)+'%')
}, 1000)

