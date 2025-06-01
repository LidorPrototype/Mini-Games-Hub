
import React from 'react';
import { Link } from 'react-router-dom';
import Start from './components/Start';
import Quest from './components/Quest';
import blob from '../../assets/Trivia/blob.png';
import './Trivia.css';


export const Trivia = () =>
{
    
    const [showStart, setShowStart] = React.useState(true)
    const [score, setScore] = React.useState(0)
    const [showAnswers, setShowAnswers] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const [allComplete, setAllComplete] = React.useState(false)
    
    function startQuiz()
    {      
        setShowStart(false)    
    }
    
    function playAgain()
    {
        setShowStart(true)
        setShowAnswers(false)
        setAllComplete(false)
    }
    
    function checkAnswers()
    {
        setShowAnswers(true)
    }
    
    function selectAnswer(event,quest_id,option_id)
    {
        setQuestions(function(prev) {
            return(questions.map(function(quest,qid) {
                if(quest_id===qid){
                    return({...quest, selected_answer:option_id})
                }else{
                    return(quest)
                }
                
            }))
        })
    }
    
    React.useEffect(() => {
        var count = 0;
        for(var i = 0; i < questions.length; i++)
        {
          if (typeof questions[i].selected_answer !== 'undefined')
          {
            if(questions[i].options[questions[i].selected_answer] === questions[i].correct_answer)
            {
              count++;
            }
          }
        }
        setScore(count)
    },[showAnswers])
    
    React.useEffect(() => {
        
        if(showStart ===false) {
            
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestions(data.results.map(function(question) {
                return({question:question.question,
                        options:question.incorrect_answers.concat([question.correct_answer]).map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value),
                        selected_answer:undefined,
                        correct_answer:question.correct_answer})
            })))
            }
    }, [showStart])
    
    React.useEffect(() => { 
        setAllComplete(questions.every((quest) => typeof quest.selected_answer !== 'undefined'))
    }, [questions])
    
    const quests = questions.map(function(question,index) {
        return(<Quest
                    key={index}
                    question={question}
                    showAnswers={showAnswers}
                    selectAnswer={selectAnswer}
                    id={index}
                />)
    })
    
    
    
    return(
        <div className='trivia-app'>
            <Link to="/" className="back-button" style={{position: "absolute", top: 15, left: 15}}>Back to Home</Link>
            {showStart ? <Start startQuiz={startQuiz}/> : 
                <div className='trivia-quiz-container'>
                    {quests}
                    {showAnswers ? 
                        <div className='trivia-button-container'>
                            <h3 className='trivia-button-container-score'>{"You scored " + score + "/5 correct answers"}</h3>
                            <button className='trivia-button' onClick={playAgain}>Play Again</button>
                        </div> 
                        :
                        <button className='trivia-button' disabled={!allComplete} onClick={checkAnswers}>Check Answers</button>}
                </div>}
                <img className='trivia-blob1' src={blob} alt=''/>
            <img className='trivia-blob2' src={blob} alt=''/>
        </div>
    )
}