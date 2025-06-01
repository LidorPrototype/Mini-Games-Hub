import './HangmanWord.css'

const HangmanWord = ({ guessLetters, wordToGuess, result = false }) => {
  return (
    <div className="hangman-word">
      {wordToGuess.split('').map((letter, index) => (
        <span className="letter-slot" key={index}>
          <span
            className={`letter ${
              guessLetters.includes(letter) || result ? 'visible' : 'hidden'
            } ${!guessLetters.includes(letter) && result ? 'missed' : ''}`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord
