import { GET_INFO1 } from '../constants/action.types';

const sample1 = (state = {}, action) => {
    switch (action.type) {
        case GET_INFO1:
            return {};
        default:
            return state;
    }
}

export default sample1;