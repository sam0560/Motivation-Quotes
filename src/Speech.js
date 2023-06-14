const Speech = ({ speech, isPending, error}) => {
    return(
        <div className="speech">
            <div className="speech-quote">
                {isPending && <h1 className="pending">Loading ...</h1>}
                {error && <p style={{color: 'red'}}> {error} </p>}
                {speech && <q>{speech.text}</q>}
                {speech && <cite>By: <b>{speech.author}</b></cite>}
            </div>
        </div>
    );
}

export default Speech;