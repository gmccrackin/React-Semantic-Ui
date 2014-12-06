var React = require('react');

var constants = require('./constants');
var combine = require('./utilities').combine;

var Input = React.createClass({
	propTypes: {
		type: React.PropTypes.string.isRequired,
		focus: React.PropTypes.bool,
		loading: React.PropTypes.bool,
		error: React.PropTypes.bool,
		icon: React.PropTypes.string,
		labeled: React.PropTypes.string,
		action: React.PropTypes.bool,
		transparent: React.PropTypes.bool,
		inverted: React.PropTypes.bool,
		fluid: React.PropTypes.bool,
		size: React.PropTypes.oneOf(constants.SIZES),
		iconPos: React.PropTypes.oneOf(constants.POS),
		wrapperClassName: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			'type': 'text',
			'placeholder': 'Search...'
		};
	},

	getInitialState: function() {
		return {
			value: '',
		};
	},

	renderWrapper: function (cNodes) {
		var classNames = combine({
			'ui': true,
			'transparent': this.props.transparent,
			'inverted': this.props.inverted,
			'fluid': this.props.fluid,
		}, {
			'left': (this.props.labeled && (this.props.labeledPos == 'left')),
			'right': (this.props.labeled && (this.props.labeledPos == 'right')),
			'labeled': this.props.labeled,
		},
			this.props.size,
		{
			'left': (this.props.icon && (this.props.iconPos == 'left')),
			'right': (this.props.icon && (this.props.iconPos == 'right')),
			'icon': this.props.icon,
		}, {
			'action': this.props.action,
			'input': true,
			'error': this.props.error,
			'loading': this.props.loading,
			'focus': this.props.focus
		});
		return (
			<div className={classNames}>
				{cNodes}
			</div>
		);
	},

	renderIcon: function (pos) {
		if ((this.props.iconPos == pos) || (this.props.icon && !this.props.iconPos)) {
			return <i className={combine(this.props.icon, 'icon')} key={"icon"+pos}></i>
		}
	},

	renderLabel: function (pos) {
		if ((this.props.labeledPos == pos) || (this.props.labeled && !this.props.labeledPos)) {
			return (
				<div className={combine('ui', this.props.labeled, 'label')} key={"label"+pos}>
					{this.props.labeledContent}
				</div>
			);
		}
	},

	renderInput: function () {
		var input;

		switch (this.props.type) {
			// I think there will be more.
			default:
				input = <input {...this.props} ref="input" key="input"/>
		}

		return input;
	},

	render: function () {
		return this.renderWrapper([
			this.renderLabel('left'),
			this.renderIcon('left'),
			this.renderInput(),
			this.renderIcon('right'),
			this.renderLabel('right')
		]);
	}
});


module.exports = Input;
