import { LOGIN, LOGOUT } from "./actions";

// 초기 상태
const initialState = {
	isLoggedIn: false,
};

export function authReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return { ...state, isLoggedIn: true };
		case LOGOUT:
			return { ...state, isLoggedIn: false };
		default:
			return state;
	}
}
