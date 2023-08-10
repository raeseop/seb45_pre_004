import { LOGIN, LOGOUT } from "../actions/authAction";

// 초기 상태
const initialState = false;

export function authReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return true;
		case LOGOUT:
			return false;
		default:
			return state;
	}
}
