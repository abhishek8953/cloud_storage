import {createSlice} from "@reduxjs/toolkit"
const initialState = {
	logged: false,
	user: null,
	loading: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLogged: (state, action) => {
			
			state.logged = action.payload.success;
			state.user = action.payload.id;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		logout: (state) => {
			state.logged = false;
			state.user = null;
		},
	}
});

export const { setLogged, setLoading, logout } = authSlice.actions;
export default authSlice.reducer;
