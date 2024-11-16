import  './Canadidate.css';
import dog from '../../assets/dog.jpg';
import { useState } from 'react';

const Canadidate = () =>
{   
    const [votes, setVotes] = useState(0);
    const [btnTitle, setbtnTitle] = useState('Vote');
    const handlevote = () =>{
        if(btnTitle === 'Vote'){
            setVotes(1);
            setbtnTitle('Change My Vote !');
        }
        else{
            setVotes(0);
            setbtnTitle('Vote');
        }
    } 
    return (
        <div className='canadidate'>
            <img src={dog} alt="dog" />
            <h3 className='canadidate-name'>Kinder</h3>
            <button onClick={handlevote}>{btnTitle}</button>
            <p>Votes: <span>{votes}</span></p>
        </div>
    );
};

export default Canadidate;