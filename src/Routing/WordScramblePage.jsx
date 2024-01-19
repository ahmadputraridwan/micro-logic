import { Link } from 'react-router-dom'
import WordScramble from '../Components/WordScramble/WordScramble';



const WordScramblePage = (props) => {
  return (
    <div>
      <div>
            <button className="btn btn-dark mt-5 mx-5"><Link to="/" >Kembali</Link></button>
            <WordScramble {...props}/>
        </div>
    </div>
  )
}

export default WordScramblePage

