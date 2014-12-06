var React = require('react');

var filter = require('../utilities').filter;
var rFilter = require('../utilities').rFilter;

/**
 * Warning:	This mixin may be a horrible idea!
 *
 * Description:	It attempts to to figure out what props a component
 * 		didn't use so it can pass them to its children.
 */
var WrapperMixin = {
	acceptableKeys: function () {
		var propTypeKeys = [];

		for (var i in this.constructor.propTypes) {
			propTypeKeys.push(i);
		}

		return propTypeKeys;
	},

	acceptableProps: function () {
		return filter(this.acceptableKeys(), this.props);
	},

	passableKeys: function (shouldRemove) {
		var a = this.acceptableKeys();

		if (typeof(shouldRemove) == "string") {
			shouldRemove = [shouldRemove];
		}
		a = a.concat(shouldRemove || []);

		return a;
	},

	passableProps: function (shouldRemove) {
		return rFilter(this.passableKeys(shouldRemove), this.props);
	},

	defaultWrapper: function (wrappedItems) {
		if (!wrappedItems) {
			wrappedItems = this.props.children || [];
		}

		return (
			<div {...this.acceptableProps()} className={this.getClassName && this.getClassName()}>
				{wrappedItems}
			</div>
		);
	}
};

module.exports = WrapperMixin;
