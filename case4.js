function logThis() {
    console.log(this); 
}
// Method on functions  , returns a copy of the function 
// is set to the first arguement passed into .bind
logThis(); //

var explicitlySetLogThis = logThis.bind({name: "Xavier"});

explicitlySetLogThis()

logThis.apply({name: "Xavier"});
logThis.call({name: "Xavier"});


function logThisWithArguments(greeting , name) {
    console.log(greeting, name);
    console.log(this)
}

logThisWithArguments("Hi" , "xavier");
logThisWithArguments.apply({name: "Xavier"}, ['hi', 'Xavier']);
logThisWithArguments.call({name: "Xavier"}, 'hi' , 'Xavier');

var boundOnce = logThis.bind({name: 'The first time is forever'});

// These attempts to change `this` are futile.
boundOnce.bind({name: 'why even try?'})();
boundOnce.apply({name: 'why even try?'});
boundOnce.call({name: 'why even try?'});