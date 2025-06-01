export default function Start(props)
{
    return(<div className='trivia-start-container'>
        <h1 className='trivia-start-container-title'>Trivia</h1>
        <h2 className='trivia-start-container-subtitle'>Quiz Your Brain</h2>
        <br />
        <button className='trivia-start-container-button' onClick={props.startQuiz}>Start</button>
    </div>)
}