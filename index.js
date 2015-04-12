var inherits = require('util').inherits;


module.exports = {
	create: create,
	extend: extend
};

function create(constructor, protoConfig) {
	return extend(constructor, null, protoConfig);
};

function extend(constructor, base, protoConfig) {
	check(arguments);

	var hasBase = typeof(base) === 'function';

	function classFunction() {
		var args = arguments;
		if (args.callee.caller == args.callee) {
			args = args[0];
		}

		if (!(this instanceof classFunction)) {
			return new classFunction(args)
		}

		if (hasBase) {
			base.apply(this, args);
		}

		constructor.apply(this, args);
	};

	if (hasBase) {
		inherits(constructor, base);
	}

	inherits(classFunction, constructor);

	if (typeof(protoConfig) == 'function') {
		protoConfig(classFunction.prototype);
	}

	classFunction.extend = function(constructor, protoConfig) {
		return extend(constructor, this, protoConfig);
	};

	return classFunction;
};

var check = function(args) {
	// if (args.length < arguments.callee.caller.length - 1) {
	// 	throw new Error('arguments is not enough!');
	// }

	for (i in args) {
		if (args[i] && typeof(args[i]) !== 'function') {
			throw new Error('every argument must be functon');
		}
	}
};