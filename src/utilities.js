/**
 * Maybe these should be replaced with underscorejs
 * because I didn't think it would get this long.
 */
var utilities = {
	/**
	 * Combines classNames
	 */
	combine: function () {
		var className = '';
		for (var i = 0; i < arguments.length; i++) {
			if (typeof(arguments[i]) == "object") {
				for (var j in arguments[i]) {
					if (arguments[i][j]) {
						className += j + ' ';
					}
				}
			}
			if (typeof(arguments[i]) == "string") {
				className += arguments[i] + ' ';
			}
		}
		return className;
	},

	/**
	 * Return object with keys of aProps and values of props.
	 */
	filter: function (aProps, props) {
		aProps || [];
		props || {};
		var newProps = {};
		aProps.forEach(function (prop) {
			newProps[prop] = props[prop];
		});
		return newProps;
	},

	/**
	 * Return object with all keys in props except aProps values.
	 */
	rFilter: function (aProps, props) {
		aProps || [];
		props || {};
		var newProps = {};
		for (var i in props) {
			if (aProps.indexOf(i) > -1) continue;
			newProps[i] = props[i];
		}
		return newProps;
	},

	/**
	 * Checks if any of the arr items are keys in the obj.
	 */
	has: function (arr, obj) {
		if (typeof(arr) == 'string') {
			arr = [arr];
		}
		var len = arr.length;
		for (var i = 0; i < len; i++) {
			if (obj[arr[i]]) {
				return true;
			}
		}
		return false;
	}
};

module.exports = utilities;
