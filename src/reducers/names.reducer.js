import { GET_INFO } from '../constants/action.types';

const names = (state = [], action) => {
    switch (action.type) {
        case 'GET_NAMES':
            return ['a', 'b', 'c', 'd'];
        case 'GET_UPDATED_NAMES':
        	return ['e', 'f', 'g', 'h'];
        default:
            return state;
    }
}

export default names;