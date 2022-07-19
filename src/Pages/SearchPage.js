import React from 'react'
import  './SearchPage.css'
import { useStateValue } from '../Stateprovider'
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from '../components/Search.js'
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {


const [{ term }, dispatch] =useStateValue(); 
 const { data } = useGoogleSearch(term);

// Mock API call
// const data= Response;

console.log(data);
    return (
        <div className="searchPage">
            

<div className='searchPage__header'>
<Link to='/'>
<img className='searchPage__logo' 
src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
/>
</Link>

<div className="searchPage__headerBody">
<Search  hideButtons noStyle/>

<div className="searchPage__options">



<div className="searchPage__optionsLeft">
<div className="searchPage__option">
<SearchIcon />

<Link to="/all">All</Link>
</div>
<div className="searchPage__option">
<ImageIcon />

<Link to="/all">Images</Link>
</div>
<div className="searchPage__option">
<DescriptionIcon />

<Link to="/all">News</Link>
</div>
<div className="searchPage__option">
<LocalOfferIcon />

<Link to="/all">shopping</Link>
</div>
<div className="searchPage__option">
<RoomIcon />

<Link to="/all">maps</Link>
</div>
<div className="searchPage__option">
<MoreVertIcon />

<Link to="/all">more</Link>
</div>
</div>
<div className="searchPage__optionsRight">

<div className="searchPage__option">
<Link to='/settings'>SettingsTools</Link>
</div>
<div className="searchPage__option">
<Link to='/tools'>Tools</Link>
</div>

</div>


</div>


</div>

</div>


{term  && (
    <div className="searchPage__results">

<p className="searchPage__resultCount">

About {data?.searchInformation.formattedTotalResults}  
results ({data?.searchInformation.formattedSearchTime} secounds )  for {term}

</p>


{data?.items.map(item => (
    <div className='searchPage__result'>
    
<a href={item.link}>  {item.pagemap?.cse_image?.length >  0 && item.pagemap?.cse_image[0]?.src && (

<img 
className="result__image"
src={item.pagemap.cse_image[0].src}
alt=""
/>

)}

 {item.displayLink} 
 
 </a>

<a className="searchPage__resultsTitle"
href={item.link}

> 
<h2>{item.title}</h2>

</a>

<p className="results__snippet"> {item.snippet}  </p>


    </div>
))}


    </div>
)}



        </div>
    )
}

export default SearchPage
