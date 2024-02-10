import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCourse } from '../redux/Actions/detailActions';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';



const CourseDetailsPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const courseDetail = useSelector(state=> state.Icourse);
    const state = useSelector(state=> state);
    const dispatch = useDispatch();
    console.log(state);
    
    const handleClick=(product)=>{
        dispatch(buyCourse(product))
    }
    

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
       {courseDetail && ( <div className='container flex flex-col justify-center gap-8 mt-16 sm:flex-row'>
            <img className='w-full h-[30%] md:w-[45%] shadow-2xl' src={`http://localhost:8001/assets/${courseDetail.thumbnail}`} alt="" />
            <div style={{padding:'10px'}}>
            <h2 className='text-2xl italic gap-2'> {courseDetail.name}</h2>
            <hr className='border bottom-8 border-gray-500 '/>
            <span>instructor: <span className='text-xl'>{courseDetail.instructor}</span></span>
            <div> enrollment status : <span>{courseDetail.enrollmentStatus}</span></div>
            <p>Duration: {courseDetail.duration}</p>
            <p>Schedule :{courseDetail.schedule}</p>
            <p>Location : {courseDetail.location}</p>
            <p>Pre-requisite : <span className='text-xl'>{courseDetail.prerequisites}</span></p>
            <p>description: {courseDetail.description}</p>
            <div>
            <button className='mt-5 px-2 py-1  rounded-md bg-[rgb(250,137,0)]' onClick={()=> handleClick(courseDetail)}>Buy now</button>

              
            <div className="container mx-auto py-8">
            <div className="border rounded-md shadow-md">
            <div className="flex justify-between items-center bg-gray-300 px-4 py-2 cursor-pointer" onClick={toggleOpen}>
          <h2 className="text-lg font-semibold">Syllabus</h2>
          {isOpen ? <FiChevronUp className="w-6 h-6" /> : <FiChevronDown className="w-6 h-6" />}
        </div>
        {isOpen && (
          <div className="p-4 bg-white">
           {courseDetail.syllabus.map(element=>(<div>
                <p>week {element.week}: {element.topic}</p>
                <p className='ml-3'>content : {element.content}</p>        
            </div>))}
          </div>
        )}
      </div>
    </div>
            </div>
            </div>
        </div>)}

                      
    </div>
  )
}

export default CourseDetailsPage
