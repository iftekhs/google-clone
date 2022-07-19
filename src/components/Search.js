import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../Stateprovider';
import { actionTypes } from '../reducer'

function Search({ hideButtons, noStyle }) {


const [{}, dispatch] = useStateValue();

const [input, setInput] = useState("");
const history = useHistory();


const search = (e) => {

e.preventDefault();


dispatch({
   type: actionTypes.SET_SEARCH_TERM,
   term: input
})

history.push('/search')

}

    return (
        <form>
        <div className="search">
    
<div className={!noStyle?"search__input" : "search__input nostyle"}>
<SearchIcon className="search__inputIcon"/>
<input
value={input}
onChange={e => setInput(e.target.value)}  
type="text"
/>
<MicIcon />
</div>

{!hideButtons? (
    <div className="search__buttons">
    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
    <Button variant="outlined">I'am Feeling Lucky</Button>
    
    </div>
) : (
    <div className="search__buttons ">
    <Button className="hidden"  type="submit" onClick={search} variant="outlined">Google Search</Button>
    <Button className="hidden" variant="outlined">I'am Feeling Lucky</Button>
    
    </div>
)}


        </div>
        </form>
    )
}

export default Search
