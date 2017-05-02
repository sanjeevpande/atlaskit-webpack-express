import { connect } from 'react-redux';
import { getNames, getUpdatedNames } from '../actions';
import SampleComponent from '../components/SampleComponent';

const mapStateToProps = (state) => {
	return {
		names: state.names
	};
}

const mapDispatchToProps = (dispatch) => {
	dispatch(getNames());
	return {
		onButtonClick: () => {
			dispatch(getUpdatedNames());
		}
	};
}

const SampleContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SampleComponent);

export default SampleContainer;