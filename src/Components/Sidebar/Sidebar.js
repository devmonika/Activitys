import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({cart}) => {
  // console.log(cart);
    const braketime =  [60, 20, 30, 120];
    const [showtime, setShowTime] = useState(0);
    useEffect(()=>{
      const showTime = localStorage.getItem("show-time");
      setShowTime(showTime);
    },[])
    function setBrakeTime(time){
      localStorage.setItem("show-time",time);
      setShowTime(time); 
    }
    const notify = () =>{
      toast("Activity Successful!");
    } 
    return (
      <div className="px-8 py-10">
		  <h1 className="font-semibold text-2xl pb-2 text-red-500">Profile</h1>
          <p className='font-bold'>Hobby:</p>
          <ul>
                <li>Eating</li>
                <li>Travelling</li>
                <li>Gardening</li>
            </ul>
		  <div className="mt-10 mb-5">
			<p className="font-semibold text-sm uppercase">Brake Time</p>
            <ul className='flex justify-between mt-5'>
                {
                  braketime.map((time)=> <li className='border-2 border-red-500 px-4 py-3 cursor-pointer rounded-full' 
                  onClick={()=>setBrakeTime(time)} key={time}>{time}</li> )
                }
            </ul>
		  </div>
		  <div>
			
		  </div>
		  <div className="pb-10">
			<div>
      <p className='font-bold'>Activity Time:</p>
      <p className='my-2 px-1 border-red-500 border-2 py-2'>{cart} min</p>
      </div>
			<div>
      <p className='font-bold'>Brake Time:</p>
      <p className='mt-2 px-1 border-red-500 border-2 py-2'>{showtime}</p>
      </div>
		  </div>
		  <button onClick={notify} className="btn border-none bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
		  <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
		</div>
       
    );
};

export default Sidebar;