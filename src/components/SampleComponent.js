import React, { PropTypes } from 'react';

const SampleComponent = ({ names, onButtonClick }) => (
	<div>
		<ul>
			{
				names.map((name, i) => {
					return <li key={i}>{name}</li>
					console.log(name);
				})
			}
		</ul>
		<button onClick={() => onButtonClick()}>Click to update Names</button>
	</div>
);

SampleComponent.propTypes = {
	names: PropTypes.array.isRequired,
	onButtonClick: PropTypes.func.isRequired
};

export default SampleComponent;