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
	}
};

module.exports = utilities;
