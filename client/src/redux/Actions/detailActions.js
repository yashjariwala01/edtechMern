import { BUY_COURSE, COURSE_DETAILS, TOGGLE_COURSE_COMPLETION } from "./actionTypes";

export const courseDetails =(product)=>{
    return {
        type: COURSE_DETAILS,
        payload: product,
    }
}

export const buyCourse =(product)=>{
    return {
        type: BUY_COURSE,
        payload: product,
    }
}


export const toggleCourseCompletion = (courseId) => ({
  type: TOGGLE_COURSE_COMPLETION,
  payload: courseId,
});