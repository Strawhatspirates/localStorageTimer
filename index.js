module.exports = localStorageTimer= (function(window){
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
