import React, { useState } from 'react'
import axios from "axios"
import './App.css'
import {ApiResponse, ApiResponseSchema} from "./zodSchemas/ApiResponseSchema.ts";


function App() {
    const placeHolder = 'Look up meanings';
    const [wordToSearch, setWordToSearch] = useState('');
    const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const [apiResponse, setApiResponse] = useState<ApiResponse>();

    const searchOnEnter = (key : string) => {
        if (key === 'Enter'){
            getDictApiResponse().catch();
        }
    }

    const getDictApiResponse = async () => {
        try {
            const test = await axios.get(apiUrl + wordToSearch)
            setApiResponse(ApiResponseSchema.parse(test.data));
        }
        catch (e: unknown){
            console.warn('Error calling the API!')
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
          {apiResponse && <DataResponse apiResponse={apiResponse}/>}
      </div>
  )
}

const DataResponse : React.FunctionComponent<{apiResponse : ApiResponse}> = ({apiResponse}) =>
    (
        <div className='results'>
            <div>{apiResponse[0].phonetics.map(phonetic => (
                <p key={`${phonetic.text} ${phonetic.audio}`}>{phonetic.text}</p>))}</div>
            <hr/>
            <ul className='meanings'>{apiResponse[0].meanings.map(
                meaning => (meaning.definitions.map(
                    definition => (
                        <li className='definitionText' key={`${definition.definition}`}>{definition.definition}</li>)
                ))
            )}
            </ul>
        </div>
    )

export default App
