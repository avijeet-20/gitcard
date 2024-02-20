import { useEffect, useState } from "react";
import './input.css'

export function Input(props){
   
    const [username,setUsername] = useState();
   
    function handleclick(){
        setFinal(username);
    }

    
    useEffect(() => {
        const delay = setTimeout(() => {
            if (!username) return; 
            fetch(`https://api.github.com/users/${username}`)
                .then(res => res.json())
                .then(data => {
                    props.setData(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }, 500); 

        return () => clearTimeout(delay); 
    }, [username]);
    

    return<div id="inputcontainer">
        <input id="inputbox" type="text" placeholder="enter your username" onChange={(e) => setUsername(e.target.value)}></input>
        
       
    </div>
}