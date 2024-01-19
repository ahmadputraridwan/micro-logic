import { useState, useEffect } from "react"

const WordScramble = () => {
    const words = ['hello', 'world', 'keep', 'fight', 'dont', 'surrender', 'react', 'javascript', 'developer'];
    const [currentWord, setCurrentWord] = useState('');
    const [scrambledWord, setScrambledWord] = useState('');
    const [userInput, setUserInput] = useState('');
    const [score, setScore] = useState('');

    const getRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        const word = words[randomIndex];
        return word;
    };
    const scrambledWordHandler = (word) =>{
        const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
        return scrambled;
    };
    const returnGame = () => {
        const word = getRandomWord();
        setCurrentWord(word);
        setScrambledWord(scrambledWordHandler(word));
        setUserInput('');
    };
    const newGame = () => {
        returnGame();
        setScore(0);
    };
    const checkAnswer = () => {
        if (userInput.toLowerCase() === currentWord.toLowerCase()) {
            setScore(score + 1);
            returnGame();
        } else {
            alert('Incorrect. Try again!');
        }
    }

    useEffect(() => {
        newGame();
    }, []);
  return (
    <div className="container mt-5">
            <h1 className="mb-4 text-center">Word Scramble</h1>
            <div className="card text-center container" style={{width: '18rem'}}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="scrambledWord">Scrambled Word:</label>
                        <input
                            type="text"
                            className="form-control my-2 text-center"
                            id="scrambledWord"
                            value={scrambledWord}
                            readOnly
                        />
                        <label htmlFor="userInput">Enter Your Word:</label>
                        <input
                            type="text"
                            className="form-control my-2 text-center"
                            id="userInput"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary m-3"
                        onClick={checkAnswer}
                    >
                        Check Answer
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary m-3"
                        onClick={newGame}
                    >
                        New Game
                    </button>
                    <div className="mt-3">
                        Score: {score}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default WordScramble
