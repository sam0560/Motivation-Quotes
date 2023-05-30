import { useEffect, useState } from 'react';
import Speech from './Speech';
import SocialMedia from './SocialMedia';

const HomePage = () => {
    const [ speech, setSpeech] = useState('');
    const [ isPending, setIsPending] = useState(true);

    useEffect(() => {return myData();}, [])

    const myData = () => {
        fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then((data) => {
            const randomData = Math.floor(Math.random() * data.length);
            const randomSpeech = data[randomData];
            setSpeech(randomSpeech);
            setIsPending(false);
        })
    }
    const handleClick = () => {
        return myData();
    }
    return(
        <div className="homepage">
            <h1>motivation speech</h1>
            <Speech speech={speech} isPending={isPending}/>
            <button onClick={handleClick}>generate</button>
            <SocialMedia />
        </div>
    );
}

export default HomePage;