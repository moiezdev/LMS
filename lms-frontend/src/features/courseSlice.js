import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  selectedCourse: null,
  enrollments: [],
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    selectCourse(state, action) {
      state.selectedCourse = action.payload;
    },
    enrollInCourse(state, action) {
      state.enrollments.push(action.payload);
    },
    removeEnrollment(state, action) {
      state.enrollments = state.enrollments.filter(
        (courseId) => courseId !== action.payload
      );
    },
  },
});

export const { setCourses, selectCourse, enrollInCourse, removeEnrollment } = courseSlice.actions;

export default courseSlice.reducer;