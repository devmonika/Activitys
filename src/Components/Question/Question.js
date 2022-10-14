import React from 'react';

const Question = (props) => {
    console.log(props.question);
    const {question, answer} = props.question;
    return (
        <div className="collapse shadow-lg">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title bg-base-100 shadow-lg text-center">
            <h1 className='text-2xl'>{question}</h1>
            </div>
            <div className="collapse-content  "> 
            
                <p>{answer}</p>
            </div>
        </div>
      
    );
};

export default Question;