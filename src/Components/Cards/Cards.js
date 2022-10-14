import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';
const Cards = () => {
    const [cards, setCards] = useState([]);
    const[cart, setCart] = useState(0);
    useEffect(()=>{
        fetch('data.json')
        .then((res)=>res.json())
        .then((data) => setCards(data))
    },[])

   
    
    return (
     <div class="block lg:flex my-10">
        <div className="w-full lg:w-3/4 px-10 py-10">
            <div className="pb-8">
			<h1 className='text-5xl font-bold text-red-500'><FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>Daily Life</h1>

            <p className='my-10'>Select Today's Plan</p>
		  </div>
            
             
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4'>
                {cards.map((card)=><Card card={card} setCart={setCart} cart={cart}></Card>)}
            </div>
           
        </div>
            <div className='w-full lg:w-1/4 text-center lg:text-left mt-0 lg:mt-44'>
            <Sidebar cart={cart}></Sidebar>
            </div>
        </div>
    );
};

export default Cards;