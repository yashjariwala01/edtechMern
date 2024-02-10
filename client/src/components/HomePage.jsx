import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCourses } from '../redux/Actions/apiActions';
import { courseDetails } from '../redux/Actions/detailActions';

function HomePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchKey, setSearchKey] = useState('');
    const [searchRes, setSearchRes] = useState([]);
    const { loading, data, error } = useSelector(state => state.courses);

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    const handleClick = (product) => {
        dispatch(courseDetails(product));
        navigate(`/item/${product.id}`);
    };

    const handleSearchKeyChange=(e)=>{
        setSearchKey(e.target.value)
    }
    
    const handleSearchClick =()=>{
       searchKey && setSearchRes(data.filter(element=> element.name.toLowerCase().includes(searchKey.toLowerCase())))
    }

    useEffect(()=>{
        console.log(searchRes);
    },[searchRes])

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <h1>Error...</h1>
            ) : (
                <div>
                        <div className="flex flex-row-reverse mt-8 mb-4">
                            <button
                                onClick={handleSearchClick}
                                className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                            >
                                Search
                            </button>
                            <input
                                type="text"
                                value={searchKey}
                                onChange={handleSearchKeyChange}
                                className="px-4 py-2 mr-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="Search..."
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-16">
                    {data &&
                        data.map((course) => (
                            <div
                                key={course.id}
                                className="bg-white border p-3 shadow-lg border-black rounded cursor-pointer transition duration-300 transform hover:scale-105"
                                onClick={() => handleClick(course)}
                            >
                                <img className="w-full h-48 object-cover mb-4" src={`https://deltaeducation.onrender.com/assets/${course.thumbnail}`} alt={course.name} />
                                <div>
                                    <p className="text-lg font-semibold">{course.name}</p>
                                    <p className="text-gray-600">Instructor: {course.instructor}</p>
                                    <p>Course ID: {course.id}</p>
                                    <p>Status: {course.enrollmentStatus}</p>
                                </div>
                            </div>
                        ))}
                </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;
