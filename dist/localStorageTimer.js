(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function(window){
     function putItemwithExpiry(key, value, expiry){
       if(expiry instanceof String)
           expiry = parseInt(expiry);
       window.localStorage.setItem(key, value);
       setTimeout(function(){
         window.localStorage.removeItem(key);
       }, expiry * 1000);
     };

    return {
      getItem: function(key){
        return window.localStorage.getItem(key);
      },
      setItem: function(key, value, options){
        options = options || {};
        var expiry = options.expiry || 60;
        putItemwithExpiry(key, value, expiry);
      },
      removeItem: function(key){
        window.localStorage.removeItem(key);
      }
    }
})(window);

},{}]},{},[1]);
