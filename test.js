var assert = require('assert');


function storageMock() {
    var storage = {};

    return {
        setItem: function(key, value) {
            storage[key] = value || '';
        },
        getItem: function(key) {
            return storage[key] || null;
        },
        removeItem: function(key) {
            delete storage[key];
        },
        get length() {
            return Object.keys(storage).length;
        },
        key: function(i) {
            var keys = Object.keys(storage);
            return keys[i] || null;
        },
        clear: function(){
          storage = {};
        }
    };
};

window =  {};
window.sessionStorage = storageMock();
var Storage = require('./index.js');

describe('localStorageTimer Test', function() {
    this.timeout(10000);

    afterEach(function() {
        window.sessionStorage.clear();
    });

    it('should put the Item on to storage', function() {
        var key = "hello";
        var value = "world";
        Storage.setItem(key, value);
        assert.equal("world", Storage.getItem(key));
    });

    it('should invalidate the key after expiry time', function(done) {
        var key = "hello";
        var value = "world";
        Storage.setItem(key, value, {
          expiry: 1
        });
        setTimeout(function(){
          var value = Storage.getItem(key);
          assert.ok(value == null || value == undefined);
          done();
        },2000);
    });

    it('should vaidate the key within expiry', function(done){
      var key = "hello";
      var value = "world";
      Storage.setItem(key, value, {
        expiry: 5
      });
      setTimeout(function(){
        var value = Storage.getItem(key);
        assert.ok(value == "world");
      },2000);
      setTimeout(function(){
        var value = Storage.getItem(key);
        assert.ok(value != "world");
        done();
      },6000);
    });

});
