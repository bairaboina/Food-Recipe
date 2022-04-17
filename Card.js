import React,{ useEffect, useState } from 'react'
import Filter from './Filter';
const Card = () => {
    
    const [search, setSearch] = useState('');
    const [data,setData] = useState([]);
    const YOUR_APP_ID = "f5d5fbfb";
    const YOUR_APP_KEY ="7608c7a5b0e10a43ce6a06b94abedb63";
    
    const submitHandler = e =>{
                                                                                                                                                                                                                                                                                               
        e.preventDefault();                                                                                                                                                                                                                                  
           fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=60&calories=591-722&health=alcohol-free`).then(
           response => response.json()
           ).then(data => setData(data.hits) )
           
    
                    
    }   
    return (
        <div>
            
            <center>
            <h4>food recipe</h4> <br />
            <form onSubmit={submitHandler}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> <br/>
            <input type="submit" className="btn btn-primary" value="search" />

                
            </form>  
             {data.length>=1 ? <Filter  data={data}/>:null}
               
             

            </center>
        </div>
    )
        
}      
export default Card ;
