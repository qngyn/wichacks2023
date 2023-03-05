import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: 'Ada',
    lastName: 'Zhang',
    handle: 'adazzz',
    profilePicture: '../../image/avartar.jpg',
    bannerPicture: '../../image/banner.jpeg',
    bio: 'Northeastern Uni. student, majoring in Computer Science.',
    location: 'San Jose, CA',
    points: 7,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.points = action.payload.points;
            // state = action.payload;
            // return state;
        }
    }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;