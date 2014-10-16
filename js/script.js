// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/

"use strict";

var person = {
	fName: 'Annie',
	lName: 'Tao',
	email: 'atao@uw.edu',
	getFullName: function() { return this.fName + ' ' + this.lName; }
};

//ANNOYING alerts
//alert(person.getFullName());

console.log('running the getFullName function on person object');
console.log(person.getFullName());

console.log('looping through all properties of the person object');
//show all properties of the person object
for (var prop in person) {
	console.log(person[prop]); // => value of current property
}

//create a new img element
var elem = document.createElement('img');
elem.src = 'img/dog.jpg';
elem.alt = 'picture of my awesome dog';

//add this element to the top of the body
document.body.insertBefore(elem, document.body.firstChild);

//create a new img element
var kitty = document.createElement('img');
kitty.src = 'img/cat.jpg';
kitty.alt = 'picture of a cat';

//add this to the body of the page
document.body.appendChild(kitty);


