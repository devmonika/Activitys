import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Question from '../Question/Question';

const Questions = () => {
    const [questions, setQuestion] = useState([]);

    useEffect(()=>{
        fetch('question.json')
        .then((res)=>res.json())
        .then((data)=>setQuestion(data))
    },[])
    return (
        <div className='my-10'>
            <h1 className='text-4xl text-center mb-8 font-bold text-red-500'>Some FAQ & Answers</h1>
            {
                questions.map((question)=><Question question={question}></Question>)
            }
            
        </div>
    );
};

export default Questions;