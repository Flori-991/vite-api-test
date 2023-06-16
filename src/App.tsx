import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
    const placeHolder = 'Look up meanings';
    const [wordToSearch, setWordToSearch] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

    const searchOnEnter = (key : string) => {
        if (key === 'Enter'){
            getDictApiResponse();
        }
    }

    const getDictApiResponse = async () => {
        try {
            setApiResponse(await axios.get(apiUrl + wordToSearch));
        }
        catch (e: unknown){
            console.warn(`Error calling the API!`)
        }
    }

    return (
      <div className="App">
          <div className='dictHeader'>

          </div>
          <div className='searchBar'>
              <input
                  placeholder={placeHolder}
                  onKeyDown={event => searchOnEnter(event.key)}
                  onChange={event => setWordToSearch(event.target.value)}
                  id='searchBarInput'/>
              <button
                  onClick={() => getDictApiResponse()}
                  id='searchButton'>
                  Search
              </button>
          </div>
          {apiResponse && (
              <>
                  <div className='results'>
                      {/*<p>{apiResponse.data[0].phonetic}</p>*/}
                      {/*{apiResponse.data[0].meanings.map(meaning => (<p key={meaning.definitions[0].definition}>{meaning.definitions[0].definition}</p>))}*/}
                  </div>
              </>
          )}
      </div>
  )
}

export default App
