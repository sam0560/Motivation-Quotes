import { useEffect, useState } from 'react';
import Speech from './Speech';
import SocialMedia from './SocialMedia';

const HomePage = () => {
    const [ speech, setSpeech] = useState('');
    const [ isPending, setIsPending] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(() => {return myData();}, [])

    const myData = () => {
        fetch('https://type.fit/api/quotes')
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch any quotes');
            }
            return res.json();
        })
        .then((data) => {
            const randomData = Math.floor(Math.random() * data.length);
            const randomSpeech = data[randomData];
            setSpeech(randomSpeech);
            setIsPending(false);
            setError(null);
        })
        .catch( (err) => {
            setIsPending(false);
            setError(err.message);
        });
    }
    const handleClick = () => {
        return myData();
    }
    return(
        <div className="homepage">
            <h1>motivation Quotes</h1>
            <Speech speech={speech} isPending={isPending} error={error}/>
            <button onClick={handleClick}>generate</button>
            <SocialMedia />
        </div>
    );
}

export default HomePage;