const Speech = ({ speech, isPending }) => {
    return(
        <div className="speech">
            <div className="speech-quote">
                {isPending && <h1 className="pending">Loading ...</h1>}
                {speech && <q>{speech.text}</q>}
                {speech && <cite>By: <b>{speech.author}</b></cite>}
            </div>
        </div>
    );
}

export default Speech;