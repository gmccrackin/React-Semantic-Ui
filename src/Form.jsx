var React = require('react');

var WrapperMixin = require('jsx!./mixins/Wrapper.jsx');

var combine = require('./utilities').combine;
var filter = require('./utilities').filter;
var rFilter = require('./utilities').rFilter;
var has = require('./utilities').has;

var constants = require('./constants');

var Label = React.createClass({
	mixins: [WrapperMixin],

	propTypes: {
		label: React.PropTypes.string,
		text: React.PropTypes.string
	},

	render: function () {
		var props = this.acceptableProps();
		return (
			<label>{props.text || props.label}</label>
		)
	}
});

var Input = React.createClass({
	mixins: [WrapperMixin],

	propTypes: {
		type: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		name: React.PropTypes.string
	},

	getDefaultProps: function () {
		return {
			'type': 'text'
		}
	},

	render: function () {
		var props = this.acceptableProps();
		return (
			<input {...props} />
		)
	}
});

var RadioGroup = React.createClass({
	mixins: [WrapperMixin],

	propTypes: {
		radio: React.PropTypes.bool
	},

	getClassName: function () {
		return combine(
			'ui radio checkbox',
			this.props.className
		);
	},

	render: function () {
		var passableProps = this.passableProps();
			return this.defaultWrapper([
				<Radio key="radio" {...passableProps} />,
				<Label key="label" {...passableProps} />
			]);
	}
});

var Radio = React.createClass({
	mixins: [WrapperMixin],

	propTypes: {
		name: React.PropTypes.string,
		type: React.PropTypes.string,
		radio: React.PropTypes.bool
	},

	getDefaultProps: function () {
		return {
			type: 'radio'
		};
	},

	render: function () {
		var props = this.acceptableProps();
		if (this.props.radio) {
			return <RadioGroup {...this.props} />;
		}
		else {
			return (
				<input {...props} />
			);
		}

	}
});

var Option = React.createClass({
	mixins: [WrapperMixin],

	propTypes: {
		value: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.number
		]),
		text: React.PropTypes.string
	},


	render: function () {
		var props = this.acceptableProps();
		return (
			<option {...props} value={props.value}>{props.text}</option>
		);
	}
});

var Select = React.createClass({
	mixins: [WrapperMixin],

	propTypes: {
		options: React.PropTypes.array
	},

	getClassName: function () {
		return combine(
			'ui search dropdown',
			this.props.className
		);
	},

	render: function () {
		var props = this.acceptableProps();
		var passableProps = this.passableProps();

		return (
			<select {...props} className={this.getClassName()}>
				{props.options && props.options.map(function (option) {
					return <Option key={Math.random()} {...passableProps} {...option} />
				})}
				{this.props.children}
			</select>
		);
	}
});

var Field = React.createClass({
	mixins: [WrapperMixin],

	getClassName: function () {
		return combine(
			'field',
			this.props.className
		);
	},

	shouldHaveChildren: function () {
		var inputProps = [
			'label',
			'type',
			'placeholder',
			'options',
			'inputs'
		];

		return has(inputProps, this.props);
	},

	renderChildren: function () {
		var children = [];

		if (has(['radio'], this.props)) {
			children.push(
				<Radio key="radio" {...this.passableProps()} />
			);
		}
		else if (has(['label'], this.props)) {
			children.push(
				<Label key="label" {...this.passableProps()} />
			);
		}
		if (has(['options'], this.props)) {
			children.push(
				<Select key="select" {...this.passableProps()} />
			);
		}
		else if (!has(['radio'], this.props)) {
			children.push(
				<Input key="input" {...this.passableProps()} />
			);
		}

		return this.defaultWrapper(children);
	},

	render: function () {
		if (this.shouldHaveChildren()) {
			return this.renderChildren();
		}
		return this.defaultWrapper();
	}
});

var Fields = React.createClass({
	mixins: [WrapperMixin],

	propTypes: {
		cols: React.PropTypes.oneOf(constants.COLWIDTHS),
		grouped: React.PropTypes.bool
	},

	getClassName: function () {
		return combine({
				'ui': !this.props.grouped,
				'grouped': this.props.grouped
			},
			this.props.cols,
			'fields',
			this.props.className
		);
	},

	shouldHaveChildren: function () {
		return has(['inputs'], this.props);
	},

	renderChildren: function () {
		var children = this.props.inputs.map(function (input) {
			return <Field {...this.passableProps()} {...input} />
		}, this);

		return this.defaultWrapper(children);
	},

	render: function () {
		if (this.shouldHaveChildren()) {
			return this.renderChildren();
		}
		return this.defaultWrapper();
	}
});

var Form = React.createClass({
	mixins: [WrapperMixin],

	getClassName: function () {
		return combine(
			'ui form',
			this.props.className
		);
	},

	render: function () {
		return this.defaultWrapper();
	}
});

module.exports = {
	Label: Label,
	Input: Input,
	Radio: Radio,
	Select: Select,
	Field: Field,
	Fields: Fields,
	Form: Form
};
