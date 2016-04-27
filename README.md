##LocalStorageTimer

Adding Timer Capabilities for localStorage.


##Usage

Include the Script by
```
<script src="dist/localStorageTimer.js"></script>
```

##Methods:

```javascript
//inorder to get the item you can use

localStorageTimer.getItem("hello")

//inorder to set the item

localStorageTimer.setItem("hello", "world", {
  expiry: 40  //value in seconds defaults to 60 seconds
});

//inorder to remove an item
localStorageTimer.removeItem("hello")

```

##Develop:

* clone the project.
* do changes in index.js file.
* build it by ```npm run build```.
* send a PR.

##License
MIT
