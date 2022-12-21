import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Images from './Images';

const apiKey = process.env.REACT_APP_API_KEY;
const App = () => {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(()=>{
    },[])
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    
    .then(response => {
      setData(response.data.photos.photo)
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
  })
  }
  return (
    <div >
      <center>
        <h2>Images</h2>
        <p></p>
        <form onSubmit={submitHandler}>
          <input style={{"border":"2px solid black","border-radius":"25px"}} size="30" type="text" onChange={changeHandler} value={search} placeholder="enter anything"/>
          <p></p>
          <input  type="submit" class="btn btn-primary mb-3" name="Search" />
        </form>
        <br />
        {data.length>=1?<Images data={data}/>:<h4>No Image Loaded</h4>}
      </center>
    </div>
  )
}

export default App
