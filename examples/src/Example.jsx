var React = require('react');

var ExampleItem = React.createClass({
	/**
	 * wrapCode and formatCode should be replaced with js-beautify or something
	 */
	wrapCode: function (str) {
		if (!str) return;

		return <code><pre>{this.formatCode(str)}</pre></code>;
	},

	formatCode: function (str) {
		if (!str) return;

		return str.match(/<[^>]*>/g).join('\n');
	},

	/**
	 * Get the passed in props
	 *
	 * This functionality probably exists somewhere else.
	 * I just dont know where it is and it should probably be a mixin.
	 */
	gProps: function (rEl) {
		var defaults = {};
		var newProps = {};
		// Replace later with _.clone
		var props = {};
		for (var i in rEl.props) {
			if (i != "children") {
				props[i] = rEl.props[i];
			}
		}

		if (typeof(rEl.type) == "string") {
			return props;
		}
		else if (!rEl.type.getDefaultProps) {
			return props;
		}
		else {
			defaults = rEl.type.getDefaultProps();
		}

		for (var i in props) {
			if (props[i] != defaults[i]) {
				newProps[i] = props[i];
			}
		}
		return newProps;
	},

	reactToText: function (rEl) {
		if (!rEl) return;

		var props = this.gProps(rEl);
		var dName = (typeof(rEl.type) == "function") ? rEl.type.displayName : rEl.type;

		var rElStr = '<' + dName;

		for (var i in props) {
			rElStr += ' ' + i + '="' + props[i] + '"';
		}

		if (rEl.props.children) {
			rElStr += ' />';
			for (var i in rEl.props.children) {
				rElStr += this.reactToText(rEl.props.children[i]);
			}
			rElStr += '<' + dName;
		}
		return rElStr + ' />';
	},

	/**
	 * Strips out a wrapper div that is need sometimes with the html in jsx.
	 * http://facebook.github.io/react/tips/maximum-number-of-jsx-root-nodes.html
	 *
	 * Assumes a div is a wrapper if it has no class passed on initialization.
	 */
	stripWrapper: function (html) {
		var htmlStr = '';
		if (!html.props.className && (html.type == "div")) {
			React.Children.forEach(html.props.children, function (child) {
				htmlStr += React.renderToStaticMarkup(child);
			});
			return htmlStr;
		}
		return React.renderToStaticMarkup(html);
	},

	/**
	 * Warning: Dangerously sets HTML!!!
	 */
	renderHtml: function () {
		var html = this.stripWrapper(this.props.html);

		var htmlCode = {__html: html};
		var htmlText = this.wrapCode(html);

		return (
			<div className='html'>
				<div className='ui grid'>
					<div className='column row'>
						<div className='four wide column' dangerouslySetInnerHTML={htmlCode}>
						</div>
						<div className='twelve wide column'>
							{htmlText}
						</div>
					</div>
				</div>
			</div>
		);
	},

	renderReact: function () {
		return (
			<div className='react'>
				<div className='ui grid'>
					<div className='column row'>
						<div className='four wide column'>
							{this.props.react}
						</div>
						<div className='twelve wide column'>
							{this.wrapCode(this.reactToText(this.props.react))}
						</div>
					</div>
				</div>
			</div>
		);
	},

	render: function () {
		return (
			<div className='ui attached segment example'>
				{this.props.header &&
					<h4 className='ui header'>
						{this.props.header}
					</h4>
				}
				{this.props.desc &&
					<p>{this.props.desc}</p>
				}
				<div className='ui center aligned'>
					{this.renderHtml()}
					<div className='ui horizontal divider'>or</div>
					{this.renderReact()}
				</div>
			</div>
		);
	}
});

var ExampleType = React.createClass({
	render: function () {
		var d = this.props.doc;
		return (
			<div className='ui basic segment'>
				<h2 className='ui dividing header'>
					{d.header}
				</h2>
				{d.examples && d.examples.map(function (example) {
					return <ExampleItem
							header={example.header}
							desc={example.description}
							html={example.html}
							react={example.react}
						/>;
				})}
			</div>
		);
	}
});

var Examples = React.createClass({
	render: function () {
		var d = this.props.doc;
		return (
			<div>
				<div className='header segment'>
					<div className='container'>
						<h1 className='ui header'>
							{d.header}
						</h1>
						<p>
							{d.desc}
						</p>
					</div>
				</div>
				<div className='main container'>
					{d.types.map(function (types) {
						return <ExampleType doc={types} />
					})}
				</div>
			</div>
		);
	}
});

module.exports = Examples;
