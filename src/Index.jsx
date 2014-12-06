var React = require('react');

var Input = require('jsx!./Input.jsx');

/**
 * Example:
 *	var Input = rsu.Input;
 * 	var Input2 = withDefaults(rsu.Input, {
 *		icon: "seach",
 *	});
 *
 *	<Input2/> outputs <InputWithDefaults><Input icon='search'/></InputWithDefaults>
 */
var withDefaults = function (Component, defaults) {
	return React.createClass({
		displayName: Component.displayName + 'WithDefaults',
		render: function () {
			return <Component {...defaults} />
		}
	});
};

module.exports = {
	Input: Input,
	// Helper functions
	withDefaults: withDefaults
};

