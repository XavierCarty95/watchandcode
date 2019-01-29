function outerFunction(callback) {
  callback();
}

function logThis() {
  console.log(this);
}

/*
 * Case 1: The regular old default case.
 */
 
outerFunction(logThis); // window

/*
 * Case 2: Call the callback as a method
 * (You'll probably NEVER see this, but I guess it's possible.)
 */
 
function callAsMethod(callback) {
  var weirdObject = {
    name: "Don't do this in real life"
  };
  
  weirdObject.callback = callback;
  weirdObject.callback();
}

callAsMethod(logThis); // `weirdObject` will get logged to the console

/*
 * Case 3: Calling the callback as a constructor. 
 * (You'll also probably never see this. But in case you do...)
 */
 
function callAsConstructor(callback) {
  new callback();
}

callAsConstructor(logThis); // the new object created by logThis will be logged to the console

/*
 * Case 4: Explicitly setting `this`.
 */
 
function callAndBindToXavier(callback) {
  var boundCallback = callback.bind({name: 'Xavier'});
  boundCallback();
}

callAndBindToXavier(logThis); // {name: 'Gordon'}

// In a twist, we give `callAndBindToGordon` a function that's already been bound.
var boundOnce = logThis.bind({name: 'The first time is forever'});
callAndBindToXavier(boundOnce); // {name: 'The first time is forever'}