module.exports = localStorageTimer= (function(window){
     if(!window.sessionStorage)
         window.sessionStorage = window.localStorage
     function putItemwithExpiry(key, value, expiry){
       if(expiry instanceof String)
           expiry = parseInt(expiry);
       window.sessionStorage.setItem(key, value);
       setTimeout(function(){
         window.sessionStorage.removeItem(key);
       }, expiry * 1000);
     };

    return {
      getItem: function(key){
        return window.sessionStorage.getItem(key);
      },
      setItem: function(key, value, options){
        options = options || {};
        var expiry = options.expiry || 60;
        putItemwithExpiry(key, value, expiry);
      },
      removeItem: function(key){
        window.sessionStorage.removeItem(key);
      }
    }
})(window);
