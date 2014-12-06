/**
 * Input Examples
 *
 * Should look like http://semantic-ui.com/elements/input.html
 * except it will be way less professional.
 */

var React = require('react');

var Example = require('jsx!./Example.jsx');
var Input = require('jsx!../../src/Input.jsx');

/**
 * Info:	If a wrapper div is used for the html it will be removed before rendering.
 *		It currently assumes a div is a wrapper div if it has no classes.
 */
var doc = {
	header: 'Input',
	desc: 'An input is a field used to elicit a response from a user',
	types: [
		{
			header: 'Types',
			examples: [
				{
					header: 'Input',
					desc: 'A standard input',
					html: (
						<div className="ui input">
							<input type="text" placeholder="Search..." />
						</div>
					),
					react: <Input />
				}
			]
		}, {
			header: 'States',
			examples: [
				{
					header: 'Focus',
					description: 'An input field can show a user is currently interacting with it',
					html: (
						<div className="ui input focus">
							<input type="text" placeholder="Search..." />
						</div>
					),
					react: <Input focus />
				}, {
					header: 'Loading',
					description: 'An icon input field can show that it is currently loading data',
					html: (
						<div>
							<div className="ui left icon input loading">
								<input type="text" placeholder="Search..." />
								<i className="search icon"></i>
							</div>
							<div className="ui divider"></div>
							<div className="ui icon input loading">
								<input type="text" placeholder="Search..." />
								<i className="search icon"></i>
							</div>
						</div>
					),
					react: (
						<div>
							<Input loading icon="search" />
							<div className="ui divider"></div>
							<Input loading icon="search" iconPos="left" />
						</div>
					)
				}, {
					header: 'Error',
					desc: 'An input field can show the data contains errors',
					html: (
						<div className="ui input error" placeholder="Search...">
							<input type="text" placeholder="Search..." />
						</div>
					),
					react: <Input error />
				}
			]
		}, {
			header: 'Variations',
			examples: [
				{
					header: 'Icon',
					desc: 'An input can be formatted with an icon',
					html: (
						<div className="ui icon input">
							<input type="text" placeholder="Search..." />
							<i className="search icon"></i>
						</div>
					),
					react: <Input icon="search" />
				}, {
					html: (
						<div className="ui left icon input">
							<input type="text" placeholder="Search users..." />
							<i className="users icon"></i>
						</div>
					),
					react: <Input icon='users' iconPos='left' />
				}, {
					html: (
						<div className="ui icon input">
							<input type="text" placeholder="Search..." />
							<i className="circular search icon"></i>
						</div>
					),
					react: <Input icon='circular search' />
				}, {
					html: (
						<div className="ui icon input">
							<input type="text" placeholder="Search..." />
							<i className="inverted search icon"></i>
						</div>
					),
					react: <Input icon='inverted search' />
				}, {
					header: 'Labeled',
					desc: 'An input can be fromatted with a label',
					html: (
						<div className="ui corner labeled input">
							<input type="text" placeholder="Search..." />
							<div className="ui corner label">
								<i className="asterisk icon"></i>
							</div>
						</div>
					),
					react: <Input labeled='asterisk' labeledPos='corner' />
				}, {
					html: (
						<div className="ui labeled input">
							<div className="ui label">
								"http://"
							</div>
							<input type="text" placeholder="mysite.com" />
						</div>
					),
					react: <Input labeled labeledPos='left' labeledContent='http://' />
				}, {
					html: (
						<div className="ui right labeled left icon input">
							<i className="tags icon"></i>
							<input type="text" placeholder="Enter categories" />
							<div className="ui tag label">
								Tags
							</div>
						</div>
					),
					react: <Input labeled='tag' labeledPos='right' labeledContent='Tags' icon='tags' iconPos='left' />
				}, {
					header: 'Action',
					desc: 'An input can be formatted to alert the user to an action they may perform',
					html: (
						<div className="ui action input">
							<input type="text" placeholder="Search..." />
							<div className="ui button">
								Search
							</div>
						</div>
					),
				}, {
					header: 'Transparent',
					desc: 'A transparent input has no background',
					html: (
						<div className="ui transparent input">
							<input type="text" placeholder="Search..." />
						</div>
					),
					react: <Input transparent />
				}, {
					html: (
						<div className="ui transparent icon input">
							<i className="search icon"></i>
							<input type="text" placeholder="Search..." />
						</div>
					),
					react: <Input transparent icon='search' />
				}, {
					html: (
						<div className="ui transparent left icon input">
							<i className="search icon"></i>
							<input type="text" placeholder="Search..." />
						</div>
					),
					react: <Input transparent icon='search' iconPos='left' />
				}, {
					header: 'Inverted',
					desc: 'An input can be formatted to appear on dark backgrounds',
					html: (
						<div className="ui inverted segment">
							<div className="ui inverted input">
								<input type="text" placeholder="Search..." />
							</div>
							<div className="ui inverted icon input">
								<i className="search icon"></i>
								<input type="text" placeholder="Search..." />
							</div>
							<div className="ui inverted left icon input">
								<i className="search icon"></i>
								<input type="text" placeholder="Search..." />
							</div>
						</div>
					),
					react: (
						<div className='ui inverted segment'>
							<Input inverted />
							<br />
							<Input inverted icon='search' />
							<br />
							<Input inverted icon='search' iconPos='left' />
						</div>
					)
				}, {
					header: 'Fluid',
					desc: 'An input can take the size of its container',
					html: (
						<div>
							<div className="ui fluid icon input">
								<input type="text" placeholder="Search a very wide input..." />
								<i className="search icon"></i>
							</div>
							<div className="ui fluid action input">
								<input type="text" placeholder="Search..." />
								<div className="ui button">
									Search
								</div>
							</div>
						</div>
					),
					react: (
						<div>
							<Input fluid icon='search' />
							<Input fluid action />
						</div>
					)
				}, {
					header: 'Size',
					desc: 'An input can vary in size',
					html: (
						<div className="ui mini icon input">
							<input type="text" placeholder="Search mini..." />
							<i className="search icon"></i>
						</div>
					),
					react: <Input size='mini' icon='search' />
				}, {
					html: (
						<div className="ui small icon input">
							<input type="text" placeholder="Search small..." />
							<i className="search icon"></i>
						</div>
					),
					react: <Input size='small' icon='search' />
				}, {
					html: (
						<div className="ui big icon input">
							<input type="text" placeholder="Search big..." />
							<i className="search icon"></i>
						</div>
					),
					react: <Input size='large' icon='search' />
				}, {
					html: (
						<div className="ui big icon input">
							<input type="text" placeholder="Search big..." />
							<i className="search icon"></i>
						</div>
					),
					react: <Input size='big' icon='search' />
				}, {
					html: (
						<div className="ui huge icon input">
							<input type="text" placeholder="Search huge..." />
							<i className="search icon"></i>
						</div>
					),
					react: <Input size='huge' icon='search' />
				}, {
					html: (
						<div className="ui massive icon input">
							<input type="text" placeholder="Search massive..." />
							<i className="search icon"></i>
						</div>
					),
					react: <Input size='massive' icon='search' />
				}
			]
		}
	]
};

var InputExamples = <Example doc={doc} />;

module.exports = InputExamples;
