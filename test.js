var assert = require('assert');

var helper = require('./index.js');


var name = 'john';
var age = 18;
var somthing = 'somthing...';


/*
 * Parent
 */

var Parent = helper.create(
	function(name) {
		this.name = name;
	},
	function(proto) {
		proto.getName = function() {
			return this.name;
		}
	}
);

assert.equal(typeof(Parent.extend), 'function');

var p1 = Parent(name); // or: new Parent(name);

assert.equal(p1.name, name);
assert.equal(p1.getName(), name);


/*
 * Child
 */
var Child = Parent.extend(
	function(name, age) {
		this.age = age;
	},
	function(proto) {
		proto.getAge = function() {
			return this.age;
		}
	}
);

assert.equal(typeof(Child.extend), 'function');

var c1 = new Child(name, age);
assert.equal(c1.name, name);
assert.equal(c1.getName(), name);
assert.equal(c1.age, age);
assert.equal(c1.getAge(), age);


/*
 * Append
 */

Parent.prototype.getSomething = function() {
	return somthing;
};

assert.equal(p1.getSomething(), somthing);
assert.equal(c1.getSomething(), somthing);


/*
 * Extend class exists
 */
var MyClass = helper.extend(
	function() {
		// init;
	},
	Object,
	function(proto) {
		// set protos;
	}
);

assert.equal(typeof(MyClass.extend), 'function');


/*
 * End
 */
console.log('all tests passed!');