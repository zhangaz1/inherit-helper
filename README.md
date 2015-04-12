[![Build Status](https://travis-ci.org/zhangaz1/inherit-helper.svg?branch=master)](https://travis-ci.org/zhangaz1/inherit-helper)

# inherit-helper()

simple inherit

## Example

```js
var helper = require('inherit-helper');

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

var MyClass = helper.extend(
    function() {
        // init;
    },
    Object,
    function(proto) {
        // set protos;
    }
);
```

## Installation

```cmd
npm install inherit-helper
```

## Usage

Basic usage that like this:

```js
var p1 = Parent(name); // or: new Parent(name);

assert.equal(p1.name, name);
assert.equal(p1.getName(), name);

assert.equal(typeof(Child.extend), 'function');

var c1 = new Child(name, age);
assert.equal(c1.name, name);
assert.equal(c1.getName(), name);
assert.equal(c1.age, age);
assert.equal(c1.getAge(), age);

Parent.prototype.getSomething = function() {
    return somthing;
};

assert.equal(p1.getSomething(), somthing);
assert.equal(c1.getSomething(), somthing);

```

## License

MIT. &copy; 2012 Aseem Kishore.