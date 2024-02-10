import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; 
import { toggleCourseCompletion } from '../redux/Actions/detailActions'; // Assuming you have an action creator function called toggleCourseCompletion

const StudentProfile = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleCompletion = (course) => {
        dispatch(toggleCourseCompletion(course.id)); // Dispatching an action to toggle completion status
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {cart &&
                cart.map((course) => (
                    <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 md:mt-16" key={course.id}>
                        <img
                            className="w-full md:w-1/3 h-auto rounded-lg"
                            src={`https://deltaeducation.onrender.com/${course.thumbnail}`}
                            alt={course.name}
                        />

                        <div className="flex flex-col justify-center">
                            <h4 className="text-xl font-semibold mb-2">{course.name}</h4>
                            <h5 className="text-gray-600 mb-2">{course.instructor}</h5>
                            <p className="text-gray-500 mb-4">{course.duedate}</p>
                            <button
                                onClick={() => handleCompletion(course)}
                                className={`px-4 py-2 rounded ${
                                    course.isComplete
                                        ? 'bg-green-500 text-white font-semibold'
                                        : 'bg-orange-500 text-white font-semibold'
                                }`}
                            >
                                {course.isComplete ? 'Completed' : 'In Progress'}
                            </button>
                            <div className="w-full md:w-2/3 lg:w-1/2 mt-4">
                                <div className="w-full">
                                    <CircularProgressbar
                                        className="bg-white rounded-full p-0.5 text-3xl font-bold fill-black stroke-transparent"
                                        value={course.progress}
                                        maxValue={10}
                                        text={`${course.progress}/10`}
                                        styles={buildStyles({
                                            pathColor:
                                                course.progress < 5
                                                    ? 'red'
                                                    : course.progress < 7
                                                    ? 'orange'
                                                    : 'green',
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default StudentProfile;
